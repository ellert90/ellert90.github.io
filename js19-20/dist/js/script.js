$(function(){function e(){interval=window.setInterval(s,m)}function s(){b==-t*n-n&&1==f?(l.css({marginLeft:-n}),b=2*-n):0==b&&f==-1?(l.css({marginLeft:-n*t}),b=-n*t+n):b-=n*f,l.animate({marginLeft:b},u),0==v?i():d=c+1}function i(){if(1==f&&d!=t)d++,$(".bullets .active").removeClass("active").next("li").addClass("active");else{if(1==f&&d==t)return d=1,$(".bullets li").removeClass("active").eq(0).addClass("active"),!1;if(f==-1&&1!=d)return d--,$(".bullets .active").removeClass("active").prev("li").addClass("active"),!1;f==-1&&1==d&&(d=t,$(".bullets li").removeClass("active").eq(t-1).addClass("active"))}}function a(){window.clearInterval(interval)}for(var l=$(".slider"),n=(l.html(),$(".slider-box").outerWidth()),t=$(".slider__img").length,r=$(".slider-box .prev"),o=$(".slider-box .next"),d=1,c=0,v=0,m=3300,u=1e3,f=1,b=-n,C=0;C<t;C++)html=$(".bullets").html()+"<li></li>",$(".bullets").html(html);var p=$(".slider-box .bullets li");$(".slider-box .bullets li:first").addClass("active"),$(".slider .slider__img:last").clone().prependTo(".slider"),$(".slider .slider__img").eq(1).clone().appendTo(".slider"),$(".slider").css("margin-left",-n),r.click(function(){if(l.is(":animated"))return!1;var e=f;f=-1,s(),f=e}),o.click(function(){if(l.is(":animated"))return!1;var e=f;f=1,s(),f=e}),p.click(function(){return!l.is(":animated")&&(a(),c=p.index(this),1==f?b=-n*c:f==-1&&(b=-n*c-2*n),$(".bullets li").removeClass("active").eq(c).addClass("active"),v=1,s(),v=0,void e())}),l.add(o).add(r).hover(function(){a()},e),e(),$(function(){$(".banners__set > .banners__link").on("click",function(e){e.preventDefault(),$(this).hasClass("active")?($(this).removeClass("active"),$(this).siblings(".banners__content").slideUp(500),$(".banners__set > .banners__link i").removeClass("fa-minus").addClass("fa-plus")):($(".banners__set > .banners__link i").removeClass("fa-minus").addClass("fa-plus"),$(this).find("i").removeClass("fa-plus").addClass("fa-minus"),$(".banners__set > .banners__link").removeClass("active"),$(this).addClass("active"),$(".banners__content").slideUp(200),$(this).siblings(".banners__content").slideDown(200)),$(".fa-plus").text("+"),$(".fa-minus").text("-")})});var g="https://rawgit.com/goit-fe/markup_fe2o/master/js_19-20/data.json";$.getJSON(g,function(e){var s=e;console.log(s);var i=_.map(s,"skills");i=_.flatten(i),i=_.uniq(i),i=_.map(i,function(e){var s=e.toLowerCase();return s},[]),i=_.sortBy(i),console.log("Skills",i);var a=_.sortBy(s,"friends.length");a=_.map(s,"name"),console.log("Names",a);var l=_.map(s,"friends");l=_.flattenDeep(l),l=_.map(l,"name"),l=_.uniq(l),console.log("Friends",l)})}); положение
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
  nextSlide();
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

///////////LODASH///////////////

var _url = 'https://rawgit.com/goit-fe/markup_fe2o/master/js_19-20/data.json';

$.getJSON(_url, function(json){
  var jsonP = json;
  console.log(jsonP);

  //skills

  var skillsArr = _.map(jsonP, 'skills');
      skillsArr = _.flatten(skillsArr);
      skillsArr = _.uniq(skillsArr);
      skillsArr = _.map(skillsArr, function (a) {
             var sort = a.toLowerCase();
             return sort;
            }, []);
       skillsArr = _.sortBy(skillsArr);

       console.log('Skills', skillsArr);


//names

var nameArr = _.sortBy(jsonP, 'friends.length');
    nameArr = _.map(jsonP, 'name');

    console.log('Names', nameArr);

//friends

var friendsArr = _.map(jsonP, 'friends');
    friendsArr = _.flattenDeep(friendsArr);
    friendsArr = _.map(friendsArr, 'name');
    friendsArr = _.uniq(friendsArr);

    console.log('Friends', friendsArr);

});



});
