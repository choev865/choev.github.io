let body = document.body;

function turnOnLight() {
  body.classList.toggle("light");
  button.classList.toggle("buttonOn");
}

let button = document.querySelector(".button");
button.addEventListener("click", turnOnLight);



let baby = document.popup;
function popup() {
  baby.classList.toggle("popup");
  woman.classList.toggle("popup");

let woman = document.querySelector(".woman");
woman.addEventListener("click", popup);
