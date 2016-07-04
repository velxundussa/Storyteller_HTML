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

         $(this).replaceWith("<input type='text' value='" + $(this).text() + "'" + id + ">");
     });

     $(document.body).on("focusout", "input", function(e) {

         var id = "";
         if ($(this).attr('id') != "") {
             id = "id='" + $(this).attr('id') + "'";
         };

         $(this).replaceWith("<span class='editable'" + id + ">" + $(this).val() + "</span>");
     });

     $(document.body).on("click", ".miscData", function(e) {
         $(this).replaceWith("<textarea class='dataEntry' rows='50' cols='90'>" + $(this).text() + "</textarea>");
     });

     $(document.body).on("focusout", ".dataEntry", function(e) {
         $(this).replaceWith("<pre class='miscData'>" + $(this).val() + "</pre>");
     });

     $(".Stat, .Stat10, .Square10, .Square").click(function(e) {
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

     $(".Favorite").click(function(e) {
         // ■ □

         if ($(this).text() == "■") {
             $(this).text("□");
         } else {
             $(this).text("■");
         }
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

     /**
      * Scans the document and calls proper transformation functions with appropriate max values for each
      */
     function numToChar() {
         $('.Stat').each(function(i, obj) {
             numToDot(obj, 5);
         });

         $('.Stat10').each(function(i, obj) {
             numToDot(obj, 10);
         });

         $('.Square').each(function(i, obj) {
             numToSquare(obj, 5);
         });

         $('.Square10').each(function(i, obj) {
             numToSquare(obj, 10);
         });

         $('.Favorite').each(function(i, obj) {
             numToSquare(obj, 1);
         });

         $('.health').each(function(i, obj) {
             numToSquare(obj, 1);
         });
     }

     /**
      * Transform HTML tag to Dot notation
      * @param {} obj - HTML tag to transform
      * @param {} maxValue
      */
     function numToDot(obj, maxValue) {
         value = obj.innerHTML;

         if (value > maxValue) {
             value = maxValue;
         }

         if ($.isNumeric(value)) {
             $(obj).attr("numValue", value);
             obj.innerHTML = "";

             for (j = 0; j < value; j++) {
                 obj.innerHTML += "●";
             }

             for (j = 0; j < maxValue - value; j++) {
                 obj.innerHTML += "○";
             }
         }
     }

     /**
      * Transform HTML tag to square notation
      * @param {} obj - the HTML tag to transform
      * @param {} maxvalue - The maximum value of the stat
      */
     function numToSquare(obj, maxvalue) {
         // ■ □

         value = obj.innerHTML;

         if ($.isNumeric(value)) {
             $(obj).attr("numValue", value);
             obj.innerHTML = "";

             for (j = 0; j < value; j++) {
                 obj.innerHTML += "■";
             }

             for (j = 0; j < maxvalue - value; j++) {
                 obj.innerHTML += "□";
             }
         }
     }

     /**
      * Downloads the character sheet to an external HTML
      * @param {} pageHTML - The data to download
      * @param {} filename - The Name of the output file
      */
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
