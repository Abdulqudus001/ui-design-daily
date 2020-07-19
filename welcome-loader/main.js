// Scroll to top on reload
document.body.style.overflowY = 'hidden';
window.scrollTo({
  top: 0,
  behavior: 'smooth',
});

const scrollPage = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth',
  });
}

const scrollTop = document.body.scrollTop

// Detect animation end
const image = document.querySelector('.welcome');

image.addEventListener('animationend', () => {
  document.body.style.overflowY = 'auto';
  if (scrollTop < 10) {
    setTimeout(scrollPage, 2500);
  }
});

document.querySelector('h1').addEventListener('animationend', () => {
  document.querySelector('h2').style.opacity = '1';
});
