
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









