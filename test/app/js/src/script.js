var question = document.querySelector('.test__question'),
    answersElem = document.querySelectorAll('.test__answer'),
    send = document.querySelector('.send'),
    result = document.querySelector('.result'),
    quesNumb = document.querySelector('.test__question_number'),
    close = document.querySelector('.close'),
    modal = document.querySelector('.modal_bg'),
    modalTotal = document.querySelector('.modal__question_count'),
    modalRight = document.querySelector('.modal__right_count'),
    modalPercent = document.querySelector('.modal__percents_count'),
    answerErr0 = document.querySelector('.answer_not_set'),
    answerErr1 = document.querySelector('.no_answer_set'),
    variablesArr = [],
    rand,
    i = 0,     //кількість правильних
    total = 0, //загальна кількість
    coantity = 0,
    lastArrElem = 0;

function add (numb) {

  question.innerHTML = obj[numb].q;
  let answersArr = [obj[numb].a0,obj[numb].a1,obj[numb].a2,obj[numb].a3,obj[numb].a4];

  for (var key in answersElem) {
    if (key <= 4) {
      answersElem[key].removeAttribute('value');
      answersElem[key].innerHTML = answersArr[key];
      if (key == obj[numb].r) {
        answersElem[key].setAttribute('value', 1);
      }
    }
  }
}


send.onclick = random;
window.onload = random;

function random () {

    answerErr1.style.display = 'none';
    if (coantity === 0) {
      if (total >= 1) {
        answerErr0.style.display = 'block';
        return false;
      }
    }

    if (total >= 1) {
      selectedSpan.classList.remove('test__answer--green');
      selectedSpan.classList.remove('test__answer--red');
    }

    rand = Math.floor(Math.random() * Object.keys(obj).length) + 0;

    if (variablesArr.indexOf(rand) >= 0) {
      random ();
      if (total >= variablesArr.lenght) {
        variablesArr = [];
      }

    } else {
      variablesArr.push(rand);
      total++;
      quesNumb.innerHTML = (total + '.');
      add(rand);
    }
    return total, coantity = 0;
  }

var answersList = document.getElementsByTagName('ol');
var selectedSpan;

answersList[0].onclick = showAns;

  function showAns(event) {


    var target = event.target;
    coantity++;
    if (target.tagName != 'DIV') return;

    if (selectedSpan) {
      selectedSpan.classList.remove('test__answer--green');
      selectedSpan.classList.remove('test__answer--red');
    }
    selectedSpan = target;
    if (target.getAttribute('value') == 1) {
      selectedSpan.classList.add('test__answer--green');
      answerErr0.style.display = 'none';
      if (coantity === 1) {
        i++;
      }

    }
    else {
      selectedSpan.classList.add('test__answer--red');
      answerErr0.style.display = 'none';
    }
    return i, variablesArr, coantity;
  }


  result.onclick = function() {
    if (total === 1) {
      answerErr1.style.display = 'block';
    } else {
      modal.style.display = 'block';
      modalTotal.innerHTML = (total - 1);
      modalRight.innerHTML = i;
      modalPercent.innerHTML = ((i / (total - 1)) *  100).toFixed(1) + '%';
      lastArrElem = variablesArr[variablesArr.length - 1];
      // console.log(lastArrElem);
      variablesArr = [];
      variablesArr.push(lastArrElem);
    }

  }
  close.onclick = function () {
    modal.style.display = 'none';
    total = 0;
    random();
  }
