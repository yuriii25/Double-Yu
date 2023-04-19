// Get the carousel and its items
var carousel = document.querySelector(".carousel");
var items = carousel.querySelectorAll(".carousel-item");

// Get the control buttons
var prevButton = carousel.querySelector(".carousel-control-prev");
var nextButton = carousel.querySelector(".carousel-control-next");

// Set the index of the active item
var activeIndex = 0;

// Add click event listeners to the control buttons
prevButton.addEventListener("click", function(e) {
  e.preventDefault();
  if (activeIndex === 0) {
    activeIndex = items.length - 1;
  } else {
    activeIndex--;
  }
  setActiveItem();
});

nextButton.addEventListener("click", function(e) {
  e.preventDefault();
  if (activeIndex === items.length - 1) {
    activeIndex = 0;
  } else {
    activeIndex++;
  }
  setActiveItem();
});

// Set the active item
function setActiveItem() {
  items.forEach(function(item) {
    item.classList.remove("active");
  });
  items[activeIndex].classList.add("active");
}

// Set the initial active item
setActiveItem();


