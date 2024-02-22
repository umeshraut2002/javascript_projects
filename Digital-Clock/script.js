const clock = document.getElementById("clock");
const d = document.getElementById("date");
const c = document.getElementById("anathor");

setInterval(function () {
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
  d.innerHTML = date.toDateString();
  c.innerHTML = date.getFullYear();
});
