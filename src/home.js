import { createHeader, createDescription } from "./helpers";

// render home tab
function renderHome() {
  const header = document.createElement('header');
  const main = document.createElement('main');

  header.appendChild(createHeader("Munchie's Eats"));
  main.appendChild(createDescription("Munchie's Eats is a quaint little cafe tucked away in the trunk of the Great Oak in the Enchanted Forest, just off Rt 112."));
  main.appendChild(createHours());
  main.appendChild(createReviews());

  return [header, main];
}

// create hours content
function createHours() {
  const hoursText = {
    'Wed - Sun': '8am - 3pm',
    'Mon - Tue': 'Closed',
  };

  const hoursContainer = document.createElement('div');
  const header = document.createElement('h2');
  header.innerText = "Hours";
  hoursContainer.appendChild(header);

  for (const key in hoursText) {
    const day = document.createElement('p');
    day.innerText = `${key}: ${hoursText[key]}`;
    hoursContainer.appendChild(day);
  }

  return hoursContainer;
}

// create review content
function createReviews() {
  const reviewContent = [
    {
      text: "Um, freaking delicious! We just moved to the area and wow what a breakfast this was. There are so many options, too. Definitely scurry on by to check this place out.",
      author: "~ Scrat"
    },
    {
      text: "Best bagel I've ever had! I know it may look crazy because I get it double toasted, but I promise you this is the yummiest bagel I've ever had! And I eat bagels for breakfast almost every morning.",
      author: "~ Nibbles"
    },
    {
      text: "Sure, it's a quaint little cafe. I do think the portions of food are on the small side, though...",
      author: "~ Squeaky"
    }
  ];

  const reviews = [];
  reviewContent.forEach(revCont => {
    const review = {
      container: document.createElement('div'),
      text: document.createElement('p'),
      author: document.createElement('p')
    };
    review.text.innerText = revCont.text;
    review.author.innerText = revCont.author;
    reviews.push(review);
  });

  const reviewsContainer = document.createElement('div');
  const header = document.createElement('h2');
  header.innerText = "Reviews";
  reviewsContainer.appendChild(header);
  
  // assemble reviews and add to container
  reviews.forEach((rev, i) => {
    rev.container.appendChild(rev.text);
    rev.container.appendChild(rev.author);
    rev.container.classList.add('review');
    reviewsContainer.appendChild(rev.container);

    // add line
    if (i < reviews.length - 1) reviewsContainer.appendChild(document.createElement('hr'));
  });

  return reviewsContainer;
}

export { renderHome };