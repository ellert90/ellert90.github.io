'use strict';
var obj = {};

const url = 'js/question.json';
fetch(url)
.then(response => response.json())
.then(data => obj = data)
.catch(error => console.log(error));

var question = document.querySelector('.test__question'),
    answersList = document.getElementsByTagName('ol'),
    answersElem = document.querySelectorAll('.test__answer'),
    send = document.querySelector('.send'),
    result = document.querySelector('.result'),
    startButn = document.querySelector('.start'),
    quesNumb = document.querySelector('.test__question_number'),
    close = document.querySelector('.close'),
    modal = document.querySelector('.modal_bg'),
    modalWhite = document.querySelector('.modal--white'),
    modalTotal = document.querySelector('.modal__question_count'),
    modalRight = document.querySelector('.modal__right_count'),
    modalPercent = document.querySelector('.modal__percents_count'),
    answerErr0 = document.querySelector('.answer_not_set'),
    answerErr1 = document.querySelector('.no_answer_set'),
    variablesArr = [],
    rand,
    selectedSpan,
    i = 0,            //кількість правильних
    total = 0,        //загальна кількість
    coantity = 0,     //кількість кліків на питання
    lastArrElem = 0,
    selectedAnswer,
    rightAnswer;

// var coantity = 0;

function add (numb) {

  question.innerHTML = obj[numb].q;
  let answersArr = [obj[numb].a0,obj[numb].a1,obj[numb].a2,obj[numb].a3,obj[numb].a4];

  for (let key in answersElem) {
    if (key <= 4) {
      answersElem[key].removeAttribute('value');
      answersElem[key].innerHTML = answersArr[key];
      if (key == obj[numb].r) {
        answersElem[key].setAttribute('value', 1);
      }
    }
  }

}


startButn.addEventListener('click', random);
send.addEventListener('click', random);


function random () {
    if (selectedSpan) {
      selectedAnswer.classList.remove('test__answer--green');
      selectedAnswer.classList.remove('test__answer--red');
    }
    if (rightAnswer) {
      rightAnswer.classList.remove('test__answer--green');
    }
    answerErr1.style.display = 'none';
    console.log(total);
    if (coantity === 0) {
      if (total >= 1) {
        answerErr0.style.display = 'block';
          }
      modalWhite.style.display = 'none';
    }
    if (coantity >= 1 || total === 0) {
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
    }




    return total, coantity = 0;

  }


answersList[0].addEventListener('click', showAns);


  function showAns(event) {

    var target = event.target;
    coantity++;
    if (target.tagName != 'DIV') return;

    selectedSpan = target;
    if (target.getAttribute('value') == 1 && coantity == 1) {
      selectedSpan.classList.add('test__answer--green');
      answerErr0.style.display = 'none';
        i++;
        selectedAnswer = selectedSpan;
    }
     if (target.getAttribute('value') != 1 && coantity == 1) {
      selectedSpan.classList.add('test__answer--red');
      answerErr0.style.display = 'none';
      selectedAnswer = selectedSpan;
      for(let key in answersElem) {
        let anserKey = answersElem[key].hasAttribute('value');
        if (anserKey == true) {
          answersElem[key].classList.add('test__answer--green');
          rightAnswer = answersElem[key];
        }
      }
    }
    return i, variablesArr, coantity;

  }


function showResultModal () {
    if (total === 1) {
      answerErr1.style.display = 'block';
    } else {
      modal.style.display = 'block';
      modalTotal.innerHTML = (total - 1);
      modalRight.innerHTML = i;
      modalPercent.innerHTML = ((i / (total - 1)) *  100).toFixed(1) + '%';
      lastArrElem = variablesArr[variablesArr.length - 1];
      variablesArr = [];
      variablesArr.push(lastArrElem);
    }

  }

  result.addEventListener('click', showResultModal);
  close.addEventListener('click', closeResultModal);


  function closeResultModal () {
    modal.style.display = 'none';
    total = 0;
    i = 0;
    random();
  }
