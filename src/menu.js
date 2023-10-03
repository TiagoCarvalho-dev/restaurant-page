import { buildHeader, buildNav, buildFooter } from "./index.js";

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

  const lunchDiv = document.createElement('div');
  lunchDiv.classList.add('lunch-container');

  const lunchH3 = document.createElement('h3');
  lunchH3.textContent = 'LUNCH';
  lunchDiv.appendChild(lunchH3);

  const lunch1Div = document.createElement('div');
  lunch1Div.classList.add('lunch1');

  const lunch1Img = document.createElement('img');
  lunch1Img.setAttribute('src', '../src/images/hotdog.jpg');
  lunch1Img.setAttribute('alt', 'Hot-Dog');
  lunch1Img.setAttribute('width', '50px');
  lunch1Img.setAttribute('height', '50px');

  const lunch1H4 = document.createElement('h4');
  lunch1H4.textContent = 'Hot-Dog';

  const lunch1PIng = document.createElement('p');
  lunch1PIng.textContent = 'Ingredients here';
  
  const lunch1PPrice = document.createElement('p');
  lunch1PPrice.textContent = '$Price';

  lunch1Div.appendChild(lunch1Img);
  lunch1Div.appendChild(lunch1H4);
  lunch1Div.appendChild(lunch1PIng);
  lunch1Div.appendChild(lunch1PPrice);

  const lunch2Div = document.createElement('div');
  lunch2Div.classList.add('lunch2');

  const lunch2Img = document.createElement('img');
  lunch2Img.setAttribute('src', '../src/images/pasta.jpg');
  lunch2Img.setAttribute('alt', 'Pasta');
  lunch2Img.setAttribute('width', '50px');
  lunch2Img.setAttribute('height', '50px');

  const lunch2H4 = document.createElement('h4');
  lunch2H4.textContent = 'Pasta';

  const lunch2PIng = document.createElement('p');
  lunch2PIng.textContent = 'Ingredients here';
  
  const lunch2PPrice = document.createElement('p');
  lunch2PPrice.textContent = '$Price';

  lunch2Div.appendChild(lunch2Img);
  lunch2Div.appendChild(lunch2H4);
  lunch2Div.appendChild(lunch2PIng);
  lunch2Div.appendChild(lunch2PPrice);

  lunchDiv.appendChild(lunch1Div);
  lunchDiv.appendChild(lunch2Div);

  const dinnerDiv = document.createElement('div');
  dinnerDiv.classList.add('dinner-container');

  const dinnerH3 = document.createElement('h3');
  dinnerH3.textContent = 'DINNER';
  dinnerDiv.appendChild(dinnerH3);

  const dinner1Div = document.createElement('div');
  dinner1Div.classList.add('dinner1');

  const dinner1Img = document.createElement('img');
  dinner1Img.setAttribute('src', '../src/images/pizza.jpg');
  dinner1Img.setAttribute('alt', 'Pizza');
  dinner1Img.setAttribute('width', '50px');
  dinner1Img.setAttribute('height', '50px');

  const dinner1H4 = document.createElement('h4');
  dinner1H4.textContent = 'Pizza';

  const dinner1PIng = document.createElement('p');
  dinner1PIng.textContent = 'Ingredients here';
  
  const dinner1PPrice = document.createElement('p');
  dinner1PPrice.textContent = '$Price';

  dinner1Div.appendChild(dinner1Img);
  dinner1Div.appendChild(dinner1H4);
  dinner1Div.appendChild(dinner1PIng);
  dinner1Div.appendChild(dinner1PPrice);

  const dinner2Div = document.createElement('div');
  dinner2Div.classList.add('dinner2');

  const dinner2Img = document.createElement('img');
  dinner2Img.setAttribute('src', '../src/images/sandwich.jpg');
  dinner2Img.setAttribute('alt', 'Sandwich');
  dinner2Img.setAttribute('width', '50px');
  dinner2Img.setAttribute('height', '50px');

  const dinner2H4 = document.createElement('h4');
  dinner2H4.textContent = 'Sandwich';

  const dinner2PIng = document.createElement('p');
  dinner2PIng.textContent = 'Ingredients here';
  
  const dinner2PPrice = document.createElement('p');
  dinner2PPrice.textContent = '$Price';

  dinner2Div.appendChild(dinner2Img);
  dinner2Div.appendChild(dinner2H4);
  dinner2Div.appendChild(dinner2PIng);
  dinner2Div.appendChild(dinner2PPrice);

  dinnerDiv.appendChild(dinner1Div);
  dinnerDiv.appendChild(dinner2Div);
  
  mainDiv.appendChild(breakfastDiv);
  mainDiv.appendChild(lunchDiv);
  mainDiv.appendChild(dinnerDiv);

  return mainDiv;
}

export default function buildMenuPage() {
  const content = document.querySelector('#content');
  content.appendChild(buildHeader());
  content.appendChild(buildNav());
  content.appendChild(buildMainMenu());
  content.appendChild(buildFooter());
}