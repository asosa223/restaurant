import "./style.css";
import { menu } from "./menu";

//Create content selector
const content = document.createElement('div');
content.classList.add('content');

//Creates our Nav bar
function navbar() {
  const nav = document.createElement('nav');

  //Create nav items object
  let restaurantNav = {
    home: {
      text: "Home",
      link: "#"
    },
    menu: {
      text: "Menu",
      link: "test 1"
    },
    contact: {
      text: "Contact",
      link: "test 2"
    }
  };

  //loop through restaurant nav items and append its text/link value
  Object.values(restaurantNav).forEach(value => {
    const a = document.createElement("a");
    a.className = "nav-item";
    a.setAttribute("href", value.link);
    a.innerHTML = value.text;
    nav.appendChild(a);
  });

  return document.body.appendChild(nav);
}

function home() {
  //Create home content
  const homeContent = document.createElement('div'); 
  homeContent.setAttribute("id", "homeContent"); 

  const h1 = document.createElement('h1');
  const h2 = document.createElement('h2');
  h1.textContent = "Alec's Pizza Spot";
  h2.textContent = `"It's the best!" - Customer probably`;

  //appends test to home div
  homeContent.appendChild(h1);
  homeContent.appendChild(h2);

  //call content div and append our home content
  return content.appendChild(homeContent);
}

//Will load our modules based on user interaction with the nav
function load() {
  navbar(); //append nav to body first
  document.body.appendChild(content); //Content next
  home(); //whatever module needed when menu item clicked
}

//call load function
load();
