let obj = localStorage;
let item = document.querySelector('.main');
let items = document.querySelectorAll('.main__item_value');
// console.log(item);

  item.addEventListener('change', showAns);

  function showAns(event) {
    let target = event.target;
    let index = event.target.getAttribute('data');
    localStorage.setItem(index, target.value);
  }

let left = 0,
    leftIndex = 0;

for(let i = 0; i < items.length; i++) {
  let day = i + 1;
  if (localStorage.getItem(day) != undefined) {
    left += parseInt(localStorage.getItem(day));
    leftIndex++;
  }

  items[i].value = localStorage.getItem(day);

}

let summa = document.querySelector('#sum'),  //всього грошей
    zal = document.querySelector('#zal'),   //скільки залишилося
    serD = document.querySelector('#ser'),  //середні трати за день
    zalS = document.querySelector('#zal_s'),  //не потрачене за день
    norm = document.querySelector('#norm'); //норм трати на день

norm.innerHTML = Math.floor(summa.textContent / 15);
zal.innerHTML = summa.textContent - left;
serD.innerHTML = Math.floor(left / leftIndex);
zalS.innerHTML = Math.floor(summa.textContent / 15) - Math.floor(left / leftIndex);






// onchange="localStorage.setItem('5', this.value)"
// onchange="localStorage.setItem('6', this.value)"
// onchange="localStorage.setItem('7', this.value)"
// onchange="localStorage.setItem('8', this.value)"
// onchange="localStorage.setItem('9', this.value)"
// onchange="localStorage.setItem('0', this.value)"
// onchange="localStorage.setItem('1', this.value)"
// onchange="localStorage.setItem('2', this.value)"
// onchange="localStorage.setItem('3', this.value)"
// onchange="localStorage.setItem('4', this.value)"
// onchange="localStorage.setItem('5', this.value)"
// onchange="localStorage.setItem('6', this.value)"
