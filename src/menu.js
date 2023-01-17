
function menu() {
    //create menu content container
    const menuContent = document.createElement('div');
    menuContent.classList.add('menuContent');
    
    //create menu header text
    const menuText = document.createElement('h1');
    menuText.textContent = "Menu";
    menuContent.appendChild(menuText);

    //create food items
    const foodItems = {
        food0: {
            name: "Cheese Pizza",
            price: "$12.99"
        },
        food1: {
            name: "Pepperoni Pizza",
            price: "$15.99"
        },
        food2: {
            name: "Meat Lovers Pizza",
            price: "$18.99"
        },
        food3: {
            name: "Veggie Pizza",
            price: "$18.99"
        },
        food4: {
            name: "Hawaiian Pizza",
            price: "$18.99"
        }
      };

      Object.values(foodItems).forEach((item) => {
        //create menu item div
        const menuItem = document.createElement('div');
        menuItem.classList.add('menuItem');

        //create food item text
        const foodName = document.createElement("h3");
        const foodPrice = document.createElement("h3");

        foodName.innerHTML = item.name;
        foodPrice.innerHTML = item.price;

        menuItem.appendChild(foodName);
        menuItem.appendChild(foodPrice);
        menuContent.appendChild(menuItem);
      });

    return menuContent;
}

export { menu };

