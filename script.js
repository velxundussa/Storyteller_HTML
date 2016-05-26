$(document).ready(function() {

    numToChar()
    // downloadCharacter(document.documentElement.innerHTML, $(document).find("title").text()+".html");



    $(".Stat, .Stat10, .Square10").click(function(e){
        // var parentOffset = $(this).parent().offset();
        //or $(this).offset(); if you really just want the current element's offset
        var relX = e.pageX- $(this).offset().left;

        var maxValue = $(this).text().length;
        var maxX = $(this).width();

        // alert(relX + " / " + maxX + " * " + maxValue);
        $(this).html(Math.ceil((relX/maxX)*maxValue));

        numToChar();
    });

    $('.health').click(function (e){
        if($(this).text() == "□") {
            $(this).text("/");
        } else if($(this).text() == "/") {
            $(this).text("X");
        } else if($(this).text() == "X") {
            $(this).text("*");
        } else { 
            $(this).text("□");
        }
    });

    function numToChar(){
        $('.Stat').each(function(i, obj) {
            numToDot(obj,5);
        });

        $('.Stat10').each(function(i, obj) {
            numToDot(obj,10);
        });

        $('.Square10').each(function(i, obj) {
            numToSquare(obj,10);
        });

        $('.health').each(function(i, obj) {
            numToSquare(obj,1);
        });
    }

    function numToDot(obj, maxValue) {
        value = obj.innerHTML;

        if (value > maxValue) {
            value = maxValue;
        };

        if($.isNumeric(value)) {
            obj.innerHTML = ""

            for (j=0 ; j<value ; j++) {
                obj.innerHTML += "●"
            }

            for (j=0 ; j< maxValue - value ; j++) {
                obj.innerHTML += "○"
            }
        };
    }

    function numToSquare(obj, maxvalue) {
        // ■ □

        value = obj.innerHTML;

        if($.isNumeric(value)) {
            obj.innerHTML = ""

            for (j=0 ; j<value ; j++) {
                obj.innerHTML += "■"
            }

            for (j=0 ; j< maxvalue - value ; j++) {
                obj.innerHTML += "□"
            }
        }
    }

    function downloadCharacter(pageHTML, filename) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(pageHTML));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

});
