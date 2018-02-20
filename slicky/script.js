'use strict';

let container = document.querySelectorAll('.container');
let fixTitle = document.getElementById('head_title');
let wrapper = document.getElementById('wrp');
let titleElem = document.querySelector('.title');

let titleHeight = getComputedStyle(titleElem);

// забезпечує коректну довжину плаваючого заголовка, при переході на горизонтальний режим на мобільному

// window.addEventListener('orientationchange', () => {
//   let interval = setInterval(function() {
//     let titleWidth = document.getElementById('orientationchange');
//     let titleWidthStyle = getComputedStyle(titleWidth);
//     fixTitle.style.width = document.body.offsetWidth + 'px';
//     setTimeout(function(){
//       clearInterval(interval);
//     },100);
//   },4);
// });


//щоб плавающий заголовок завжди був на всю ширину звичайного заголовка

// let resize = () => {
//     if (innerWidth <= 600) fixTitle.style.width = '100%';
//     if (innerWidth >= 600) fixTitle.style.width = 600 + 'px';
// }

// window.addEventListener('resize', resize());

//прикріплює плаваючий заголовок до верху сторінки коли він виявляється у зоні текстів.

window.onscroll = () => {
  let wrpScroll = fixTitle.getBoundingClientRect();
  let wrpVar = wrapper.getBoundingClientRect();

//прикріпляє заголовок
  if (wrpVar.top <= 0) {
    fixTitle.style.position = 'fixed';
    fixTitle.style.visibility = 'visible';
  }

  //
  if (wrpVar.bottom <= 0) {
    fixTitle.style.position = 'static';
    fixTitle.style.visibility = 'hidden';
  }
  if (wrpVar.top >= 0) {
    fixTitle.style.position = 'static';
    fixTitle.style.visibility = 'hidden';
  }

//перебирає блоки з текстом і заголовком, зчитує текст і колір потрібного заголовка і додає до плаваючого

  for (let i = 0; i < container.length; i++) {
    let cicle = container[i].getBoundingClientRect();

    if (cicle.top <= 0) {
      let readNode = container[i].firstElementChild.innerHTML;
      fixTitle.innerHTML = readNode;
      fixTitle.style.top = 0;
      let fixTitleStyle = getComputedStyle(container[i].firstElementChild);
      fixTitle.style.background = fixTitleStyle.backgroundColor;
      document.querySelector('meta[name="theme-color"]').setAttribute("content", fixTitleStyle.backgroundColor);
    }
  }
};
