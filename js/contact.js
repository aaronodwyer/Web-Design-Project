// Add an event listener to wait for the HTML document to be fully loaded and parsed
document.addEventListener("DOMContentLoaded", function () {
  // Add an event listener to the "submit" event of the form with the ID "contactForm"
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    // Prevent the default form submission behavior, as we will handle the submission programmatically
    e.preventDefault();

    // Get the value of the input field with the ID "fname" (First Name)
    let name = document.getElementById("fname").value;

    // Display an alert window with a thank-you message that includes the submitted first name
    window.alert("Thank you for submitting " + name + "!");

    // Redirect the user to the "home.html" page after form submission
    window.location.href = "home.html";
  });
});

