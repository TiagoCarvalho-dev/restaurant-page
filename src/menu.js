import waffles from "../src/images/waffles.jpg";
import pancakes from "../src/images/pancakes.jpg";
import hotdog from "../src/images/hotdog.jpg";
import pasta from "../src/images/pasta.jpg";
import pizza from "../src/images/pizza.jpg";
import sandwich from "../src/images/sandwich.jpg";

export default function buildMainMenu() {
  const mainDiv = document.querySelector('.main');

  const breakfastDiv = document.createElement('div');
  breakfastDiv.classList.add('breakfast-container');

  const breakfastH3 = document.createElement('h3');
  breakfastH3.textContent = 'BREAKFAST';
  breakfastDiv.appendChild(breakfastH3);

  const breakfast1Div = document.createElement('div');
  breakfast1Div.classList.add('breakfast1');

  const breakfast1Img = document.createElement('img');
  breakfast1Img.setAttribute('src', waffles);
  breakfast1Img.setAttribute('alt', 'Waffles');

  const breakfast1H4 = document.createElement('h4');
  breakfast1H4.textContent = 'Waffles';
  
  const breakfast1PPrice = document.createElement('p');
  breakfast1PPrice.textContent = '$5.00';

  breakfast1Div.appendChild(breakfast1Img);
  breakfast1Div.appendChild(breakfast1H4);
  breakfast1Div.appendChild(breakfast1PPrice);

  const breakfast2Div = document.createElement('div');
  breakfast2Div.classList.add('breakfast2');

  const breakfast2Img = document.createElement('img');
  breakfast2Img.setAttribute('src', pancakes);
  breakfast2Img.setAttribute('alt', 'Pancakes');

  const breakfast2H4 = document.createElement('h4');
  breakfast2H4.textContent = 'Pancakes';
  
  const breakfast2PPrice = document.createElement('p');
  breakfast2PPrice.textContent = '$7.00';

  breakfast2Div.appendChild(breakfast2Img);
  breakfast2Div.appendChild(breakfast2H4);
  breakfast2Div.appendChild(breakfast2PPrice);
  
  const breakfastPlatesDiv = document.createElement('div');
  breakfastPlatesDiv.classList.add('breakfast-plates');

  breakfastPlatesDiv.appendChild(breakfast1Div);
  breakfastPlatesDiv.appendChild(breakfast2Div);

  breakfastDiv.appendChild(breakfastPlatesDiv);

  const lunchDiv = document.createElement('div');
  lunchDiv.classList.add('lunch-container');

  const lunchH3 = document.createElement('h3');
  lunchH3.textContent = 'LUNCH';
  lunchDiv.appendChild(lunchH3);

  const lunch1Div = document.createElement('div');
  lunch1Div.classList.add('lunch1');

  const lunch1Img = document.createElement('img');
  lunch1Img.setAttribute('src', hotdog);
  lunch1Img.setAttribute('alt', 'Hot-Dog');

  const lunch1H4 = document.createElement('h4');
  lunch1H4.textContent = 'Hot-Dog';
  
  const lunch1PPrice = document.createElement('p');
  lunch1PPrice.textContent = '$15.00';

  lunch1Div.appendChild(lunch1Img);
  lunch1Div.appendChild(lunch1H4);
  lunch1Div.appendChild(lunch1PPrice);

  const lunch2Div = document.createElement('div');
  lunch2Div.classList.add('lunch2');

  const lunch2Img = document.createElement('img');
  lunch2Img.setAttribute('src', pasta);
  lunch2Img.setAttribute('alt', 'Pasta');

  const lunch2H4 = document.createElement('h4');
  lunch2H4.textContent = 'Pasta';
  
  const lunch2PPrice = document.createElement('p');
  lunch2PPrice.textContent = '$18.00';

  lunch2Div.appendChild(lunch2Img);
  lunch2Div.appendChild(lunch2H4);
  lunch2Div.appendChild(lunch2PPrice);

  const lunchPlatesDiv = document.createElement('div');
  lunchPlatesDiv.classList.add('lunch-plates');

  lunchPlatesDiv.appendChild(lunch1Div);
  lunchPlatesDiv.appendChild(lunch2Div);

  lunchDiv.appendChild(lunchPlatesDiv);

  const dinnerDiv = document.createElement('div');
  dinnerDiv.classList.add('dinner-container');

  const dinnerH3 = document.createElement('h3');
  dinnerH3.textContent = 'DINNER';
  dinnerDiv.appendChild(dinnerH3);

  const dinner1Div = document.createElement('div');
  dinner1Div.classList.add('dinner1');

  const dinner1Img = document.createElement('img');
  dinner1Img.setAttribute('src', pizza);
  dinner1Img.setAttribute('alt', 'Pizza');

  const dinner1H4 = document.createElement('h4');
  dinner1H4.textContent = 'Pizza';
  
  const dinner1PPrice = document.createElement('p');
  dinner1PPrice.textContent = '$25.00';

  dinner1Div.appendChild(dinner1Img);
  dinner1Div.appendChild(dinner1H4);
  dinner1Div.appendChild(dinner1PPrice);

  const dinner2Div = document.createElement('div');
  dinner2Div.classList.add('dinner2');

  const dinner2Img = document.createElement('img');
  dinner2Img.setAttribute('src', sandwich);
  dinner2Img.setAttribute('alt', 'Sandwich');

  const dinner2H4 = document.createElement('h4');
  dinner2H4.textContent = 'Sandwich';
  
  const dinner2PPrice = document.createElement('p');
  dinner2PPrice.textContent = '$24.00';

  dinner2Div.appendChild(dinner2Img);
  dinner2Div.appendChild(dinner2H4);
  dinner2Div.appendChild(dinner2PPrice);

  const dinnerPlatesDiv = document.createElement('div');
  dinnerPlatesDiv.classList.add('dinner-plates');

  dinnerPlatesDiv.appendChild(dinner1Div);
  dinnerPlatesDiv.appendChild(dinner2Div);

  dinnerDiv.appendChild(dinnerPlatesDiv);
  
  mainDiv.appendChild(breakfastDiv);
  mainDiv.appendChild(lunchDiv);
  mainDiv.appendChild(dinnerDiv);

  return mainDiv;
}