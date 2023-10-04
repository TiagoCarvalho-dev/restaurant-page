import { buildHeader, buildNav, buildFooter } from "./index.js";

function buildMainAbout() {
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('main');

  const h2 = document.createElement('h2');
  h2.textContent = 'SERVING GREAT FOOD, FOR GREAT PEOPLE, SINCE 2023.';
  mainDiv.appendChild(h2);

  const scheduleDiv = document.createElement('div');
  scheduleDiv.classList.add('schedule-container');

  const hoursH3 = document.createElement('h3');
  hoursH3.textContent = 'Hours';

  const breakfastP = document.createElement('p');
  breakfastP.textContent = 'Breakfast - from 6:00AM to 9:00AM.';
  const lunchP = document.createElement('p');
  lunchP.textContent = 'Lunch - from 10:30AM to 2:00PM.';
  const dinnerP = document.createElement('p');
  dinnerP.textContent = 'Dinner - from 7:00PM to 23:30PM.';
  const weekendsP = document.createElement('p');
  weekendsP.textContent = 'Weekends - from 6:00AM to 23:30PM.';

  scheduleDiv.appendChild(hoursH3);
  scheduleDiv.appendChild(breakfastP);
  scheduleDiv.appendChild(lunchP);
  scheduleDiv.appendChild(dinnerP);
  scheduleDiv.appendChild(weekendsP);

  mainDiv.appendChild(scheduleDiv);

  return mainDiv;
}

export default function buildAboutPage() {
  const content = document.querySelector('#content');
  content.appendChild(buildHeader());
  content.appendChild(buildNav());
  content.appendChild(buildMainAbout());
  content.appendChild(buildFooter());
}