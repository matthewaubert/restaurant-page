import { createHeader, createDescription } from './helpers';
import Clock from './assets/clock.svg';
import MapMarker from './assets/map-marker.svg';
import Phone from './assets/phone.svg';
import Email from './assets/email.svg';

// render contact tab
function renderContact() {
  const header = document.createElement('header');
  const main = document.createElement('main');

  header.appendChild(createHeader("Contact"));
  main.appendChild(createDescription("Come visit us during our regular hours - we'd love to see you here at Munchie's! And feel free to contact us via the phone number or email provided below."));
  main.appendChild(createContactInfo("hours"));
  main.appendChild(createContactInfo("location"));
  main.appendChild(createContactInfo("phone"));
  main.appendChild(createContactInfo("email"));

  // return header and main for loadPage to add to page
  return [ header, main ];
}

// create hours content
function createContactInfo(type) {
  const hours = {
    img: {
      src: Clock,
      alt: "clock icon"
    },
    text: {
      line1: 'Wed - Sun: 8am - 3pm',
      line2: 'Mon - Tue: Closed',
    }
  };
  const location = {
    img: {
      src: MapMarker,
      alt: "map marker icon"
    },
    text: {
      line1: '123 Hickory Rd',
      line2: 'Woodford, VT 05201',
    }
  };
  const phone = {
    img : {
      src: Phone,
      alt: "phone icon"
    },
    text: {
      line1: "(802) 440-3947"
    }
  }
  const email = {
    img : {
      src: Email,
      alt: "email icon"
    },
    text: {
      line1: "munchies@gmail.com"
    }
  }
  
  let info;
  switch(type) {
    case 'hours':
      info = hours;
      break;
    case 'location':
      info = location;
      break;
    case 'phone':
      info = phone;
      break;
    case 'email':
      info = email;
      break;
  }

  // create container, add header to container
  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contact-info');

  const icon = document.createElement('img');
  icon.src = info.img.src;
  icon.alt = info.img.alt;
  contactContainer.appendChild(icon);

  const textContainer = document.createElement('div');

  // add hours text to container
  for (const key in info.text) {
    const line = document.createElement('p');
    line.innerText = info.text[key];
    textContainer.appendChild(line);
  }

  contactContainer.appendChild(textContainer);

  return contactContainer;
}



export { renderContact };