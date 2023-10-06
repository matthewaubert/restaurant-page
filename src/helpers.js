// create tab header
function createHeader(text) {
  const title = document.createElement('h1');
  title.innerText = text;

  return title;
}

// create tab description
function createDescription(text) {
  const description = document.createElement('p');
  description.innerText = text;
  
  return description;
}

export { createHeader, createDescription };