function buildHeader() {
  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  h1.textContent = 'Ursonesca';
  header.appendChild(h1);

  return header;
}

function buildNav() {
  const nav = document.createElement('nav');

  const homeButton = document.createElement('button');
  homeButton.classList.add('home-button');
  homeButton.textContent = 'HOME';

  const menuButton = document.createElement('button');
  menuButton.classList.add('menu-button');
  menuButton.textContent = 'MENU';

  const contactButton = document.createElement('button');
  contactButton.classList.add('contact-button');
  contactButton.textContent = 'CONTACT';

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  return nav;
}

function buildMain() {
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('main');

  const h2 = document.createElement('h2');
  h2.textContent = 'A lot of stuff will go here';

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
  img.setAttribute('src', '../src/images/github.svg');
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

function buildHomePage() {
  const content = document.querySelector('#content');
  content.appendChild(buildHeader());
  content.appendChild(buildNav());
  content.appendChild(buildMain());
  content.appendChild(buildFooter());
}

export default buildHomePage;