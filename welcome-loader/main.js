const scrollPage = () => {
  console.log('object');
}

// Detect animation end
const image = document.querySelector('.welcome');

image.addEventListener('animationend', () => {
  setTimeout(scrollPage, 1000);
});
