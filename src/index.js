import "./style.css";
import { menu } from "./menu";
import { contact } from "./contact";

let clicked = false;
//Create content selector
const content = document.createElement('div');
content.classList.add('content');

//Creates our Nav bar
function navbar() {
  const nav = document.createElement('nav');

  //Create nav items object
  const restaurantNav = {
    home: {
      text: "Home",
      id: "home"
    },
    menu: {
      text: "Menu",
      id: "menu"
    },
    contact: {
      text: "Contact",
      id: "contact"
    }
  };

  //loop through restaurant nav items and append its text/link value
  Object.values(restaurantNav).forEach(value => {
    const a = document.createElement("a");
    a.className = "nav-item";
    a.setAttribute("id", value.id);
    a.innerHTML = value.text;
    nav.appendChild(a);
  });

  return document.body.appendChild(nav);
}

function home() {
  //Create home content
  const homeContent = document.createElement('div'); 
  homeContent.classList.add('homeContent'); 

  const h1 = document.createElement('h1');
  const h2 = document.createElement('h2');
  h1.textContent = "Alec's Pizza Spot";
  h2.textContent = `"It's the best!" - Customer probably`;

  //appends text to home content div
  homeContent.appendChild(h1);
  homeContent.appendChild(h2);

  //return our home content div
  return homeContent;
}


//Will load our modules based on user interaction with the nav
function load() {
  navbar(); //append nav to body first
  document.body.appendChild(content); //Content next
  content.appendChild(home()); //whatever module needed when menu item clicked
  document.querySelectorAll('.nav-item').forEach(item => { // Select all of our nav items
    let id = item.getAttribute('id');   
    item.addEventListener('click', () => {  //for each item, add a click event listener
      switch(id){ // Will append content of clicked nav item 
        case 'home':
          content.appendChild(home());
          content.removeChild(content.firstChild);
          break;
        case 'menu': 
          content.appendChild(menu());
          content.removeChild(content.firstChild);
          break;
        case 'contact':
          content.appendChild(contact());
          content.removeChild(content.firstChild);
          break;
        default:
          console.log('error');
      }
    })
  })
}

//call load function
load();
