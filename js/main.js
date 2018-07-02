let currentImage = document.getElementById('current');
let images = document.querySelector('.imgs');

images.childNodes[1].style.opacity = 0.4;

function imgSelected(e) {
  const clicked = e.target;

  if (
    clicked.tagName.toLowerCase() === 'img' &&
    clicked.src !== currentImage.src
  ) {
    for (image of images.getElementsByTagName('img')) {
      image.style.opacity = 1;
    }

    clicked.style.opacity = 0.4;

    currentImage.classList.add('fading');
    currentImage.src = clicked.src;

    setTimeout(() => currentImage.classList.remove('fading'), 500);
  }
}

images.addEventListener('click', imgSelected);
