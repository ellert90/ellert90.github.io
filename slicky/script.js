var container = document.querySelectorAll('.container');

window.onscroll = function () {
  var position = tes.getBoundingClientRect();
  var fixTitle = head_title;
  var wrpScroll = fixTitle.getBoundingClientRect();
  var wrpVar = wrp.getBoundingClientRect();

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
