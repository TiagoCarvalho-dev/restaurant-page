import { buildHeader, buildNav, buildFooter } from "./index.js";

function buildMainAbout() {
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('main');

  const h2 = document.createElement('h2');
  h2.textContent = 'Something about the restaurant here.';
  mainDiv.appendChild(h2);

  const scheduleDiv = document.createElement('div');
  scheduleDiv.classList.add('schedule-container');

  const ul = document.createElement('ul');

  const hoursLi = document.createElement('li');
  hoursLi.textContent = 'Hours';
  const mondayLi = document.createElement('li');
  mondayLi.textContent = 'Monday';
  const tuesdayLi = document.createElement('li');
  tuesdayLi.textContent = 'Tuesday';
  const wednesdayLi = document.createElement('li');
  wednesdayLi.textContent = 'Wednesday';
  const thursdayLi = document.createElement('li');
  thursdayLi.textContent = 'Thursday';
  const fridayLi = document.createElement('li');
  fridayLi.textContent = 'Friday';
  const saturdayLi = document.createElement('li');
  saturdayLi.textContent = 'Saturday';
  const sundayLi = document.createElement('li');
  sundayLi.textContent = 'Sunday';

  ul.appendChild(hoursLi);
  ul.appendChild(mondayLi);
  ul.appendChild(tuesdayLi);
  ul.appendChild(wednesdayLi);
  ul.appendChild(thursdayLi);
  ul.appendChild(fridayLi);
  ul.appendChild(saturdayLi);
  ul.appendChild(sundayLi);

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