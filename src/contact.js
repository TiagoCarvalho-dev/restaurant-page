import { buildHeader, buildNav, buildFooter } from "./index.js";

function buildMainContact() {
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('main');

  const reservationDiv = document.createElement('div');
  reservationDiv.classList.add('reservation-container');

  const reservationH2 = document.createElement('h2');
  reservationH2.textContent = 'RESERVATIONS';

  const reservationP = document.createElement('p');
  reservationP.textContent = '+55 (19)12345-6789 - Josh';

  reservationDiv.appendChild(reservationH2);
  reservationDiv.appendChild(reservationP);

  const suggestionsDiv = document.createElement('div');
  suggestionsDiv.classList.add('suggestions-container');

  const suggestionsH2 = document.createElement('h2');
  suggestionsH2.textContent = 'SUGGESTIONS';

  const suggestionsP = document.createElement('p');
  suggestionsP.textContent = 'ursonesca@somewhere.com - Veronica';

  suggestionsDiv.appendChild(suggestionsH2);
  suggestionsDiv.appendChild(suggestionsP);

  const addressDiv = document.createElement('div');
  addressDiv.classList.add('address-container');

  const addressH2 = document.createElement('h2');
  addressH2.textContent = 'ADDRESS';

  const addressP = document.createElement('p');
  addressP.textContent = '5331 Rexford Court, Montgomery AL 36116'

  addressDiv.appendChild(addressH2);
  addressDiv.appendChild(addressP);

  mainDiv.appendChild(reservationDiv);
  mainDiv.appendChild(suggestionsDiv);
  mainDiv.appendChild(addressDiv);

  return mainDiv;
}

export default function buildContactPage() {
  const content = document.querySelector('#content');
  content.appendChild(buildHeader());
  content.appendChild(buildNav());
  content.appendChild(buildMainContact());
  content.appendChild(buildFooter());
}