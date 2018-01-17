(function($) {
  $.fn.mySlider = function(){

      var leftUIEl = $('.carousel-arrow-left');
      var rightUIEl = $('.carousel-arrow-right');
      var elementsList = $('.carousel-list');

      var pixelOffset = 845;
      var currentLeftValue = 0;
      var elementsCount = elementsList.find('li').length;
      var minimumOffset = - ((elementsCount - 1) * pixelOffset);
      var maximunOffset = 0;

      leftUIEl.click(function(){
        if (currentLeftValue != maximunOffset) {
          currentLeftValue += 845;
          elementsList.animate({left: currentLeftValue + "px"}, 500);
        }
        return currentLeftValue;
      });
      rightUIEl.click(function(){
        if (currentLeftValue != minimumOffset) {
          currentLeftValue -= 845;
          elementsList.animate({left: currentLeftValue + "px"}, 500);
        }
        return currentLeftValue;
      });

    return this;
  }
}) (jQuery);
