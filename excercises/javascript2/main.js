
let body = document.body;

function turnOnLight() {
  body.classList.toggle("light");
  button.classList.toggle("buttonOn");
  box.classList.toggle("boxactive")
}

let button = document.querySelector(".button");
button.addEventListener("click", turnOnLight);

let box = document.querySelector(".box")






function turnOnLight2() {
  body.classList.toggle("light2");
  button2.classList.toggle("buttonOn2");
    box.classList.toggle("boxactive")

}

let button2 = document.querySelector(".button2");
button2.addEventListener("click", turnOnLight2);


