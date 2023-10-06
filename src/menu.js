import { createHeader, createDescription } from "./helpers";

const header = document.createElement('header');
const main = document.createElement('main');

function renderMenu() {
  header.appendChild(createHeader('Menu'));
}



export { renderMenu };