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

function buildHomePage() {
  const content = document.querySelector('#content');
  content.appendChild(buildHeader());
  content.appendChild(buildNav());
}

export default buildHomePage;