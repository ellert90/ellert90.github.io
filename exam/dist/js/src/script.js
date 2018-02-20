"use strict";

$(function() {
    action();
    //BUTTON
    var searchValue;
    $('#search_in').keyup(function(){
        if(event.keyCode==13)
           {
              //  $('#result').empty();
              action();
           };
    });

    $('#button').on('click', function(e) {
      e.preventDefault();
      action();


    });
    function action(){

      $('#result').empty();
      $('.img__container').empty();

      searchValue = $('#search_in').val();

      var urla = 'https://pixabay.com/api/?key=4828969-66d42077835bb109c3bb61bef&q=' + searchValue + '&image_type=photo&pretty=true';


      $.ajax({
        url: urla,
        success: function(data) {
          console.log(data);
          for (var i = 0; i < 7; i++) {
            var $img = ('<div class="img__container"><div style=" background-image: url('+data.hits[i].webformatURL+'); background-size: cover; background-position: center;" class="img__result"></div><span class="img__text">' + data.hits[i].tags + '</span></div>');
            $('#result').append($img);
          }
        },
        error: function() {
          console.log(error);
        }
      });
    };



$(window).resize(function(){
  var $container = $('#result');
                 $container.imagesLoaded( function() {
                 $container.masonry({
                  // options
                     itemSelector: '.img__container',
                    //  columnWidth: '.persent-size',
                     percentPosition: true,
                     gutter: 10
                     });
                  });

  if ($(document).width() < 768) {
    $('#result').css("min-height", "910px");
  } else {
    $('#result').css("min-height", "990px");
  };
});
console.log($(document).width());

setTimeout(function() {
  if ($(document).width() < 768) {
    $('#result').css("height", "910px");
  } else {
    $('#result').css("height", "970px");
  };
  console.log('time');
}, 1000);

  //slider



  $('.slider__hider').jcarousel();

      $('.slider__left')
          .on('jcarouselcontrol:active', function() {
              $(this).removeClass('inactive');
          })
          .on('jcarouselcontrol:inactive', function() {
              $(this).addClass('inactive');
          })
          .jcarouselControl({
              target: '-=1'
          });


      $('.slider__right')
          .on('jcarouselcontrol:active', function() {
              $(this).removeClass('inactive');
          })
          .on('jcarouselcontrol:inactive', function() {
              $(this).addClass('inactive');
          })
          .jcarouselControl({
              target: '+=1'
          });

});
