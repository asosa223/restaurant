"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["contact"],{

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });
function contact() {
    //create contact content container
    const contactContent = document.createElement('div');
    contactContent.classList.add('contactContent');

    //create contact header text
    const contactText = document.createElement('h1');
    contactText.textContent = "Contact Us";
    contactContent.appendChild(contactText);

    //create info text
    const contactInfo = document.createElement('h3');
    contactInfo.textContent = "Call us at 555-5555 or Email:";
    contactContent.appendChild(contactInfo);

    function createLabel(labelFor, labelText) {
        // Create label
        const label = document.createElement("label");
        label.setAttribute("for", labelFor);
        label.textContent = `${labelText}: `;
        form.appendChild(label);

        return label;
    }

    // Create a form dynamically
    const form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "#");
    contactContent.appendChild(form);

    // Create an name field
    const FN = document.createElement("input");
    FN.setAttribute("type", "text");
    FN.setAttribute("name", "FullName");
    createLabel("FullName", "Name").appendChild(FN);

    // Create phone field
    const phone = document.createElement("input");
    phone.setAttribute("type", "tel");
    phone.setAttribute("name", "phone");
    createLabel("phone", "Phone").appendChild(phone);

     // Create email field
     const email = document.createElement("input");
     email.setAttribute("type", "email");
     email.setAttribute("name", "email");
     createLabel("email", "Email").appendChild(email);

     // Create comment field
     const comment = document.createElement("textarea");
     comment.setAttribute("id", "form-comment");
     comment.setAttribute("name", "comment");
     comment.setAttribute("rows", "4");
     comment.setAttribute("cols", "50");
     createLabel("comment", "Comment").appendChild(comment);

     

    return contactContent;
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/contact.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFVBQVU7QUFDekM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY29udGFjdCgpIHtcbiAgICAvL2NyZWF0ZSBjb250YWN0IGNvbnRlbnQgY29udGFpbmVyXG4gICAgY29uc3QgY29udGFjdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0Q29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250YWN0Q29udGVudCcpO1xuXG4gICAgLy9jcmVhdGUgY29udGFjdCBoZWFkZXIgdGV4dFxuICAgIGNvbnN0IGNvbnRhY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb250YWN0VGV4dC50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVc1wiO1xuICAgIGNvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RUZXh0KTtcblxuICAgIC8vY3JlYXRlIGluZm8gdGV4dFxuICAgIGNvbnN0IGNvbnRhY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb250YWN0SW5mby50ZXh0Q29udGVudCA9IFwiQ2FsbCB1cyBhdCA1NTUtNTU1NSBvciBFbWFpbDpcIjtcbiAgICBjb250YWN0Q29udGVudC5hcHBlbmRDaGlsZChjb250YWN0SW5mbyk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVMYWJlbChsYWJlbEZvciwgbGFiZWxUZXh0KSB7XG4gICAgICAgIC8vIENyZWF0ZSBsYWJlbFxuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGxhYmVsRm9yKTtcbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBgJHtsYWJlbFRleHR9OiBgO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGEgZm9ybSBkeW5hbWljYWxseVxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcInBvc3RcIik7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiwgXCIjXCIpO1xuICAgIGNvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgLy8gQ3JlYXRlIGFuIG5hbWUgZmllbGRcbiAgICBjb25zdCBGTiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBGTi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBGTi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiRnVsbE5hbWVcIik7XG4gICAgY3JlYXRlTGFiZWwoXCJGdWxsTmFtZVwiLCBcIk5hbWVcIikuYXBwZW5kQ2hpbGQoRk4pO1xuXG4gICAgLy8gQ3JlYXRlIHBob25lIGZpZWxkXG4gICAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcGhvbmUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRlbFwiKTtcbiAgICBwaG9uZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicGhvbmVcIik7XG4gICAgY3JlYXRlTGFiZWwoXCJwaG9uZVwiLCBcIlBob25lXCIpLmFwcGVuZENoaWxkKHBob25lKTtcblxuICAgICAvLyBDcmVhdGUgZW1haWwgZmllbGRcbiAgICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgIGVtYWlsLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJlbWFpbFwiKTtcbiAgICAgZW1haWwuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImVtYWlsXCIpO1xuICAgICBjcmVhdGVMYWJlbChcImVtYWlsXCIsIFwiRW1haWxcIikuYXBwZW5kQ2hpbGQoZW1haWwpO1xuXG4gICAgIC8vIENyZWF0ZSBjb21tZW50IGZpZWxkXG4gICAgIGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgIGNvbW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3JtLWNvbW1lbnRcIik7XG4gICAgIGNvbW1lbnQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImNvbW1lbnRcIik7XG4gICAgIGNvbW1lbnQuc2V0QXR0cmlidXRlKFwicm93c1wiLCBcIjRcIik7XG4gICAgIGNvbW1lbnQuc2V0QXR0cmlidXRlKFwiY29sc1wiLCBcIjUwXCIpO1xuICAgICBjcmVhdGVMYWJlbChcImNvbW1lbnRcIiwgXCJDb21tZW50XCIpLmFwcGVuZENoaWxkKGNvbW1lbnQpO1xuXG4gICAgIFxuXG4gICAgcmV0dXJuIGNvbnRhY3RDb250ZW50O1xufVxuXG5leHBvcnQgeyBjb250YWN0IH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9