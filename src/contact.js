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
        return label;
    }

    // Create a form dynamically
    const form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "#");
    contactContent.appendChild(form);

    // Create an input element for Full Name
    const FN = document.createElement("input");
    FN.setAttribute("type", "text");
    FN.setAttribute("name", "FullName");
    form.appendChild(createLabel("FullName", "Name"));
    form.appendChild(FN);

    return contactContent;
}

export { contact };