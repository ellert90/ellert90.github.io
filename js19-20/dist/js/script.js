$(function(){function e(){interval=window.setInterval(s,u)}function s(){_==-t*n-n&&1==m?(a.css({marginLeft:-n}),_=2*-n):0==_&&m==-1?(a.css({marginLeft:-n*t}),_=-n*t+n):_-=n*m,a.animate({marginLeft:_},f),0==v?i():c=o+1}function i(){if(1==m&&c!=t)c++,$(".bullets .active").removeClass("active").next("li").addClass("active");else{if(1==m&&c==t)return c=1,$(".bullets li").removeClass("active").eq(0).addClass("active"),!1;if(m==-1&&1!=c)return c--,$(".bullets .active").removeClass("active").prev("li").addClass("active"),!1;m==-1&&1==c&&(c=t,$(".bullets li").removeClass("active").eq(t-1).addClass("active"))}}function l(){window.clearInterval(interval)}for(var a=$(".slider"),n=(a.html(),$(".slider-box").outerWidth()),t=$(".slider__img").length,r=$(".slider-box .prev"),d=$(".slider-box .next"),c=1,o=0,v=0,u=3300,f=1e3,m=1,_=-n,b=0;b<t;b++)html=$(".bullets").html()+"<li></li>",$(".bullets").html(html);var C=$(".slider-box .bullets li");$(".slider-box .bullets li:first").addClass("active"),$(".slider .slider__img:last").clone().prependTo(".slider"),$(".slider .slider__img").eq(1).clone().appendTo(".slider"),$(".slider").css("margin-left",-n),r.click(function(){if(a.is(":animated"))return!1;var e=m;m=-1,s(),m=e}),d.click(function(){if(a.is(":animated"))return!1;var e=m;m=1,s(),m=e}),C.click(function(){return!a.is(":animated")&&(l(),o=C.index(this),1==m?_=-n*o:m==-1&&(_=-n*o-2*n),$(".bullets li").removeClass("active").eq(o).addClass("active"),v=1,s(),void(v=0))}),a.add(d).add(r).hover(function(){l()},e),e(),$(function(){$(".banners__set > .banners__link").on("click",function(e){e.preventDefault(),$(this).hasClass("active")?($(this).removeClass("active"),$(this).siblings(".banners__content").slideUp(500),$(".banners__set > .banners__link i").removeClass("fa-minus").addClass("fa-plus")):($(".banners__set > .banners__link i").removeClass("fa-minus").addClass("fa-plus"),$(this).find("i").removeClass("fa-plus").addClass("fa-minus"),$(".banners__set > .banners__link").removeClass("active"),$(this).addClass("active"),$(".banners__content").slideUp(200),$(this).siblings(".banners__content").slideDown(200)),$(".fa-plus").text("+"),$(".fa-minus").text("-")})})});�у прибавляется один буллет
    $('.bullets').html(html);                         // и добавляется в код
  }
  var  bullets = $('.slider-box .bullets li');          // Переменная хранит набор буллитов


  $('.slider-box .bullets li:first').addClass('active');
  $('.slider .slider__img:last').clone().prependTo('.slider');   // Копия последнего слайда помещается в начало.
  $('.slider .slider__img').eq(1).clone().appendTo('.slider');   // Копия первого слайда помещается в конец.
  $('.slider').css('margin-left', -slideWidth);         // Контейнер .slider сдвигается влево на ширину одного слайда.

  function nextSlide(){                                 // Запускается функция animation(), выполняющая смену слайдов.
    interval = window.setInterval(animate, sliderInterval);
  }

  function animate(){
    if (margin==-slideCount*slideWidth-slideWidth  && course==1){     // Если слайдер дошел до конца
      slider.css({'marginLeft':-slideWidth});           // то блок .slider возвращается в начальное положение
      margin=-slideWidth*2;
    }else if(margin==0 && course==-1){                  // Если слайдер находится в начале и нажата кнопка "назад"
      slider.css({'marginLeft':-slideWidth*slideCount});// то блок .slider перемещается в конечное положение
      margin=-slideWidth*slideCount+slideWidth;
    }else{                                              // Если условия выше не сработали,
      margin = margin - slideWidth*(course);            // значение margin устанавливается для показа следующего слайда
    }
    slider.animate({'marginLeft':margin},animateTime);  // Блок .slider смещается влево на 1 слайд.

    if (clickBullets==0){                               // Если слайдер сменился не через выбор буллета
    bulletsActive();                                // Вызов функции, изменяющей активный буллет
  }else{                                              // Если слайдер выбран с помощью буллета
    slideNum=index+1;                               // Номер выбранного слайда
  }
  }

  function bulletsActive(){
    if (course==1 && slideNum!=slideCount){        // Если слайды скользят влево и текущий слайд не последний
    slideNum++;                                     // Редактирунтся номер текущего слайда
      $('.bullets .active').removeClass('active').next('li').addClass('active'); // Изменить активный буллет
  }else if (course==1 && slideNum==slideCount){       // Если слайды скользят влево и текущий слайд последний
    slideNum=1;                                     // Номер текущего слайда
    $('.bullets li').removeClass('active').eq(0).addClass('active'); // Активным отмечается первый буллет
    return false;
  }else if (course==-1  && slideNum!=1){              // Если слайды скользят вправо и текущий слайд не последни
    slideNum--;                                     // Редактирунтся номер текущего слайда
      $('.bullets .active').removeClass('active').prev('li').addClass('active'); // Изменить активный буллет
    return false;
  }else if (course==-1  && slideNum==1){              // Если слайды скользят вправо и текущий слайд последни
    slideNum=slideCount;                            // Номер текущего слайда
    $('.bullets li').removeClass('active').eq(slideCount-1).addClass('active'); // Активным отмечается последний буллет
  }
  }

  function sliderStop(){                                // Функция преостанавливающая работу слайдера
    window.clearInterval(interval);
  }

  prev.click(function() {                               // Нажата кнопка "назад"
    if (slider.is(':animated')) { return false; }       // Если не происходит анимация
    var course2 = course;                               // Временная переменная для хранения значения course
    course = -1;                                        // Устанавливается направление слайдера справа налево
    animate();                                          // Вызов функции animate()
    course = course2 ;                                  // Переменная course принимает первоначальное значение
  });
  next.click(function() {                               // Нажата кнопка "назад"
    if (slider.is(':animated')) { return false; }       // Если не происходит анимация
    var course2 = course;                               // Временная переменная для хранения значения course
    course = 1;                                         // Устанавливается направление слайдера справа налево
    animate();                                          // Вызов функции animate()
    course = course2 ;                                  // Переменная course принимает первоначальное значение
  });
  bullets.click(function() {                            // Нажат один из буллетов
    if (slider.is(':animated')) { return false; }       // Если не происходит анимация
  sliderStop();                                       // Таймер на показ очередного слайда выключается
  index = bullets.index(this);                      // Номер нажатого буллета
  if (course==1){                                     // Если слайды скользят влево
    margin=-slideWidth*index;                       // значение margin устанавливается для показа следующего слайда
  }else if (course==-1){                              // Если слайды скользят вправо
    margin=-slideWidth*index-2*slideWidth;
  }
  $('.bullets li').removeClass('active').eq(index).addClass('active');  // Выбранному буллету добавляется сласс .active
  clickBullets = 1;                                     // Флаг информирующий о том, что слайд выбран именно буллетом
  animate();
  clickBullets = 0;
  });

  slider.add(next).add(prev).hover(function() {         // Если курсор мыши в пределах слайдера
    sliderStop();                                       // Вызывается функция sliderStop() для приостановки работы слайдера
  }, nextSlide);                                        // Когда курсор уходит со слайдера, анимация возобновляется.

  nextSlide();                                          // Вызов функции nextSlide()

  $(function(){

  //karu

    $(".banners__set > .banners__link").on("click", function(e){
      e.preventDefault();
      if($(this).hasClass('active')){
        $(this).removeClass("active");
        $(this).siblings('.banners__content').slideUp(500);
        $(".banners__set > .banners__link i").removeClass("fa-minus").addClass("fa-plus");
      }else{
        $(".banners__set > .banners__link i").removeClass("fa-minus").addClass("fa-plus");
      $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
      $(".banners__set > .banners__link").removeClass("active");
      $(this).addClass("active");
      $('.banners__content').slideUp(200);
      $(this).siblings('.banners__content').slideDown(200);
      }
      $('.fa-plus').text('+');
      $('.fa-minus').text('-');
    });
  });;



});
