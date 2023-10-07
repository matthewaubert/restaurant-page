import { createHeader, createParagraph, assemble } from './helpers';

// render home tab
function renderHome() {
  const header = document.createElement('header');
  const main = document.createElement('main');

  header.appendChild(createHeader("Munchie's Eats", 1));
  main.appendChild(createParagraph("Munchie's Eats is a quaint little cafe tucked away in the trunk of the Great Oak in the Enchanted Forest, just off Rt 9."));
  // main.appendChild(createAbout());
  main.appendChild(createReviews());

  // return header and main for loadPage to add to page
  return [header, main];
}

//create about content
// function createAbout() {
  
// }

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

  // create a 'review' object for each obj in reviewContent; containing container, text, and author elements
  const reviews = [];
  reviewContent.forEach(revCont => {
    const review = {
      text: createParagraph(revCont.text),
      author: createParagraph(revCont.author)
    };
    reviews.push(review);
  });

  // create reviews container, add header
  const reviewsContainer = document.createElement('div');
  reviewsContainer.appendChild(createHeader("Reviews", 2));
  
  // assemble reviews and add to container
  reviews.forEach((rev, i) => {
    const container = assemble(rev, 'review');
    reviewsContainer.appendChild(container);

    // add line separation
    if (i < reviews.length - 1) reviewsContainer.appendChild(document.createElement('hr'));
  });

  return reviewsContainer;
}

export { renderHome };