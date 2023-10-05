import "./style.css";
import buildHomePage from "./home.js";
import buildAboutPage from "./about.js";
import buildMenuPage from "./menu.js";
import buildContactPage from "./contact.js";

export function buildHeader() {
  const header = document.createElement('header');
  const titleButton = document.createElement('button');
  titleButton.textContent = 'Ursonesca';
  header.appendChild(titleButton);

  titleButton.addEventListener('click', () => {
    clearDOM();
    buildHomePage();
    document.querySelector('.about-button').classList.remove('active-tab');
    document.querySelector('.menu-button').classList.remove('active-tab');
    document.querySelector('.contact-button').classList.remove('active-tab');
  });

  return header;
}

export function buildNav() {
  const nav = document.createElement('nav');

  const aboutButton = document.createElement('button');
  aboutButton.classList.add('about-button');
  aboutButton.textContent = 'ABOUT';

  const menuButton = document.createElement('button');
  menuButton.classList.add('menu-button');
  menuButton.textContent = 'MENU';

  const contactButton = document.createElement('button');
  contactButton.classList.add('contact-button');
  contactButton.textContent = 'CONTACT';

  nav.appendChild(aboutButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  aboutButton.addEventListener('click', () => {
    clearDOM();
    buildAboutPage();
    document.querySelector('.about-button').classList.add('active-tab');
    document.querySelector('.menu-button').classList.remove('active-tab');
    document.querySelector('.contact-button').classList.remove('active-tab');
  });

  menuButton.addEventListener('click', () => {
    clearDOM();
    buildMenuPage();
    document.querySelector('.about-button').classList.remove('active-tab');
    document.querySelector('.menu-button').classList.add('active-tab');
    document.querySelector('.contact-button').classList.remove('active-tab');
  });

  contactButton.addEventListener('click', () => {
    clearDOM();
    buildContactPage();
    document.querySelector('.about-button').classList.remove('active-tab');
    document.querySelector('.menu-button').classList.remove('active-tab');
    document.querySelector('.contact-button').classList.add('active-tab');
  });

  return nav;
}

export function buildFooter() {
  const footer = document.createElement('div');
  footer.classList.add('footer');

  const copyrightP = document.createElement('p');
  copyrightP.textContent = 'Copyright ©';

  const yearP = document.createElement('p');
  yearP.textContent = new Date().getFullYear();

  const gitHubPageP = document.createElement('p');
  gitHubPageP.textContent = 'TiagoCarvalho-dev';

  const a = document.createElement('a');
  a.setAttribute('href', 'https://github.com/TiagoCarvalho-dev');

  const img = document.createElement('img');
  img.setAttribute('src', '../src/images/github.svg');
  img.setAttribute('alt', 'Github Logo');
  img.setAttribute('width', '30px');
  img.setAttribute('height', 'auto');

  a.appendChild(img);
  footer.appendChild(copyrightP);
  footer.appendChild(yearP);
  footer.appendChild(gitHubPageP);
  footer.appendChild(a);

  return footer;
}

function clearDOM() {
  const content = document.querySelector('#content');
  while(content.firstChild) {
    content.removeChild(content.lastChild);
  }
}

buildHomePage();