var slideLeft = document.querySelector('.slider_left'),
    slideRight = document.querySelector('.slider_right'),
    slideImg = document.getElementsByClassName('slider_item'),
    index = 0,
    slideImgLength = slideImg.length;


slideRight.addEventListener('click', moveLeft);

function moveLeft(){
  if (index < slideImgLength - 1) {

    slideLeft.style.display = 'block';
    slideImg[index].classList.remove('slider_item-block');
    slideImg[++index].classList.add('slider_item-block');
    slideLeft.style.opacity = '1';

  }
  if (index === slideImg.length-1) {
    slideRight.style.opacity = '0.2';
  }
}

slideLeft.addEventListener('click', moveRight);
function moveRight(){
    if (index > 0) {

      slideImg[index].classList.remove('slider_item-block');
      slideImg[--index].classList.add('slider_item-block');
      slideRight.style.opacity = '1';
    }
    if (index === 0) {
      slideLeft.style.opacity = '0.2';
      slideImg[index].classList.add('slider_item-block');
    }
}
