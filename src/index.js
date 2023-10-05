import "./style.css";
import buildMainAbout from "./about.js";
import buildMainMenu from "./menu.js";
import buildMainContact from "./contact.js";
import gitHubLogo from "./images/github.svg";

function buildHeader() {
  const header = document.createElement('header');
  const titleH1 = document.createElement('h1');
  titleH1.textContent = 'Ursonesca';
  header.appendChild(titleH1);

  return header;
}

function buildNav() {
  const nav = document.createElement('nav');

  const aboutButton = document.createElement('button');
  aboutButton.classList.add('about-button', 'active-tab');
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
    clearMainDiv();
    buildMainAbout();
    document.querySelector('.about-button').classList.add('active-tab');
    document.querySelector('.menu-button').classList.remove('active-tab');
    document.querySelector('.contact-button').classList.remove('active-tab');
  });

  menuButton.addEventListener('click', () => {
    clearMainDiv();
    buildMainMenu();
    document.querySelector('.about-button').classList.remove('active-tab');
    document.querySelector('.menu-button').classList.add('active-tab');
    document.querySelector('.contact-button').classList.remove('active-tab');
  });

  contactButton.addEventListener('click', () => {
    clearMainDiv();
    buildMainContact();
    document.querySelector('.about-button').classList.remove('active-tab');
    document.querySelector('.menu-button').classList.remove('active-tab');
    document.querySelector('.contact-button').classList.add('active-tab');
  });

  return nav;
}

function buildMain() {
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('main');

  return mainDiv;
}

function buildFooter() {
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
  img.setAttribute('src', gitHubLogo);
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

function clearMainDiv() {
  const mainDiv = document.querySelector('.main');
  while(mainDiv.firstChild) {
    mainDiv.removeChild(mainDiv.lastChild);
  }
}

function buildOpeningPage() {
  const content = document.querySelector('#content');
  content.appendChild(buildHeader());
  content.appendChild(buildNav());
  content.appendChild(buildMain());
  content.appendChild(buildMainAbout());
  content.appendChild(buildFooter());
}

buildOpeningPage();