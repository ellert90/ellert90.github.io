var ques = {
	topic: 'Programing test',

	q0: {
		ask: 'Question №1',
		ans1: 'Answer A',
		ans2: 'Answer B',
		ans3: 'Answer C',
		tru_ans: 'Answer B'
	},

	q1: {
		ask: 'Question №2',
		ans1: 'Answer A',
		ans2: 'Answer B',
		ans3: 'Answer C',
		tru_ans: 'Answer C'
	},

	q2: {
		ask: 'Question №3',
		ans1: 'Answer A',
		ans2: 'Answer B',
		ans3: 'Answer C',
		tru_ans: 'Answer A'
	},

	button: 'Check result'
}
var div = document.createElement('div');
div.className = 'wrapper';
var h1 = document.createElement('h1');
var ol = document.createElement('ol');
var li = document.createElement('li');

var p = document.createElement('p');
document.body.append(p);
p.append(questions.Question_2);


/*
document.body.innerHTML(questions.question_2);
var wrapper = document.body.children[0];
var h1 = wrapper.children[1];
var ol = wrapper.children[1];

function toHTML(a, b, c, d){
	var res0 = '<h1>' + questions.topic + '</h1>';
	var res1 = '<ol>' + questions.question_0 + '</ol>';
} 

var aa = document.getElementById('menu');
*/
//function toHTML(a, b, c, d) {
	//var res = '<h1>' + questions.topic + '</h1>';
	//var res0 = '<h1>' + b + '</h1>';
	//var res1 = '<h1>' + c + '</h1>';
	//var res2 = '<h1>' + d + '</h1>';
	//var all = res + '/n' + res0 + '/n' + res1 + '/n' + res2;
	//return console.log(all);
//}
//function easyToHTML(questions) {
	//toHTML(questions.Question_0, questions.Question_1, questions.Question_2);
//}

//easyToHTML(questions);


