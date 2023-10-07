// create tab header
function createHeader(text, level) {
  const title = document.createElement(`h${level}`);
  title.innerText = text;

  return title;
}

// create paragraph
function createParagraph(text) {
  const paragraph = document.createElement('p');
  paragraph.innerText = text;
  
  return paragraph;
}

function createImg(srcText, altText) {
  const img = document.createElement('img');
  img.src = srcText;
  img.alt = altText;

  return img;
}

function assemble(obj, className) {
  const container = document.createElement('div');
  if (className) container.classList.add(className);

  for (const key in obj) {
    container.appendChild(obj[key]);
  }

  return container;
}

export { createHeader, createParagraph, createImg, assemble };