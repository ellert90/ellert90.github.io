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
        for (var i = 0; i < 11; i++) {
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
