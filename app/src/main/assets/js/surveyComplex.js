 // A $( document ).ready() block.

    $( document ).ready(function() {
        var slideA = 0;
        var slideB = 0;
        var slideC = 0;
        var total;
     $('#conditionSlider').change(function(){
            /*$('#sliderValue').html($('#conditionSlider').val());*/
            slideA = $('#conditionSlider').val();
            return(slideA);
     });

     $('#conditionSlider2').change(function(){
           /* $('#sliderValue2').html($('#conditionSlider2').val());*/
            slideB = $('#conditionSlider2').val();
            return(slideB);
     });

     $('#conditionSlider3').change(function(){
            /*$('#sliderValue3').html($('#conditionSlider3').val());*/
            slideC = $('#conditionSlider3').val();
            return(slideC);
     });


        $('#okButton').click(function() {
                 // Use parseInt(text, 10) to parse a string into an integer
                 // https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/
                 total = parseInt(slideA, 10)+parseInt(slideB, 10)+parseInt(slideC, 10);

                 if        (total >= 24){
                    window.location.replace("greatDay.html")
                 } else if (total >= 17){
                    window.location.replace("goodDay.html")
                 } else if (total >= 11){
                    window.location.replace("okDay.html")
                 } else {
                    window.location.replace("badDay.html")
                 }


              /*
              $('#sliderValue').html("total " + total);

              console.log("slideA " + slideA);
              console.log("slideB " + slideB);
              console.log("slideC " + slideC);
              console.log("Total " + total);*/



        })

   });
