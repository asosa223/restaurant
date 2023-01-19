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

export { contact };