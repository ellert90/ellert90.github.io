"use strict";$(function(){function t(){$("#result").empty(),$(".img__container").empty(),e=$("#search_in").val();var t="https://pixabay.com/api/?key=4828969-66d42077835bb109c3bb61bef&q="+e+"&image_type=photo&pretty=true";$.ajax({url:t,success:function(t){for(var e=0;e<7;e++){var n='<div class="img__container"><div style="background: url('+t.hits[e].webformatURL+'); background-size: cover;" class="img__search"></div><span class="img__text">'+t.hits[e].tags+"</span></div>";$("#result").css("height","100%").append(n)}},error:function(){console.log("error fetching!")}})}t();var e;$("#search_in").keyup(function(){13==event.keyCode&&t()}),$("#button").on("click",function(e){e.preventDefault(),t()})});var $container=$("#result");$container.imagesLoaded(function(){$container.masonry({itemSelector:".img__container",percentPosition:!0,gutter:10})}),$(".works__hider").jcarousel(),$(".slider-left").on("jcarouselcontrol:active",function(){$(this).removeClass("inactive")}).on("jcarouselcontrol:inactive",function(){$(this).addClass("inactive")}).jcarouselControl({target:"-=1"}),$(".slider-right").on("jcarouselcontrol:active",function(){$(this).removeClass("inactive")}).on("jcarouselcontrol:inactive",function(){$(this).addClass("inactive")}).jcarouselControl({target:"+=1"});   $container.imagesLoaded( function() {
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
