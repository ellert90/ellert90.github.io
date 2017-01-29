var timeId = document.getElementById('time');

/*
function daaaate() {
  var date = new Date();
  var res = new Date() - date;
  timeId.appendChild(document.createTextNode(date.getMinutes() + ' : ' + date.getSeconds()));
  return timeId;
  console.log(date.toTimeString());
}
console.log(daaaate());*/
var date = new Date();

var a = date.getUTCHours();
console.log(a);
function datime() {
  var date = new Date();
  var timeId = document.getElementById('time');
  if (timeId !== date.getSeconds()) {
    timeId.appendChild(document.createTextNode(date.getSeconds()));
  }

}
datime();
