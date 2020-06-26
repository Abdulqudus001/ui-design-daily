const nav = document.querySelector('.sidebar');
const toggleNav = () => {
  console.log('object');
  nav.classList.add('visible');
}
const closeNav = () => {
  nav.classList.remove('visible');
}