function loadPage(page) {
  const content = document.querySelector('#content');
  page.forEach(el => content.appendChild(el));
}

export { loadPage };