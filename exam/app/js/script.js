"use strict";$(function(){function e(){$("#result").empty(),$(".img__container").empty(),t=$("#search_in").val();var e="https://pixabay.com/api/?key=4828969-66d42077835bb109c3bb61bef&q="+t+"&image_type=photo&pretty=true";$.ajax({url:e,success:function(e){console.log(e);for(var t=0;t<7;t++){var o='<div class="img__container"><div style=" background-image: url('+e.hits[t].webformatURL+'); background-size: cover; background-position: center;" class="img__result"></div><span class="img__text">'+e.hits[t].tags+"</span></div>";$("#result").append(o)}},error:function(){console.log(error)}})}e();var t;$("#search_in").keyup(function(){13==event.keyCode&&e()}),$("#button").on("click",function(t){t.preventDefault(),e()}),$(window).resize(function(){var e=$("#result");e.imagesLoaded(function(){e.masonry({itemSelector:".img__container",percentPosition:!0,gutter:10})}),$(document).width()<768?$("#result").css("min-height","910px"):$("#result").css("min-height","990px")}),console.log($(document).width()),setTimeout(function(){$(document).width()<768?$("#result").css("height","910px"):$("#result").css("height","970px"),console.log("time")},1e3),$(".slider__hider").jcarousel(),$(".slider__left").on("jcarouselcontrol:active",function(){$(this).removeClass("inactive")}).on("jcarouselcontrol:inactive",function(){$(this).addClass("inactive")}).jcarouselControl({target:"-=1"}),$(".slider__right").on("jcarouselcontrol:active",function(){$(this).removeClass("inactive")}).on("jcarouselcontrol:inactive",function(){$(this).addClass("inactive")}).jcarouselControl({target:"+=1"})});r: 10
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
