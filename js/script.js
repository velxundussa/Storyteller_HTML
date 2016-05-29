 $(document).ready(function() {


     numToChar();


     $("#downloadChar").click(function(e) {
         downloadCharacter(document.documentElement.innerHTML, $("#charName").text() + ".html");
     });

     $(document.body).on("click", ".editable", function(e) {

         var id = "";
         if ($(this).attr('id') != "") {
             id = "id='" + $(this).attr('id') + "'";
         };

         $(this).replaceWith("<input type='text' value='" + $(this).text() + "'" + id +">");
     });

     $(document.body).on("focusout", "input", function(e) {

         var id = "";
         if ($(this).attr('id') != "") {
             id = "id='" + $(this).attr('id') + "'";
         };

         $(this).replaceWith("<span class='editable'" + id +">" + $(this).val() + "</span>");
     });

     $(document.body).on("click", ".miscData", function(e) {
         $(this).replaceWith("<textarea class='dataEntry' rows='50' cols='90'>" + $(this).text() + "</textarea>");
     });

     $(document.body).on("focusout", ".dataEntry", function(e) {
         $(this).replaceWith("<pre class='miscData'>" + $(this).val() + "</pre>");
     });

     $(".Stat, .Stat10, .Square10").click(function(e) {
         var relX = e.pageX - $(this).offset().left;

         var maxValue = $(this).text().length;
         var maxX = $(this).width();
         var targetValue = Math.ceil((relX / maxX) * maxValue);

         if (($(this).text().charAt(0) != $(this).text().charAt(1)) && (targetValue == 1)) {
             targetValue = 0;
         }

         $(this).html(targetValue);

         numToChar();
     });

     $('.health').click(function(e) {
         if ($(this).text() == "□") {
             $(this).text("/");
         } else if ($(this).text() == "/") {
             $(this).text("X");
         } else if ($(this).text() == "X") {
             $(this).text("*");
         } else {
             $(this).text("□");
         }
     });

     function numToChar() {
         $('.Stat').each(function(i, obj) {
             numToDot(obj, 5);
         });

         $('.Stat10').each(function(i, obj) {
             numToDot(obj, 10);
         });

         $('.Square10').each(function(i, obj) {
             numToSquare(obj, 10);
         });

         $('.health').each(function(i, obj) {
             numToSquare(obj, 1);
         });
     }

     function numToDot(obj, maxValue) {
         value = obj.innerHTML;

         if (value > maxValue) {
             value = maxValue;
         }

         if ($.isNumeric(value)) {
             obj.innerHTML = "";

             for (j = 0; j < value; j++) {
                 obj.innerHTML += "●";
             }

             for (j = 0; j < maxValue - value; j++) {
                 obj.innerHTML += "○";
             }
         }
     }

     function numToSquare(obj, maxvalue) {
         // ■ □

         value = obj.innerHTML;

         if ($.isNumeric(value)) {
             obj.innerHTML = "";

             for (j = 0; j < value; j++) {
                 obj.innerHTML += "■";
             }

             for (j = 0; j < maxvalue - value; j++) {
                 obj.innerHTML += "□";
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

//  LocalWords:  downloadCharacter documentElement parentOffset href charset
//  LocalWords:  utf LocalWords html
