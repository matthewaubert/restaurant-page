import { createHeader } from "./helpers";

function loadPage(renderPage) {
  return [renderHeader(), renderNav(), renderPage()];
}

function renderHeader() {
  const header = document.createElement('header');
  header.appendChild(createHeader("Munchy's Eats", 1));

  return header;
}

function renderNav() {
  const nav = document.createElement('nav');

  // create ul and 3 li
  const ul = document.createElement('ul');
  ul.setAttribute('id', 'nav');
  const tabText = ['Home', 'Menu', 'Contact'];

  tabText.forEach(tab => {
    const li = document.createElement('li');
    li.innerText = tab;
    if (tab === 'Home') li.classList.add('selected');

    ul.appendChild(li);
  });
  nav.appendChild(ul);

  return nav;
}

export { loadPage };