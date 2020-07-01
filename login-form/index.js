// Throttle Function
const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return function() {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc)
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  }
}

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const dog = document.querySelector('.face');

email.addEventListener('focus', () => {
  dog.style.setProperty('--rotate-face', '15deg');
})

email.addEventListener('blur', () => {
  dog.style.setProperty('--rotate-face', '0deg');
})


email.addEventListener('input', throttle((e) => {
  // Keep degree btw -15 and 15
  const length = Math.min(email.value.length - 16, 15) * -1;
  dog.style.setProperty('--rotate-face', `${length}deg`);
}, 100))