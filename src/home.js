import { buildHeader, buildNav, buildFooter } from "./index.js";

function buildMainHome() {
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('main');

  const reviewsDiv = document.createElement('div');
  reviewsDiv.classList.add('reviews-container');

  const p1 = document.createElement('p');
  p1.textContent = 'Best restaurant in town - Food Advisor';
  const p2 = document.createElement('p');
  p2.textContent = 'The best fucking pizza I\'ve ever had - Gordon Ramsey';
  const p3 = document.createElement('p');
  p3.textContent = 'Can\'t wait to have lunch there again - Random Journalist';

  reviewsDiv.appendChild(p1);
  reviewsDiv.appendChild(p2);
  reviewsDiv.appendChild(p3);

  const HomeImg = document.createElement('img');
  HomeImg.setAttribute('src', '../src/images/restaurant.jpg');
  HomeImg.setAttribute('alt', 'Ursonesca Restaurant');
  HomeImg.setAttribute('width', '400px');
  HomeImg.setAttribute('height', 'auto');

  mainDiv.appendChild(reviewsDiv);
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