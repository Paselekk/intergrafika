const images = document.getElementsByClassName('image');
const currentImage = document.getElementById('currentImage');
const textCurrentImage = document.getElementById('textCurrentImage');

for (let i = 0; i < images.length; i++) {
  const temp = images[i];

  temp.addEventListener('mouseover', () => {
    currentImage.removeAttribute("hidden","hidden");
    currentImage.src = temp.src.toString();
    currentImage.alt = temp.alt;
    textCurrentImage.innerHTML = temp.alt;
  }, false);

  temp.addEventListener('mouseout', () => {
    currentImage.removeAttribute("hidden","hidden");
    currentImage.src = temp.src.toString();
    currentImage.alt = temp.alt;
    textCurrentImage.innerHTML = temp.alt;
  }, false);

}

currentImage.addEventListener("click", () => {
    currentImage.setAttribute("hidden","hidden");
    textCurrentImage.innerHTML = "";
    currentImage.removeAttribute('src');
    currentImage.removeAttribute('alt');
}, false)


currentImage.addEventListener("mouseover", () => {
  currentImage.style.rotate= "360deg";
  currentImage.style.transition= "all 3s ease";
}, false)

currentImage.addEventListener("mouseout", () => {
  currentImage.style.rotate= "0deg";
  currentImage.style.transition= "all 1s ease";
}, false)