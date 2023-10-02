import { buildHeader, buildNav, buildFooter } from "./home.js";

function buildMainMenu() {
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('main-page');

  const titleH2 = document.createElement('h2');
  titleH2.textContent = 'MENU';
  mainDiv.appendChild(titleH2);

  const breakfastDiv = document.createElement('div');
  breakfastDiv.classList.add('breakfast-container');

  const breakfastH3 = document.createElement('h3');
  breakfastH3.textContent = 'BREAKFAST';
  breakfastDiv.appendChild(breakfastH3);

  const breakfast1Div = document.createElement('div');
  breakfast1Div.classList.add('breakfast1');

  const breakfast1Img = document.createElement('img');
  breakfast1Img.setAttribute('src', '../src/images/waffles.jpg');
  breakfast1Img.setAttribute('alt', 'Waffles');
  breakfast1Img.setAttribute('width', '50px');
  breakfast1Img.setAttribute('height', '50px');

  const breakfast1H4 = document.createElement('h4');
  breakfast1H4.textContent = 'Waffles';

  const breakfast1PIng = document.createElement('p');
  breakfast1PIng.textContent = 'Ingredients here';
  
  const breakfast1PPrice = document.createElement('p');
  breakfast1PPrice.textContent = '$Price';

  breakfast1Div.appendChild(breakfast1Img);
  breakfast1Div.appendChild(breakfast1H4);
  breakfast1Div.appendChild(breakfast1PIng);
  breakfast1Div.appendChild(breakfast1PPrice);

  const breakfast2Div = document.createElement('div');
  breakfast2Div.classList.add('breakfast2');

  const breakfast2Img = document.createElement('img');
  breakfast2Img.setAttribute('src', '../src/images/pancakes.jpg');
  breakfast2Img.setAttribute('alt', 'Pancakes');
  breakfast2Img.setAttribute('width', '50px');
  breakfast2Img.setAttribute('height', '50px');

  const breakfast2H4 = document.createElement('h4');
  breakfast2H4.textContent = 'Pancakes';

  const breakfast2PIng = document.createElement('p');
  breakfast2PIng.textContent = 'Ingredients here';
  
  const breakfast2PPrice = document.createElement('p');
  breakfast2PPrice.textContent = '$Price';

  breakfast2Div.appendChild(breakfast2Img);
  breakfast2Div.appendChild(breakfast2H4);
  breakfast2Div.appendChild(breakfast2PIng);
  breakfast2Div.appendChild(breakfast2PPrice);
  
  breakfastDiv.appendChild(breakfast1Div);
  breakfastDiv.appendChild(breakfast2Div);



  
  mainDiv.appendChild(breakfastDiv);

  return mainDiv;
}

export default function buildMenuPage() {
  const content = document.querySelector('#content');
  content.appendChild(buildHeader());
  content.appendChild(buildNav());
  content.appendChild(buildMainMenu());
  content.appendChild(buildFooter());
}