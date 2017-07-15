'use strict';

// alert(window.innerWidth);

let wrp = document.querySelector('.wrp'),
    main = document.querySelector('.main'),
    skillParent = document.querySelector('#skills');


let animate = ({timing, draw, duration}) => {

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

let slideSkill = (el, width) => {
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

let upAnim = el => {
    animate({
          duration: 2000,
          timing: function(timeFraction) {
            return Math.pow(timeFraction, 5);
          },
          draw: function(progress) {
            el.style.bottom = progress * 200 + 'px';
            el.style.opacity = progress * 1 * 5;
            }
        });
};

// window.onload = upAnim(wrp);

//SKILLS

let skillsObject = {
  'HTML': 95,
  'CSS': 80,
  'JavaScript': 55,
  'JSON/AJAX': 60,
  'jQuery': 70,
  'Gulp': 60,
  'SASS': 70,
  'GitHub': 70,
  'GIT': 50,
  'BEM': 60,
  'Responsive': 75,
  'Photoshop': 85
};

let skill = () => {

  let skill = document.createElement('div');
  skill.setAttribute('class', 'object__content skill');

  for (let key in skillsObject) {
    let skillItem = document.createElement('div');
    let skillText = document.createElement('span');
    let skillScale = document.createElement('span');

    skillText.appendChild(document.createTextNode(key));

    skillItem.setAttribute('class', 'skill__item');
    skillText.setAttribute('class', 'skill__text');
    skillScale.setAttribute('class', 'skill__scale');

    skillItem.appendChild(skillText);
    skillItem.appendChild(skillScale);
    skill.appendChild(skillItem);


    setTimeout(slideSkill, 1800, skillScale, skillsObject[key]);
  };

  skillParent.appendChild(skill);
};

skill();

//masonry

window.onload = function myMasonry() {

  let animEl = document.querySelector('.wrp');
  animEl.style.top = 0;
  animEl.style.opacity = 1;

  let masVal = document.querySelector('.main');
  new Masonry(masVal, {
    itemSelector: '.object',
    columnWidth: 300,
    isFitWidth: true,
    gutter: 20
  });
};
