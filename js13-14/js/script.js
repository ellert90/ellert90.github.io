"use strict";

$(function(){

  //TEMPLATE


  let test = {
      questions: [{
          title: 'Question №1',
          answers: ['Answer №1', 'Answer №2(R)', 'Answer №3']
      }, {
          title: 'Question №2',
          answers: ['Answer №1', 'Answer №2', 'Answer №3(R)']
      },  {
          title: 'Question №3',
          answers: ['Answer №1', 'Answer №2(R)', 'Answer №3', 'Answer №4(R)']
      }],
      right: 674
  };

try {
     localStorage.setItem('ITtest', JSON.stringify(test));
 } catch (e) {
     alert(e);
 }
 try {
     var content = tmpl('test', JSON.parse(localStorage.getItem('ITtest')));
 } catch (e) {
     alert(e);
 }


  $('.sec-wrp').append(content);

  // MODAL

let $body = document.body;
let $send = $("#send");
let modal;
let $modalBg;
let ln;

  function showModal(e){
    e.preventDefault();
    modal = document.createElement('div');//$('<div class="modal"></div>');
    $modalBg = $('<div class="modal_bg" type="reset"></div>');

    getAnswer();

    $body.appendChild(modal);
    $body.appendChild($modalBg);
    $modalBg.on('click', hideModal);
  }


  function hideModal(){
    $modal.hide();
    $modalBg.hide();
    $('#my-form')[0].reset();
  };

  $( "form" ).on( "submit", showModal);

function getAnswer(){
  let elems = $("input");
  let tmp = 0;
    for (let i = 0; ln = elems.length, i < ln; i++) {
     tmp += (elems[i].checked << i);
    }
    if (tmp == test.right) {
      $modal.append("All answer right");
    } else {
      modal.append("Something wrong");
    }
}

});
