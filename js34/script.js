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
function addObj(obj) {
  var topic = ques.topic,
      ask0 = ques.q0.ask,
			ask1 = ques.q1.ask,
			ask2 = ques.q2.ask,
			button = ques.button;
      var arr0 = [ques.q0.ans1, ques.q0.ans2, ques.q0.ans3];
      var arr1 = [ques.q1.ans1, ques.q1.ans2, ques.q1.ans3];
      var arr2 = [ques.q2.ans1, ques.q2.ans2, ques.q2.ans3];

			function generateNodes() {

		        function addTextNode(el, text) {
		            var elem = document.createElement(el);
		            var newtext = document.createTextNode(text);
		            elem.appendChild(newtext);
		            return elem;
		        }

		        function addClass(el, name) {
		          var elem = document.createElement(el);
		          elem.setAttribute("class", name);
		          return elem;
		        }

		        function addTextNodeClass(el, name, text) {
		            var elem = document.createElement(el);
		            elem.setAttribute("class", name);
		            var newtext = document.createTextNode(text);
		            elem.appendChild(newtext);
		            return elem;
		        }

		        function addLi(arr, el) {
		          for (var i = 0; leng = arr.length, i < leng; i++) {
		            el.appendChild(addTextNode("li", arr[i]));
		          }
		          return this;
		        }

    var wrp = addClass("div", "wrapper");
    var hed = addClass("h1", "head");
    var ol = addClass("ol", "Numbered_li");
		var li = addClass("li", "Numbered_li");
    var ul = addClass("ul", "Unnumvered_li");
		var ul1 = addClass("ul", "Unnumvered_li");
		var ul2 = addClass("ul", "Unnumvered_li");
		var list0 = addClass("li", "menu_item");
		var list1 = addClass("li", "menu_item");
		var list2 = addClass("li", "menu_item");
		var btn = addClass("button", "send");

    addLi(arr0, list0);
    addLi(arr1, list1);
		addLi(arr2, list2);

		wrp.appendChild(addTextNode("h1", topic));
		ul.appendChild(list0);
		ul.appendChild(list1);
		ul.appendChild(list2);
		li.appendChild(ul);
		ol.appendChild(addTextNode("li", ask0));
		ol.appendChild(addTextNode("li", ask1));
		ol.appendChild(addTextNode("li", ask2));
		wrp.appendChild(ol);
		wrp.appendChild(addTextNode("button", button));

		return wrp;
    }

    return generateNodes();
}

var doc = document.body;

var frag = document.createDocumentFragment();
frag.appendChild(addObj(ques).cloneNode(true));
var myClone = frag.cloneNode(true);
doc.appendChild(myClone);
