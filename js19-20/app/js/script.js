$(function() {
  var slider = $('.slider'),
    sliderContent = slider.html(),                      
    slideWidth = $('.slider-box').outerWidth(),        
    slideCount = $('.slider__img').length,              
    prev = $('.slider-box .prev'),                     
    next = $('.slider-box .next'),                    
    slideNum = 1,                                      
    index = 0,
    clickBullets = 0,
    sliderInterval = 3300,                             
    animateTime = 1000,                                 
    course = 1,                                         
    margin = - slideWidth;                              

  for (var i=0; i<slideCount; i++)                      
  {
    html=$('.bullets').html() + '<li></li>';          
    $('.bullets').html(html);                         
  }
  var  bullets = $('.slider-box .bullets li');          


  $('.slider-box .bullets li:first').addClass('active');
  $('.slider .slider__img:last').clone().prependTo('.slider');   
  $('.slider .slider__img').eq(1).clone().appendTo('.slider');   
  $('.slider').css('margin-left', -slideWidth);         

  function nextSlide(){                                 
    interval = window.setInterval(animate, sliderInterval);
  }

  function animate(){
    if (margin==-slideCount*slideWidth-slideWidth  && course==1){     
      slider.css({'marginLeft':-slideWidth});           
      margin=-slideWidth*2;
    }else if(margin==0 && course==-1){                  
      slider.css({'marginLeft':-slideWidth*slideCount});
      margin=-slideWidth*slideCount+slideWidth;
    }else{                                              
      margin = margin - slideWidth*(course);            
    }
    slider.animate({'marginLeft':margin},animateTime);  

    if (clickBullets==0){                               
    bulletsActive();                                
  }else{                                              
    slideNum=index+1;                              
  }
  }

  function bulletsActive(){
    if (course==1 && slideNum!=slideCount){        
    slideNum++;                                     
      $('.bullets .active').removeClass('active').next('li').addClass('active');
  }else if (course==1 && slideNum==slideCount){      
    slideNum=1;                                     
    $('.bullets li').removeClass('active').eq(0).addClass('active'); 
    return false;
  }else if (course==-1  && slideNum!=1){              
    slideNum--;                                     
      $('.bullets .active').removeClass('active').prev('li').addClass('active');
    return false;
  }else if (course==-1  && slideNum==1){             
    slideNum=slideCount;                            
    $('.bullets li').removeClass('active').eq(slideCount-1).addClass('active'); 
  }
  }

  function sliderStop(){                                
    window.clearInterval(interval);
  }

  prev.click(function() {                              
    if (slider.is(':animated')) { return false; }       
    var course2 = course;                               
    course = -1;                                        
    animate();                                          
    course = course2 ;                                  
  });
  next.click(function() {                               
    if (slider.is(':animated')) { return false; }       
    var course2 = course;                               
    course = 1;                                         
    animate();                                          
    course = course2 ;                                  
  });
  bullets.click(function() {                            
    if (slider.is(':animated')) { return false; }       
  sliderStop();                                      
  index = bullets.index(this);                      
  if (course==1){                                     
    margin=-slideWidth*index;                      
  }else if (course==-1){                              
    margin=-slideWidth*index-2*slideWidth;
  }
  $('.bullets li').removeClass('active').eq(index).addClass('active');
  clickBullets = 1;                                     
  animate();
  clickBullets = 0;
  nextSlide();
  });

  slider.add(next).add(prev).hover(function() {         
    sliderStop();                                       
  }, nextSlide);                                       

  nextSlide();                                         

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
