const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const expandButton = document.querySelector(".expand");
const closeButton = document.querySelector(".close");

let currentImageIndex = 0;

const showImage = (imageIndex) => {
  images.forEach((image) => {
    image.style.display = "none";
  });
  images[imageIndex].style.display = "block";
};

const prevImage = () => {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  showImage(currentImageIndex);
};

const nextImage = () => {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  showImage(currentImageIndex);
};

const expandImage = () => {
  slider.style.width = "90%";
  slider.style.height = "90%";
  expandButton.style.display = "none";
  closeButton.style.display = "block";
};

const closeExpandedImage = () => {
  slider.style.width = "100%";
  slider.style.height = "100%";
  expandButton.style.display = "block";
  closeButton.style.display = "none";
};

showImage(currentImageIndex);

prevButton.addEventListener("click", prevImage);
nextButton.addEventListener("click", nextImage);
expandButton.addEventListener("click", expandImage);
closeButton.addEventListener("click", closeExpandedImage);

slider.addEventListener("keydown", (event) => {
  if (event.keyCode === 37) {
    prevImage();
  } else if (event.keyCode === 39) {
    nextImage();
  }
});
