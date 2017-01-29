/*var date = new Date();
var glob = date.toLocaleTimeString();
var a = date.getSeconds();
function timer(){
 var obj=document.getElementById('timer');
 var date = new Date();
 var b = date.getSeconds();
 c = b - a;
 /*var local = date.toLocaleTimeString();
 var res = local - glob;*/
/*
 obj.innerHTML = c;

 if(obj.innerHTML==0){alert('Hello');setTimeout(function(){},1000);}
 else{setTimeout(timer,1000);}
}
setTimeout(timer,1000);*/
var a = prompt ("Через скільки секунд тобі зам'явкати");

var b = a * 1000;

function musik() {
  var body = document.body;
  var audio = document.createElement('audio');
  audio.setAttribute('src', 'sound.mp3');
  audio.setAttribute('preload', 'auto');
  audio.setAttribute('controls', 'controls');
  audio.setAttribute('autoplay', 'autoplay');
  body.appendChild(audio);
}
setTimeout(musik, b);

