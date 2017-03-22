"use strict";


$(function() {

  //BUTTON
  var searchValue;
  $('#search_in').keyup(function(){
      if(event.keyCode==13)
         {
            action();
         }
  })

  $('#button').on('click', function(e) {
    e.preventDefault();
    action();


  });
  function action(){

    $('#result').empty();
    searchValue = $('#search_in').val();

    // console.log(searchValue);

    var urla = 'https://pixabay.com/api/?key=4828969-66d42077835bb109c3bb61bef&q=' + searchValue + '&image_type=photo&pretty=true';

    $.ajax({
      url: urla,
      success: function(data) {

        for (var i = 0; i < data.hits.length ; i++) {
          var $img = ('<img src="'+data.hits[i].webformatURL+'" class="search"></img>');
          $('#result').css({height: data.hits[i].webformatHeight, width: data.hits[i].webformatWidth, margin: 'auto'}).append($img);
        }
      },
      error: function() {
        console.log('error fetching!');
      }
    });
  }

});

//class

function inherit(proto) {
  function F() {}     // (1)
  F.prototype = proto // (2)
  var object = new F; // (3)
  return object;      // (4)
}

if (!Object.create) Object.create = inherit;

function Human() {
  this.hName = 'Yura';
  this.hYears = 23;
  this.hSex = 'male';
  this.hHeight = 176;
  this.hWeight = 58;
}


function Worker(workPlace, pay, years){
  this.workPlace = workPlace || 'Self employent';
  this.pay = pay || 1000;
  this.years = years || this.hYears;
  this.work = function (){
    console.log('Working..');
  };
}


function Student(studyPlace, money, watched){
  this.studyPlace = studyPlace || 'GoIT';
  this.money = money || 0;
  this.watched = watched || 0;
}
Student.prototype.watchSerial = function () {
  this.watched = 1;
}


Worker.prototype = new Human();
Student.prototype = new Human();

var firstStudent = new Student('KHNU', 700);
var firstWorker = new Worker('Telegrup', 2000, 59);
console.log(firstStudent);
console.log(firstWorker);

var secondStudent = new Student();
var secondWorker = new Worker();
console.log(secondStudent);
console.log(secondWorker);
