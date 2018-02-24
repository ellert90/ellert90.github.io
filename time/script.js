let time = document.getElementById('start'),
    clear = document.getElementById('clear'),
    cont = document.getElementById('pauseContainer'),
    init = 0,
    show = '',
    pauseDate,
    startDate,
    clocktimer,
    a;

function timeCounter() {

  let date = new Date();
  let t = date.getTime() - startDate.getTime();
  let ms = t % 1000; t -= ms;
  t = Math.floor (t / 1000);
  let s = t % 60; t -= s;
  t = Math.floor (t / 60);
  let m = t % 60; t -= m;
  t = Math.floor (t / 60);
  let h = t % 60;

  if (h < 10) h = '0' + h;
  if (m < 10) m = '0' + m;
  if (s < 10) s = '0' + s;
  if (ms < 10) ms = '00' + ms;
  if (ms < 100) ms = '0' + ms;

  show = h + ':' + m + ':' + s + '.' + ms;
  if (init == 1) timeId.innerHTML = show;
  clocktimer = setTimeout("timeCounter()", 4);
  return show;
}

function pauseTime() {
    pauseDate = new Date();
    clearTimeout(clocktimer);
    time.innerHTML="Continue";
    return init = 2, pauseDate;
}

function startTime() {
    startDate = new Date();
    clocktimer = setTimeout("timeCounter()",4);
    timeCounter();
    time.innerHTML="Pause";
    return init = 1;
}

function continueTime() {
  let newDate = new Date();
  startDate = new Date(newDate.getTime() - (pauseDate.getTime() - startDate.getTime()));
  console.log('startDate' + startDate);
  time.innerHTML="Pause";
  clocktimer = setTimeout("timeCounter()", 4);
  return init = 1;
}

function counterAll() {
  if (init === 0) {
    startTime();
  } else if (init === 1) {
    pauseTime();
  } else if (init ===2) {
    continueTime();
  }
}

function clearTime() {
  clearTimeout(clocktimer);
  timeId.innerHTML = "00:00:00.000";
  time.innerHTML = "Start";
  return init = 0;
}


time.addEventListener('click', counterAll);
clear.addEventListener('click', clearTime);
