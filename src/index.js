import { loadPage } from './load-page.js';
import { renderHome } from './home.js';
import { renderMenu } from './menu.js';
import { renderContact } from './contact.js';

// cache container
const content = document.querySelector('#content');

// load page
content.append(...loadPage(renderHome));

// cache DOM
const tabs = document.querySelectorAll('#nav > li');
let main = document.querySelector('main');

// add event listeners
tabs.forEach(tab => tab.addEventListener('click', switchTab));

// delete main and switch to tab that was clicked
function switchTab(e) {
  main.remove();

  // obj to relate tab text content to correct page loader func
  const tabLoaders = {
    'Home': renderHome,
    'Menu': renderMenu,
    'Contact': renderContact
  };

  // run appropriate tabLoader depending on which tab was clicked
  main = tabLoaders[e.target.innerText]();
  content.appendChild(main);
}