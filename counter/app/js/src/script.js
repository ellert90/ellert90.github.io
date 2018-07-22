let obj = localStorage,
    item = document.querySelector('.main'),
    items = document.querySelectorAll('.main__item_value'),
    left = 0,
    leftIndex = 0,
    summa = document.querySelector('#sum'),   //всього грошей
    zal = document.querySelector('#zal'),     //скільки залишилося
    serD = document.querySelector('#ser'),    //середні трати за день
    zalS = document.querySelector('#zal_s'),  //залишок середнього
    norm = document.querySelector('#norm'),   //норм трати на день
    bonus = document.querySelector('#bon');   //скільки зекономлено



reDraw();
item.addEventListener('change', showAns);

  function showAns(event) {
    let target = event.target,
        index = target.getAttribute('data'),
        targetVal = parseInt(target.value),
        localItem = parseInt(localStorage.getItem(index));

    if (localItem && targetVal > 0) {
      let newVal = parseInt(target.value);
      let totalVal = localItem + newVal;
      localStorage.setItem(index, totalVal);
      reDraw();
    }
    localStorage.setItem(index, target.value);
  }




function reDraw () {
  for(let i = 0; i < items.length; i++) {
    let day = i + 1;
    if (localStorage.getItem(day) != undefined) {
      left += parseInt(localStorage.getItem(day));
      leftIndex++;
    }
    items[i].value = localStorage.getItem(day);
  }

  let zalSMath = Math.floor(summa.textContent / 15) - Math.floor(left / leftIndex);

  norm.innerHTML = Math.floor(summa.textContent / 15);
  zal.innerHTML = summa.textContent - left;
  serD.innerHTML = Math.floor(left / leftIndex);
  zalS.innerHTML = zalSMath;
  bonus.innerHTML = zalSMath * leftIndex;
}
