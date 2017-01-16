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
var list = document.createElement("li");
var arr0 = [ques.q0.ask1, ques.q0.ask2, ques.q0.ask3];
  function addLi(arr, el) {
	for (var i = 0; leng = arr.length, i < leng; i++) {
		el.appendChild(addTextNode("li", arr[i]));
		}
	return this;
	}

	addLi(arr0, list);
	document.body.appendChild(list);

