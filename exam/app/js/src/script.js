"use strict";

$(function() {
    action();
    //BUTTON
    var searchValue;
    $('#search_in').keyup(function(){
        if(event.keyCode==13)
           {
              action();
           }
    })

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
            var $img = ('<div class="img__container"><img src="'+data.hits[i].webformatURL+'" class="img__search"/><span class="img__text">' + data.hits[i].tags + '</span></div>');
            $('#result').css("height", "100%").append($img);
          }
        },
        error: function() {
          console.log('error fetching!');
        }
      });
    };
});

// $('#result').masonry({
//   itemSelector: '.img__container',
//   gutter: 30
// });
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
  //slider

  $('.works__hider').jcarousel();

        $('.slider-left')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.slider-right')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });
