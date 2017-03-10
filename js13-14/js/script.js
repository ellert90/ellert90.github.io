"use strict";

$(function(){

  //TEMPLATE

  var html = $('#test').html();

  var test = {
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

var $body = $('body');
var $send = $("#send");
var $modal;
var $modalBg;
var ln;

  function showModal(e){
    e.preventDefault();
    $modal = $('<div class="modal"></div>');
    $modalBg = $('<div class="modal_bg" type="reset"></div>');

    getAnswer();

    $body.append($modal);
    $body.append($modalBg);
    $modalBg.on('click', hideModal);
  }


  function hideModal(){
    $modal.hide();
    $modalBg.hide();
    $('#my-form')[0].reset();
    // $('input').removeAttr("checked");
  };

  $( "form" ).on( "submit", showModal);

function getAnswer(){
  var elems = $("input");
  var tmp = 0;
    for (var i = 0; ln = elems.length, i < ln; i++) {
     tmp += (elems[i].checked << i);
    }
    if (tmp == test.right) {
      $modal.append("All answer right");
    } else {
      $modal.append("Something wrong");
    }
}

});
