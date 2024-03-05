let random1 = Math.floor(Math.random() * 6 + 1);

let randomImage = `/dice${random1}.png`;

let image1 = document.querySelectorAll(".img1")[0];

image1.setAttribute("src", randomImage);

let random2 = Math.floor(Math.random() * 6 + 1);

let randomImage2 = `/dice${random2}.png`;

let image2 = document.querySelectorAll(".img2")[0];

image2.setAttribute("src", randomImage2);

let h1 = document.querySelector("h1");

if (random1 < random2) {
    h1.textContent = "Player 2 Win!";
} 

else if (random1 > random2) {
    h1.textContent = "Player 1 Win!";
} 

else if (random1 === random2) {
    h1.textContent = "Ooh Its Tie";
}
