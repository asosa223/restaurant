"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["menu"],{

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });

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





/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5mdW5jdGlvbiBtZW51KCkge1xuICAgIC8vY3JlYXRlIG1lbnUgY29udGVudCBjb250YWluZXJcbiAgICBjb25zdCBtZW51Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ21lbnVDb250ZW50Jyk7XG4gICAgXG4gICAgLy9jcmVhdGUgbWVudSBoZWFkZXIgdGV4dFxuICAgIGNvbnN0IG1lbnVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBtZW51VGV4dC50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKG1lbnVUZXh0KTtcblxuICAgIC8vY3JlYXRlIGZvb2QgaXRlbXNcbiAgICBjb25zdCBmb29kSXRlbXMgPSB7XG4gICAgICAgIGZvb2QwOiB7XG4gICAgICAgICAgICBuYW1lOiBcIkNoZWVzZSBQaXp6YVwiLFxuICAgICAgICAgICAgcHJpY2U6IFwiJDEyLjk5XCJcbiAgICAgICAgfSxcbiAgICAgICAgZm9vZDE6IHtcbiAgICAgICAgICAgIG5hbWU6IFwiUGVwcGVyb25pIFBpenphXCIsXG4gICAgICAgICAgICBwcmljZTogXCIkMTUuOTlcIlxuICAgICAgICB9LFxuICAgICAgICBmb29kMjoge1xuICAgICAgICAgICAgbmFtZTogXCJNZWF0IExvdmVycyBQaXp6YVwiLFxuICAgICAgICAgICAgcHJpY2U6IFwiJDE4Ljk5XCJcbiAgICAgICAgfSxcbiAgICAgICAgZm9vZDM6IHtcbiAgICAgICAgICAgIG5hbWU6IFwiVmVnZ2llIFBpenphXCIsXG4gICAgICAgICAgICBwcmljZTogXCIkMTguOTlcIlxuICAgICAgICB9LFxuICAgICAgICBmb29kNDoge1xuICAgICAgICAgICAgbmFtZTogXCJIYXdhaWlhbiBQaXp6YVwiLFxuICAgICAgICAgICAgcHJpY2U6IFwiJDE4Ljk5XCJcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgT2JqZWN0LnZhbHVlcyhmb29kSXRlbXMpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgLy9jcmVhdGUgbWVudSBpdGVtIGRpdlxuICAgICAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbScpO1xuXG4gICAgICAgIC8vY3JlYXRlIGZvb2QgaXRlbSB0ZXh0XG4gICAgICAgIGNvbnN0IGZvb2ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBjb25zdCBmb29kUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5cbiAgICAgICAgZm9vZE5hbWUuaW5uZXJIVE1MID0gaXRlbS5uYW1lO1xuICAgICAgICBmb29kUHJpY2UuaW5uZXJIVE1MID0gaXRlbS5wcmljZTtcblxuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChmb29kTmFtZSk7XG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGZvb2RQcmljZSk7XG4gICAgICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIG1lbnVDb250ZW50O1xufVxuXG5leHBvcnQgeyBtZW51IH07XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==