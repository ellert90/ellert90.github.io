'use strict';
(function(){
  let arr = [];

  const url = 'js/test.json';
  fetch(url)
  .then(response => response.json())
  .then(data => {
    arr = data;
    random();
  })
  .catch(error => console.log(error));

  let $ = (selector) => document.querySelector(selector);
  let $$ = (selector) => document.querySelectorAll(selector);


  let answersList = document.getElementsByTagName('ol'),
      answerItem = document.getElementsByTagName('li'),
      question = $('.test__question'),
      answersElem = $$('.test__answer'),
      send = $('.send'),
      result = $('.result'),
      quesNumb = $('.test__question_number'),
      close = $('.close'),
      modal = $('.modal_bg'),
      modalWhite = $('.modal--white'),
      modalTotal = $('.modal__question_count'),
      modalRight = $('.modal__right_count'),
      modalPercent = $('.modal__percents_count'),
      answerErr0 = $('.answer_not_set'),
      answerErr1 = $('.no_answer_set'),
      variablesArr = [],
      rand,
      selectedSpan,
      i = 0,            //кількість правильних
      total = 0,        //загальна кількість
      coantity = 0,     //кількість кліків на питання
      lastArrElem = 0,
      selectedAnswer,
      rightAnswer,
      testRight;


  let add = numb => {
    let arrLength = arr[numb].length,
        right = arr[numb][0];

        question.innerHTML = arr[numb][1];
        console.log(arr[numb]);
        console.log('question id ' + numb);

    for (let i = 2; i < arrLength; i++) {
      // let answers = document.createElement()
      answersElem[i-2].removeAttribute('data');
      answersElem[i-2].innerHTML = arr[numb][i];
      answersElem[right].setAttribute('data', "1");

    }

  }


  send.addEventListener('click', random);


  function random () {
      // if (selectedSpan) {
      //   selectedAnswer.classList.remove('test__answer--green');
      //   selectedAnswer.classList.remove('test__answer--red');
      // }
      for (let i=0; i < answersElem.length; i++) {
          answersElem[i].classList.remove('test__answer--red');
          answersElem[i].classList.remove('test__answer--green');
      }
      if (rightAnswer) {
        rightAnswer.classList.remove('test__answer--green');
      }
      answerErr1.style.display = 'none';

      if (coantity === 0 && total >= 1) {
        answerErr0.style.display = 'block';
      }
      if (coantity >= 1 || total === 0) {
        rand = Math.floor(Math.random() * Object.keys(arr).length) + 0;
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
  answersList[0].addEventListener('mousedown', showAns);


    function showAns(event) {

      var target = event.target;

      coantity++;
      if (target.tagName == 'Ol') return;
      selectedSpan = target;
      if (target.getAttribute('data') == 1 && coantity == 1) {
        selectedSpan.classList.add('test__answer--green');
        answerErr0.style.display = 'none';
          i++;
          selectedAnswer = selectedSpan;
      }

       if (target.getAttribute('data') != 1 && coantity == 1) {
        selectedSpan.classList.add('test__answer--red');
        answerErr0.style.display = 'none';
        selectedAnswer = selectedSpan;
        for(let key = 0; key < answersElem.length; key++) {
          let anserKey = answersElem[key].hasAttribute('data');
          if (anserKey == true) {
            answersElem[key].classList.add('test__answer--green');
            rightAnswer = answersElem[key];
          }
        }
      }

      return i, variablesArr, coantity;

    }


  let showResultModal = () => {
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

})();
