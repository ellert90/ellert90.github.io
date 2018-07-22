let obj = localStorage,
    item = document.querySelector('.main'),
    items = document.querySelectorAll('.main__item_value'),
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
        localItem = parseInt(localStorage.getItem(index)),
        newVal = parseInt(target.value);

    if (localItem > 0 && targetVal > 0) {
      let totalVal = localItem + newVal;
      localStorage.setItem(index, totalVal);
      reDraw();
    } else {
      localStorage.setItem(index, newVal);
      reDraw();
    }


  }




function reDraw () {
  let left = 0,
      leftIndex = 0;
  for(let i = 0; i < items.length; i++) {
    let day = i + 1,
        local = localStorage.getItem(day);
    if (local != undefined && local != 0 && isNaN(local) == false) {
      left += parseInt(local);
      leftIndex++;
    } if (isNaN(local) == false) {
      items[i].value = local;
    }

  }

  let zalSMath = Math.floor(summa.textContent / 15) - Math.floor(left / leftIndex);

  norm.innerHTML = Math.floor(summa.textContent / 15);
  zal.innerHTML = summa.textContent - left;
  serD.innerHTML = Math.floor(left / leftIndex);
  zalS.innerHTML = zalSMath;
  bonus.innerHTML = zalSMath * leftIndex;
}
