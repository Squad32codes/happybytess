

    // A $( document ).ready() block.
    $( document ).ready(function() {
     $('#conditionSlider').change(function(){
            $('#sliderValue').html($('#conditionSlider').val());

      });
    });