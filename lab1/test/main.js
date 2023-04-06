/*const filmstrip = document.querySelector('.scenes');
const prevButton = document.querySelector('.filmstrip-prev');
const nextButton = document.querySelector('.filmstrip-next');
const step = 220;
let position = 0;

prevButton.addEventListener('click', () => {
  position += step;
  if (position > 0) {
    position = 0;
  }
  filmstrip.style.transform = `translateX(${position}px)`;
});

nextButton.addEventListener('click', () => {
  position -= step;
  const maxPosition = -(filmstrip.scrollWidth - filmstrip.offsetWidth);
  if (position < maxPosition) {
    position = maxPosition;
  }
  filmstrip.style.transform = `translateX(${position}px)`;
});
*/



const filmstripItems = document.querySelector(".filmstrip");
const prevBtn = document.querySelector(".filmstrip-prev");
const nextBtn = document.querySelector(".filmstrip-next");

let currentIndex = 0;
const itemWidth = 620; // Change this to match the width of your images
const numItems = filmstripItems.children.length;
const maxIndex = numItems - 1;
const moveDistance = itemWidth * 5;

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




let toggleButton = document.querySelector(".toggle-menu-btn");
let menuItemsContainer = document.querySelector(".menu-items-container");

// Add click event listener to the toggle button
toggleButton.addEventListener('click', function() {
  // Toggle the display property of the menu items container to show/hide the menu
  if (menuItemsContainer.style.display === 'none') {
    menuItemsContainer.style.display = 'block';
  } else {
    menuItemsContainer.style.display = 'none';
  }
});
