import { createHeader, createDescription } from './helpers';
import MacNCheese from './assets/mac-n-cheese.jpg';
import Cookies from './assets/cookies.jpg';
import MonkeyBread from './assets/monkey-bread.jpg';
import Brownie from './assets/brownie.jpg';
import MushroomSoup from './assets/mushroom-soup.jpg';

// render menu tab
function renderMenu() {
  const header = document.createElement('header');
  const main = document.createElement('main');

  header.appendChild(createHeader("Menu"));
  main.appendChild(createDescription("All of the dishes in our menu are incredibly delicious and hand-crafted from only nature's finest ingredients."));
  main.appendChild(createMenu());

  // return header and main for loadPage to add to page
  return [ header, main ];
}

// create menu content
function createMenu() {
  const menuContent = [
    {
      title: "Munchie's Mac and Cheese",
      cost: "$7.00",
      description: "Munchie's signature mac and cheese, based on a recipe passed down by the McSquirrel family for generations.",
      photo: MacNCheese
    },
    {
      title: "Macadamia Nut Monstrosity",
      cost: "$2.50",
      description: "A cookie baked with mouth-watering macadamia nuts.",
      photo: Cookies
    },
    {
      title: "Squirrel Monkey Bread",
      cost: "$8.00",
      description: "Your favorite pull-apart sweet bread, created by none other than Munchie's second cousin once removed, Squirrel Monkey.",
      photo: MonkeyBread
    },
    {
      title: "Mint Brownie",
      cost: "$3.00",
      description: "A Brownie baked with mint hand-picked from the garden.",
      photo: Brownie
    },
    {
      title: "Mushroom Soup",
      cost: "$6.00",
      description: "Thick, flavorful soup made with mushrooms harvested from the forest floor.",
      photo: MushroomSoup
    },
  ];

  // create a menu object for each obj in menuContent
  const meals = [];
  menuContent.forEach(menuCont => {
    const meal = {
      container: document.createElement('div'),
      textContainer: document.createElement('div'),
      title: document.createElement('h3'),
      cost: document.createElement('span'),
      description: document.createElement('p'),
      photo: document.createElement('img')
    };
    meal.title.innerText = menuCont.title;
    meal.cost.innerText = menuCont.cost;
    meal.description.innerText = menuCont.description;
    meal.photo.src = menuCont.photo;
    meal.photo.alt = menuCont.title;
    meals.push(meal);
  });

  // create menu container, add header
  const menuContainer = document.createElement('div');
  const header = document.createElement('h2');
  header.innerText = "Menu";
  menuContainer.appendChild(header);

  // assemble menu items and add to container
  meals.forEach((meal, i) => {
    meal.textContainer.appendChild(meal.title);
    meal.textContainer.appendChild(meal.cost);
    meal.textContainer.appendChild(meal.description);

    meal.container.appendChild(meal.photo);
    meal.container.appendChild(meal.textContainer);
    meal.container.classList.add('meal');
    menuContainer.appendChild(meal.container);

    // add line separation
    if (i < meals.length - 1) menuContainer.appendChild(document.createElement('hr'));
  });

  return menuContainer;
}

export { renderMenu };