import { buildHeader, buildNav, buildFooter } from "./home.js";

function buildMainMenu() {
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('main-page');

  const titleH2 = document.createElement('h2');
  titleH2.textContent = 'MENU';
  mainDiv.appendChild(titleH2);

  const breakfastDiv = document.createElement('div');
  breakfastDiv.classList.add('breakfast-container');

  const breakfastH3 = document.createElement('div');
  breakfastH3.textContent = 'BREAKFAST';

  return mainDiv;
}

export default function buildMenuPage() {
  const content = document.querySelector('#content');
  content.appendChild(buildHeader());
  content.appendChild(buildNav());
  content.appendChild(buildMainMenu());
  content.appendChild(buildFooter());
}