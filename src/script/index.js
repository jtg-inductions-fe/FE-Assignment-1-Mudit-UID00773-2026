import { initCarousels } from './carousel.js';

const menuIconContainer = document.querySelector('.js-menu-toggle');
const menuDropDownContainer = document.querySelector('.js-menu-dropdown');
const linkDropdown = document.querySelector('.js-link-dropdown');
const linkItem = document.querySelector('.js-link-item');

let isLinkOpen = false;
let isMenuActive = false;

/**
 * Opens or closes the drop-down menu when the menu button is clicked.
 * It also stops the click from triggering other actions elsewhere on the page.
 */
const handleMenuClick = (event) => {
    event.stopPropagation();
    if (!isMenuActive) {
        isMenuActive = true;
        menuIconContainer.classList.add('navbar__menu-icon-container--clicked');
        menuDropDownContainer.classList.remove('u-hidden');
    } else {
        isMenuActive = false;
        menuIconContainer.classList.remove(
            'navbar__menu-icon-container--clicked',
        );
        menuDropDownContainer.classList.add('u-hidden');
    }
};

/**
 * Opens or closes the links drop-down menu when the link is clicked.
 * It also stops the click from triggering other actions elsewhere on the page.
 */
const handleLinkClick = (event) => {
    event.stopPropagation();

    if (!isLinkOpen) {
        linkDropdown.classList.remove('u-hidden');
    } else {
        linkDropdown.classList.add('u-hidden');
    }

    isLinkOpen = !isLinkOpen;
};

document.addEventListener('DOMContentLoaded', () => {
    initCarousels();

    if (menuIconContainer) {
        menuIconContainer.addEventListener('click', handleMenuClick);
    }

    if (linkItem && linkDropdown) {
        linkItem.addEventListener('click', handleLinkClick);
    }
});
