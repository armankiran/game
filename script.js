//clock
const today = new Date();
  const day = today.getDay();
  let hour = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();


if (hour > 5 && hour < 20) {
let babyboy = document.getElementById('linko');
    babyboy.setAttribute('href', 'night.html');
} else { 
    let babyboy = document.getElementById('linko');
    babyboy.setAttribute('href', 'morning.html')
}

function checkTime(i) {
  if (i < 10) {
      i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function () {
      startTime()
  }, 500);
}
startTime();
