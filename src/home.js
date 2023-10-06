function home() {
  const main = document.createElement('main');
  const title = document.createElement('h1');
  title.innerText = "Munchie's Eats";
  main.appendChild(title);
  const tag = document.createElement('p');
  tag.innerText = "This restaurant is so wonderful";
  main.appendChild(tag);

  const content = document.querySelector('#content');
  content.appendChild(main);
}

export { home };