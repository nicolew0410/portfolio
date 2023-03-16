var slideIndex = 1; //Indicates its starting value, will be a counter for whichever slide is being shown
showSlides(slideIndex); //The callback function to showSlides() with the index of the counter which is manipulated by functions plusSlides and showSlides
function plusSlides(n) { //Corresponds to "plusSlides" in HTML, this is the function that runs it as the slideIndex, our counter, is added and equaled to n, our current picture value.
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) { //The actual display of the slideshow containing the pictures
  var i;// defining a value for for loops because they have a 3 part syntax, this is identified as the counter
  var slides = document.getElementsByClassName("mySlides"); //.getElementsByClassName is a DOM selector, finding where the class is used and manipulating it into the variable "slides"
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}// This is a reset mechanism, if n ever gets bigger than the actual length, it will return to its original picture. .length acts as the dot syntax to find the amount of elements are in slides.
  if (n < 1) {slideIndex = slides.length}// Similar to what was previously said, lines 70-74 keep the mechanism going on for forever no matter how many times they click.
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}