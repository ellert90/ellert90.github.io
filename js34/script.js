
var ques = {
  topic: 'Programing test',

  q0: {
    ask: 'Question №1',
    ans1: 'Answer 1-A',
    ans2: 'Answer 1-B',
    ans3: 'Answer 1-C',
    tru_ans: 'Answer B'
  },

  q1: {
    ask: 'Question №2',
    ans1: 'Answer 2-A',
    ans2: 'Answer 2-B',
    ans3: 'Answer 2-C',
    tru_ans: 'Answer C'
  },

  q2: {
    ask: 'Question №3',
    ans1: 'Answer 3-A',
    ans2: 'Answer 3-B',
    ans3: 'Answer 3-C',
    tru_ans: 'Answer A'
  },

  button: 'Check result'
};

var ask   = [ques.q0.ask, ques.q1.ask, ques.q2.ask];
var arr0  = [ques.q0.ans1, ques.q0.ans2, ques.q0.ans3];
var arr1  = [ques.q1.ans1, ques.q1.ans2, ques.q1.ans3];
var arr2  = [ques.q2.ans1, ques.q2.ans2, ques.q2.ans3];


var body  = document.body;
var div   = document.createElement('div');                 		   
var h1    = document.createElement('h1');                          
var ol    = document.createElement('ol');						   
var list0 = document.createElement('li');	
var list1 = document.createElement('li');
var list2 = document.createElement('li');					  									   
var btn   = document.createElement('button');					   
var label = document.createElement('label');	
var input = document.createElement('input');

div.setAttribute('class', 'wrapper');							 

function addLi(arr, el, par) {
          for (var i = 0; leng = arr.length, i < leng; i++) {
          	(function() {
          		val = 0;
	          	var el = document.createElement('label');
	          	var input = document.createElement('input');
	          	input.setAttribute('type', 'checkbox');
	          	input.setAttribute('value', 'val' + val++);
	          	el.appendChild(input);
	          	el.appendChild(document.createTextNode(arr[i]));
	          	par.appendChild(el);
	          	ol.appendChild(par);
	          	console.log(el);
          	})();
          }
          return this;
        }


h1.appendChild(document.createTextNode(ques.topic));
list0.appendChild(document.createTextNode(ques.q0.ask));
list1.appendChild(document.createTextNode(ques.q1.ask));
list2.appendChild(document.createTextNode(ques.q2.ask));	
btn.appendChild(document.createTextNode(ques.button));	
input.setAttribute('type', 'checkbox');
 
addLi(arr0, label, list0);	
addLi(arr1, label, list1);
addLi(arr2, label, list2);

div.appendChild(h1);  	
div.appendChild(ol);		
div.appendChild(btn);	
ol.appendChild(list0);



body.appendChild(div);	
