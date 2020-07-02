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
const hands = document.querySelectorAll('.hand');
const tongue = document.querySelector('.tongue');
const toggle = document.querySelector('.show-pass');

// Rotate head on focus
email.addEventListener('focus', () => {
  dog.style.setProperty('--rotate-face', '15deg');
  hands.forEach(hand => {
    hand.classList.remove('cover');
    hand.classList.remove('peek');
  });
});

// Rotate head when input field loses focus
email.addEventListener('blur', () => {
  dog.style.setProperty('--rotate-face', '0deg');
});

// Rotate head on input
email.addEventListener('input', throttle(() => {
  // Keep degree btw -15 and 15
  const length = Math.min(email.value.length - 16, 15) * -1;
  dog.style.setProperty('--rotate-face', `${length}deg`);
}, 100));

// Cover face on focus
password.addEventListener('focus', () => {
  hands.forEach(hand => {
    hand.classList.add('cover');
  });
  tongue.classList.add('hold');
});

// Hide face on blur
password.addEventListener('blur', () => {
  hands.forEach(hand => {
    hand.classList.remove('cover');
  });
  tongue.classList.remove('hold');
});

toggle.addEventListener('click', () => {
  const passType = password.getAttribute('type');
  if (passType === 'password') {
    password.setAttribute('type', 'text');
  } else {
    password.setAttribute('type', 'password');
  }

  if (hands[0].classList.contains('cover')) {
    hands.forEach(hand => {
      hand.classList.remove('cover');
      hand.classList.add('peek');
    });
  } else if (hands[0].classList.contains('peek')) {
    hands.forEach(hand => {
      hand.classList.remove('peek');
      hand.classList.add('cover');
    });
  } else {
    hands.forEach(hand => {
      hand.classList.toggle('peek');
    });
  }
});

// prevent page load
const form = document.querySelector('form');
const submit = document.querySelector('button[type=submit]');

const prevent = e => {
  e.preventDefault();
}

form.addEventListener('submit', prevent);
submit.addEventListener('click', prevent);