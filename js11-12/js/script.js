$(function(){
  //SLIDER
  $('.wrapper').mySlider();

  //TEMPLATE

  var html = $('#test').html();

  var myObject = [
    {
      ask: 'Question №1',
      ans1: 'Answer 1-A',
      ans2: 'Answer 1-B',
      ans3: 'Answer 1-C'
    },
    {
      ask: 'Question №2',
      ans1: 'Answer 1-A',
      ans2: 'Answer 1-B',
      ans3: 'Answer 1-C'
    },
    {
      ask: 'Question №3',
      ans1: 'Answer 1-A',
      ans2: 'Answer 1-B',
      ans3: 'Answer 1-C'
    }
  ];
  var text = {
    title: 'Programming test',
    button: 'Send'
  };

  var content = tmpl(html, {
    data: myObject,
    data2: text
  });
  $('.sec-wrp').append(content);

});
