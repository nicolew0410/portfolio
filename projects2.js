var galleryImages = document.querySelectorAll(".galleryImages img");
var modalContainer = document.querySelector(".modalContainer")
var modalImg = document.querySelector(".modalImg")
var caption = document.querySelector(".caption")
var xClose = document.querySelector(".xClose")
var viz = document.querySelector(".viz")

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    modalImg.src = image.src;
    caption.innerHTML = image.alt;
    viz.classList.add("appear")
    modalContainer.classList.add("appear");

    xClose.addEventListener("click", () => {
      modalContainer.classList.remove("appear");
      viz.classList.remove("appear")
    });
  });
});