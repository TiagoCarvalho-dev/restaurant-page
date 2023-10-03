import { buildHeader, buildNav, buildFooter } from "./index.js";

function buildMainAbout() {
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('main');

  const h2 = document.createElement('h2');
  h2.textContent = 'Serving great food, for great people, since 2023.';
  mainDiv.appendChild(h2);

  const scheduleDiv = document.createElement('div');
  scheduleDiv.classList.add('schedule-container');

  const ul = document.createElement('ul');

  const hoursLi = document.createElement('li');
  hoursLi.textContent = 'Hours';
  const breakfastLi = document.createElement('li');
  breakfastLi.textContent = 'Breakfast - from 6:00AM to 9:00AM';
  const lunchLi = document.createElement('li');
  lunchLi.textContent = 'Lunch - from 10:30AM to 2:00PM';
  const dinnerLi = document.createElement('li');
  dinnerLi.textContent = 'Dinner - from 7:00PM to 23:30PM';
  const weekendsLi = document.createElement('li');
  weekendsLi.textContent = 'Weekends - from 6:00AM to 23:30PM';

  ul.appendChild(hoursLi);
  ul.appendChild(breakfastLi);
  ul.appendChild(lunchLi);
  ul.appendChild(dinnerLi);
  ul.appendChild(weekendsLi);

  scheduleDiv.appendChild(ul);
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