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

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  //css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 3px solid rgb(42, 94, 49)}";
  document.body.appendChild(css);
};

