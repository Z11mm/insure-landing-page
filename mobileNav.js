const hamburger = document.querySelector('#hamburger');
const close = document.querySelector('#exit');

const toggleMenu = () => {
  const links = document.querySelector('.options');

  if (links.classList.toggle('options-open')) {
    links.classList.remove('hide');
    hamburger.classList.add('hide');
    close.classList.remove('hide');
  } else {
    links.classList.add('hide');
    hamburger.classList.remove('hide');
    close.classList.add('hide');
  }
};

hamburger.addEventListener('click', () => {
  toggleMenu();
});

close.addEventListener('click', () => {
  !toggleMenu();
});
