var container = document.querySelectorAll('.container');
var fixTitle = document.getElementById('head_title');
var wrapper = document.getElementById('wrp');
var titleElem = document.querySelector('.title');
var titleStyle = getComputedStyle(titleElem);

//щоб плавающий заголовок завжди був на всю ширину звичайного заголовка

function resize () {
  fixTitle.style.width = titleStyle.width;
}

window.onresize = resize();

window.onscroll = function () {
  var wrpScroll = fixTitle.getBoundingClientRect();
  var wrpVar = wrapper.getBoundingClientRect();

//прикріплює плаваючий заголовок до верху сторінки коли він виявляється у робочій зоні
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
      var fixStyle = getComputedStyle(container[i].firstElementChild);
      fixTitle.style.background = fixStyle.background;
    }
  }
}
