const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const h = parseInt(document.querySelector("#height").value);
  const w = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  if (h === "" || h < 0 || isNaN(h)) {
    result.innerHTML = `PLEASE GIVE A VALID HEIGHT: ${h}`;
  }

  if (w === "" || w < 0 || isNaN(w)) {
    result.innerHTML = `PLEASE GIVE A VALID WEIGHT: ${w}`;
  } else {
    const bmi = (w / ((h * h) / 10000)).toFixed(2);
    result.innerHTML = `<span>YOUR BMI IS: ${bmi}</span>`;
  }
});
