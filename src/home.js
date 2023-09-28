function buildHeader() {
  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  h1.textContent = 'Ursonesca';
  header.appendChild(h1);

  return header;
}

function buildHomePage() {
  const content = document.querySelector('#content');
  content.appendChild(buildHeader());
}

export default buildHomePage;