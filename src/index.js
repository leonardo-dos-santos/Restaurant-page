import './styles.css';
import createHomePage from './home/home';
import createMenuPage from './menu/menu';
import createContactPage from './contact/contact';

function clearContent() {
  const content = document.getElementById('content');
  content.innerHTML = '';
}

function setActiveButton(buttonId) {
  const buttons = document.querySelectorAll('nav button');
  buttons.forEach(button => {
    if (button.id === buttonId) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

document.getElementById('home-btn').addEventListener('click', () => {
  clearContent();
  createHomePage();
  setActiveButton('home-btn');
});

document.getElementById('menu-btn').addEventListener('click', () => {
  clearContent();
  createMenuPage();
  setActiveButton('menu-btn');
});

document.getElementById('contact-btn').addEventListener('click', () => {
  clearContent();
  createContactPage();
  setActiveButton('contact-btn');
});

document.addEventListener("DOMContentLoaded", () => {
  createHomePage();
  setActiveButton('home-btn');
});
