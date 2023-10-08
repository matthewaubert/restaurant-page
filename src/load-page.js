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

  for (let i = 0; i < 3; i++) {
    const li = document.createElement('li');
    li.innerText = tabText[i];
    ul.appendChild(li);
  }
  nav.appendChild(ul)

  return nav;
}

export { loadPage };