import { createHeader, createParagraph, createImg, assemble } from './helpers';
import Clock from './assets/clock.svg';
import MapMarker from './assets/map-marker.svg';
import Phone from './assets/phone.svg';
import Email from './assets/email.svg';

// render contact tab
function renderContact() {
  const header = document.createElement('header');
  const main = document.createElement('main');

  header.appendChild(createHeader("Contact", 1));
  main.appendChild(createParagraph("Come visit us during our regular hours - we'd love to see you here at Munchy's! And feel free to contact us via the phone number or email provided below."));
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
      line1: "Munchys@gmail.com"
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

  const icon = createImg(info.img.src, info.img.alt);

  // add hours text to container
  const textContainer = document.createElement('div');
  for (const key in info.text) {
    textContainer.appendChild(createParagraph(info.text[key]));
  }

  return assemble({icon, textContainer}, 'contact-info');
}

export { renderContact, createContactInfo };