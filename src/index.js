import "./style.css";
import buildHomePage from "./home.js";
import buildMenuPage from "./menu.js";
import buildContactPage from "./contact.js";

export function buildHeader() {
  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  h1.textContent = 'Ursonesca';
  header.appendChild(h1);

  return header;
}

export function buildNav() {
  const nav = document.createElement('nav');

  const homeButton = document.createElement('button');
  homeButton.classList.add('home-button');
  homeButton.textContent = 'HOME';

  const menuButton = document.createElement('button');
  menuButton.classList.add('menu-button');
  menuButton.textContent = 'MENU';

  const contactButton = document.createElement('button');
  contactButton.classList.add('contact-button');
  contactButton.textContent = 'CONTACT';

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  homeButton.addEventListener('click', () => {
    clearDOM();
    buildHomePage();
  });

  menuButton.addEventListener('click', () => {
    clearDOM();
    buildMenuPage();
  });

  contactButton.addEventListener('click', () => {
    clearDOM();
    buildContactPage();
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