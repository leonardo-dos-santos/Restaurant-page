import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function init() {
  loadHome(); // Load home by default

  const homeButton = document.querySelector('button:nth-child(1)');
  const menuButton = document.querySelector('button:nth-child(2)');
  const contactButton = document.querySelector('button:nth-child(3)');

  homeButton.addEventListener('click', loadHome);
  menuButton.addEventListener('click', loadMenu);
  contactButton.addEventListener('click',loadContact);
}

document.addEventListener('DOMContentLoaded', init);
