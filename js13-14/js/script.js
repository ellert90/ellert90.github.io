"use strict";

$(function(){

  //TEMPLATE

  var html = $('#test').html();

  var myObject = [
    {
      ask: 'Question №1',
      ans1: 'Answer 1-A',
      ans2: 'Answer 1-B(true)',
      ans3: 'Answer 1-C',
      val: 2,
    },
    {
      ask: 'Question №2',
      ans1: 'Answer 1-A(true)',
      ans2: 'Answer 1-B',
      ans3: 'Answer 1-C',
      val: 1
    },
    {
      ask: 'Question №3',
      ans1: 'Answer 1-A',
      ans2: 'Answer 1-B',
      ans3: 'Answer 1-C(true)',
      val: 3,
    }
  ];

  localStorage.setItem('question', JSON.stringify(myObject));
  var myTest = localStorage.getItem('question');

  var text = {
    title: 'Programming test',
    button: 'Send'
  };

  var content = tmpl(html, {
    data: myObject,
    data2: text
  });

  $('.sec-wrp').append(content);

  // MODAL

var $body = $('body');
var $send = $("#send");
var $modal;
var $modalBg;
var $res;
var myForm;


  function showModal(e){
    e.preventDefault();
    $modal = $('<div class="modal"></div>');
    $modalBg = $('<div class="modal_bg" type="reset"></div>');

    // check value

    console.log($('.single').val());

    $body.append($modal);
    $body.append($modalBg);
    $modalBg.on('click', hideModal);
  }
  function hideModal(){
    $modal.hide();
    $modalBg.hide();
    $('input').removeAttr("checked");
  };

  // console.log(document.input.test.value);

  $send.on('click', showModal);

});
