'use strict';

function animate({timing, draw, duration}) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction goes from 0 to 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // calculate the current animation state
    let progress = timing(timeFraction);

    draw(progress); // draw it

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
};

function slideSkill(el, width) {
  animate({
        duration: 1300,
        timing: function(timeFraction) {
          return Math.pow(timeFraction, 5);
        },
        draw: function(progress) {
          el.style.width = (progress * 1.3) * width + 'px';
        }
      });
};

function upAnim(el, time){

    $(el).animate({
      top: '-=200',
      opacity: '+=1',
    }, time || 2000, 'easeOutExpo')

};

$(window).bind('load', upAnim('.wrp'));

//SKILLS

var skillsObject = {
  'HTML': 95,
  'CSS': 80,
  'JavaScript': 50,
  'JSON/AJAX': 60,
  'jQuery': 70,
  'Gulp': 50,
  'SASS': 70,
  'GitHub': 70,
  'GIT': 50,
  'BEM': 60,
  'Responsive': 60,
  'Photoshop': 80
};

for (var key in skillsObject) {
  var skill = document.querySelector('.skill');
  var skillItem = document.createElement('div');
  var skillText = document.createElement('span');
  var skillScale = document.createElement('span');

  skillText.appendChild(document.createTextNode(key));

  skillItem.setAttribute('class', 'skill__item');
  skillText.setAttribute('class', 'skill__text');
  skillScale.setAttribute('class', 'skill__scale');

  skillItem.appendChild(skillText);
  skillItem.appendChild(skillScale);
  skill.appendChild(skillItem);

  setTimeout(slideSkill, 1100, skillScale, skillsObject[key]);
};

$('.main').masonry({
 // options
    itemSelector: '.object',
    columnWidth: 280,
    isFitWidth: true,
    gutter: 20
  });
