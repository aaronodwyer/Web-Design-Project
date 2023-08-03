// Initialize slideIndex to keep track of the current slide
let slideIndex = 1;

// Call the showSlides function with the initial slide index to display the first slide
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  // Update slideIndex by n (either +1 for next or -1 for previous)
  slideIndex += n;
  // Call the showSlides function to display the new slide
  showSlides(slideIndex);
}

// Thumbnail image controls
function currentSlide(n) {
  // Set slideIndex to n to show the slide corresponding to the thumbnail image clicked
  slideIndex = n;
  // Call the showSlides function to display the corresponding slide
  showSlides(slideIndex);
}

// Display slides and handle active thumbnail image
function showSlides(n) {
  let i;
  // Get all slide elements and thumbnail images
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  // Get the element for displaying caption text
  let captionText = document.getElementById("caption");

  // Reset slideIndex to the first slide if it exceeds the number of slides
  if (n > slides.length) { 
    slideIndex = 1;
  }
  // Set slideIndex to the last slide if it goes below 1
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove the "active" class from all thumbnail images
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and add the "active" class to the corresponding thumbnail image
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // Update the caption text with the alternative text of the current image
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

// JavaScript code for handling the form submission
document.addEventListener("DOMContentLoaded", function () {
  // Add a submit event listener to the form with ID "contactForm"
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    // Prevent the default form submission
    e.preventDefault();
    // Get the value of the "fname" input field (first name)
    let name = document.getElementById("fname").value;
    // Display an alert message thanking the user for submitting their name
    window.alert("Thank you for submitting " + name + "!");
    // Redirect the user to "home.html"
    window.location.href = "home.html";
  });
});

