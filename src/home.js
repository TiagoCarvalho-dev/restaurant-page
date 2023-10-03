import { buildHeader, buildNav, buildFooter } from "./index.js";

function buildMainHome() {
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('main');

  const HomeH2 = document.createElement('h2');
  HomeH2.textContent = 'WELCOME TO URSONESCA';

  const HomeH3 = document.createElement('h3');
  HomeH3.textContent = 'Satisfying our customers since 2023';

  const HomeImg = document.createElement('img');
  HomeImg.setAttribute('src', '../src/images/restaurant.jpg');
  HomeImg.setAttribute('alt', 'Ursonesca Restaurant');
  HomeImg.setAttribute('width', '200px');
  HomeImg.setAttribute('height', 'auto');

  mainDiv.appendChild(HomeH2);
  mainDiv.appendChild(HomeH3);
  mainDiv.appendChild(HomeImg);

  return mainDiv;
}

export default function buildHomePage() {
  const content = document.querySelector('#content');
  content.appendChild(buildHeader());
  content.appendChild(buildNav());
  content.appendChild(buildMainHome());
  content.appendChild(buildFooter());
}