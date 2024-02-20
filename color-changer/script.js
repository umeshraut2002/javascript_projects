// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// buttons.forEach(function (button) {
//     button.addEventListener('click', function (e) {
//         if (e.target.id === 'red') {
//             body.style.backgroundColor = e.target.id;
//         }

//         else if (e.target.id === 'green') {
//             body.style.backgroundColor = e.target.id;
//         }

//         else if (e.target.id === 'blue') {
//             body.style.backgroundColor = e.target.id;
//         }

//         else if (e.target.id === 'cyan') {
//             body.style.backgroundColor = e.target.id;
//         }

//         else if (e.target.id === 'navy') {
//             body.style.backgroundColor = e.target.id;
//             body.style.color = "white";
//         }

//         else {
//             body.style.backgroundColor = "white";
//         }

//     })
// });

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        body.style.backgroundColor = e.target.id;
    });
});
