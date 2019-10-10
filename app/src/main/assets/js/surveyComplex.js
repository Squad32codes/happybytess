   // A $( document ).ready() block.
var slideA = 0;
var slideB = 0;
var slideC = 0;

    $( document ).ready(function() {

     $('#conditionSlider').change(function(){
            $('#sliderValue').html($('#conditionSlider').val());
            slideA = $('#conditionSlider').val();
            return(slideA);
     });

     $('#conditionSlider2').change(function(){
            $('#sliderValue2').html($('#conditionSlider2').val());
            slideB = $('#conditionSlider2').val();
            return(slideB);
     });

     $('#conditionSlider3').change(function(){
            $('#sliderValue3').html($('#conditionSlider3').val());
            slideC = $('#conditionSlider3').val();
            return(slideC);
     });


   });
