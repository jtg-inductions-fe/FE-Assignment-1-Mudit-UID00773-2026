const menuIconContainer = document.querySelector(
    '.navbar__menu-icon-container',
);
const menuDropDownContainer = document.querySelector('.navbar__menu-dropdown');
let isMenuActive = false;

const handleMenuClick = (event) => {
    event.stopPropagation();
    if (!isMenuActive) {
        isMenuActive = true;
        menuIconContainer.classList.add('navbar__menu-icon-container--clicked');
        menuDropDownContainer.style.display = 'block';
    } else {
        isMenuActive = false;
        menuIconContainer.classList.remove(
            'navbar__menu-icon-container--clicked',
        );
        menuDropDownContainer.style.display = 'none';
    }
};

menuIconContainer.addEventListener('click', handleMenuClick);

const linkDropdown = document.querySelector('.navbar__link-dropdown');
const linkItem = document.querySelector('.navbar__link-item');

let isLinkOpen = false;
const handleLinkClick = (event) => {
    event.stopPropagation();

    if (!isLinkOpen) {
        linkDropdown.style.display = 'block';
    } else {
        linkDropdown.style.display = 'none';
    }

    isLinkOpen = !isLinkOpen;
};

linkItem.addEventListener('click', handleLinkClick);
