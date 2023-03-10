/*var spotlightImage = document.getElementById("spotlight-image");
var backButton = document.getElementById("back-button");
var nextButton = document.getElementById("next-button");

var imageSources = ["./scenes/one.png", "./scenes/two.png", "./scenes/three.png",
 "./scenes/four.png"];
var currentPosition = 0;

backButton.addEventListener("click", function() {
  if (currentPosition > 0) {
    currentPosition--;
    spotlightImage.src = imageSources[currentPosition];
  }
});

nextButton.addEventListener("click", function() {
  if (currentPosition < imageSources.length - 1) {
    currentPosition++;
    spotlightImage.src = imageSources[currentPosition];
  }
});




*/




const filmstripItems = document.querySelector(".filmstrip-items");
const prevBtn = document.querySelector(".filmstrip-prev-btn");
const nextBtn = document.querySelector(".filmstrip-next-btn");

let currentIndex = 0;
const itemWidth = 620; // Change this to match the width of your images
const numItems = filmstripItems.children.length;
const maxIndex = numItems - 1;
const moveDistance = itemWidth * 2;

prevBtn.addEventListener("click", function() {
  if (currentIndex > 0) {
    currentIndex--;
    filmstripItems.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }
});

nextBtn.addEventListener("click", function() {
  if (currentIndex < maxIndex) {
    currentIndex++;
    filmstripItems.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }
});









