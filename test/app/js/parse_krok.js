let globalArr = [];


let next = document.getElementById('btn_next');

function nextFunc(){
  loadquestion(current_num+1);
};


function start () {
  let localArr = [];
  var question = document.querySelector('.krt_question');
  var answers = document.querySelectorAll('.list-group-item');
  localArr.push(question.textContent);

  for (let i = 0; i < answers.length; i++) {
    let ansTxt = answers[i].textContent;
    let ansTrm = ansTxt.trim();
    let ansSub = ansTrm.substring(3);
    localArr.push(ansSub);
    if (answers[i].classList.contains('correct')) {
      let right = '' + i;
      localArr.unshift(right);
    }
  }
  return globalArr.push(localArr);
}

document.onkeydown = function (e) {

	    e = e || window.event;
	    if (e.keyCode === 39) {
	        nextFunc();
	    }
      if (e.keyCode === 32) {
          start();
          nextFunc();
    return false;
	}
}

// another parser

let globalArr = [];
let el = document.querySelectorAll('.container');


function start () {
  globalArr = [];
  for (let i = 0; i < el.length; i++) {
	let localArr = [];
    let txt = el[i].childNodes[0].textContent;
    let txtTrm = txt.trim();
    localArr.push(txtTrm);
	for (let j=1; j< el[i].childNodes.length; j++) {
    let ans = el[i].childNodes[j].textContent;
    let ansTrm = ans.trim();
    if (ansTrm != "") {
      localArr.push(ansTrm);
    }

        if (el[i].childNodes[j].classList.contains('correct')) {
          let right = '' + (j-1);
          localArr.unshift(right);
       }
  }
	globalArr.push(localArr);
}
	console.log(globalArr);
}
start();
