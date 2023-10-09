# Restaurant Page

This project was built as part of The Odin Project: JavaScript course in order to practice what I've learned about JavaScript modules, npm, and webpack.

## Understand the Problem

Write a program that dynamically renders a simple restaurant homepage. I must use JavaScript alone to generate the entire contents of the website.

I will need to split my JavaScript into separate files/modules - one per page, plus any extra "helper" modules as necessary. I will then need to package the JavaScript files, assets, and CSS into one bundle using webpack.

## Plan

1. Project startup:
   - Initialize my project to create a package.json file
   - Install webpack
   - Set up my directories according to convention

2. Set up an HTML skeleton in the dist directory with a single <div id="content">

3. Set up an index.js file

4. Set up a module for each page – home, menu, contact - and link to index.js

5. Reference the webpack docs in order to:
   - Bundle my JS files
   - Bundle my images/assets
   - Bundle my CSS

6. Refactor modules and set up any helper files as necessary in order to DRY-up code

7. Enable tabbed browsing

### Image Credits

Background:
Image by <a href="https://pixabay.com/users/kollsd-14736411/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5643327">Dung Tran</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5643327">Pixabay</a>

Cabin:
Image by <a href="https://pixabay.com/users/applespc-19095802/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7486209">ApplesPC</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7486209">Pixabay</a>

Mac and Cheese:
Image by <a href="https://www.pexels.com/photo/photo-of-mac-and-cheese-on-a-plate-15483262/">Suki Lee</a>

Cookies:
Image by <a href="https://pixabay.com/users/pezibear-526143/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1387826">Petra</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1387826">Pixabay</a>

Monkey Bread:
Image by Ralph Smith

Brownie:
Image by <a href="https://www.pexels.com/photo/chocolate-brownie-on-white-ceramic-plate-5386668/">Karolina Grabowska</a>

Mushroom Soup:
Image by <a href="https://unsplash.com/@picoftasty?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Mae Mu</a> on <a href="https://unsplash.com/photos/vjVHYlk91Vk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

Munchy:
Image by <a href="https://pixabay.com/users/blinkofaneye-29321998/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8225730">Blinkofaneye</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8225730">Pixabay</a>