var time = document.getElementById('start');
var clear = document.getElementById('clear');

var init = 0;
var show = '';

function timeCounter() {
  var date = new Date();
  var t = date.getTime() - startDate.getTime();
  var ms = t%1000; t-=ms;
  t = Math.floor (t/1000);
  var s = t%60; t-=s;
  t = Math.floor (t/60);
  var m = t%60; t-=m;
  t = Math.floor (t/60);
  var h = t%60;
  if (h<10) h='0'+h;
  if (m<10) m='0'+m;
  if (s<10) s='0'+s;
  if (ms<10) ms='00'+ms;
  if (ms<100) ms= '0' + ms;
  show = h + ':' + m + ':' + s + '.' + ms;
  if (init==1) timeId.innerHTML = show;
  clocktimer = setTimeout("timeCounter()",4);
}

function pauseTime() {
    clearTimeout(clocktimer);
  }

  function clearTime() {
    pauseTime();
    timeId.innerHTML = "00:00:00.000";
  }

function startTime() {
   if (init==0) {
    startDate = new Date();
    clocktimer = setTimeout("timeCounter()",4);
    timeCounter();
    init=1;
  } else {
    pauseTime();
  }
}



time.addEventListener('click', startTime);
clear.addEventListener('click', clearTime);
