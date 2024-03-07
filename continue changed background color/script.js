const randomColor = function () {
  const random = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = random;
};

let colorId;

document.querySelector("#start").addEventListener("click", function () {
    if (!colorId){
    colorId = setInterval(randomColor, 2000);
    }
});

document.querySelector('#stop').addEventListener("click", function (){
    clearInterval(colorId);
    colorId = null;
});


