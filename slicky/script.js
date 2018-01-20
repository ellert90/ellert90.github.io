var container = document.querySelectorAll('.container');
var fixTitle = document.getElementById('head_title');
var wrapper = document.getElementById('wrp');
var titleElem = document.querySelector('.title');

//забезпечує коректну довжину плаваючого заголовка, при переході на горизонтальний режим на мобільному

window.addEventListener("orientationchange", function() {
  var interval = setInterval(function() {
    var titleWidth = document.getElementById('orientationchange');
    var titleWidthStyle = getComputedStyle(titleWidth);
    fixTitle.style.minWidth = titleWidthStyle.width;
    setTimeout(function(){
      clearInterval(interval);
    },5);
  },4);
});

//щоб плавающий заголовок завжди був на всю ширину звичайного заголовка

function resize () {
  var titleStyle = getComputedStyle(titleElem);
  fixTitle.style.minWidth = titleStyle.width;
}

window.onresize = resize();

//прикріплює плаваючий заголовок до верху сторінки коли він виявляється у зоні текстів.

window.onscroll = function () {
  var wrpScroll = fixTitle.getBoundingClientRect();
  var wrpVar = wrapper.getBoundingClientRect();

  if (wrpVar.top <= 0) {
    fixTitle.style.position = 'fixed';
    fixTitle.style.visibility = 'visible';

  }
  if (wrpVar.bottom <= 0) {
    fixTitle.style.position = 'static';
    fixTitle.style.visibility = 'visible';
  }
  if (wrpVar.top >= 0) {
    fixTitle.style.position = 'static';
    fixTitle.style.visibility = 'hidden';
  }

//перебирає блоки з текстом і заголовком, зчитує текст і колір потрібного заголовка і додає до плаваючого
  for (var i = 0; i < container.length; i++) {
    var cicle = container[i].getBoundingClientRect();

    if (cicle.top <= 0) {
      var readNode = container[i].firstElementChild.innerHTML;
      fixTitle.innerHTML = readNode;
      fixTitle.style.top = 0;
      var fixTitleStyle = getComputedStyle(container[i].firstElementChild);
      fixTitle.style.background = fixTitleStyle.backgroundColor;
    }
  }
}
