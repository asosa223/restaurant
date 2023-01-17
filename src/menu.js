
function menu() {
    const menuContent = document.createElement('div');
    menuContent.classList.add('menuContent');
    
    const menuText = document.createElement('h1');
    menuText.textContent = "Menu";
    menuContent.appendChild(menuText);

    return menuContent;
}

export { menu };

