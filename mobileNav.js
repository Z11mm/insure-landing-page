const hamburger = document.querySelector('#hamburger');
const close = document.querySelector('.close');

const toggleMenu = () => {
  const links = document.querySelector('.options');
  console.log(links);
  // if (links.style.display === 'block') {
  //   links.style.display = 'none';
  //   close.style.display = 'none';
  // } else {
  //   links.style.display = 'block';
  //   close.style.display = 'block';
  // }
  if (links.classList.toggle('options-open')) {
    links.classList.remove('options')
  } else {
    links.classList.add('options')
  };
};

hamburger.addEventListener('click', () => {
  toggleMenu();
});

// close.addEventListener('click', () => {
//   !toggleMenu();
// });
