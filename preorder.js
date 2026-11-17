/*
Francisco Ezekiel Ello
Bootstrap components that I used:
- Navbar for the floor navigation buttons and the placement of the logo on the left.
- Cards for stall listings and menu items.
- Buttons for the view menu, closed and other controls.
- Badges for the stall statuses, wait times, and sold out labels.
- Alert for the order confirmation banner.
- Form controls for the kitchen notes label and text area in the cart.
- Close button for close controls on menus and the order tracker.
- Tooltips for the message above each closed button.
*/
const placeOrderButton = document.querySelector(".place-order-button");
const orderConfirmation = document.querySelector("#preorder-confirmation");
const navbar = document.querySelector(".navbar");
const cartContents = document.querySelectorAll(
    ".cart-item-card, .cart-summary-card, .payment-card, .kitchen-notes-card"
);
const emptyCartMessage = document.querySelector(".cart-empty-state");
const restoreCartButton = document.querySelector(".restore-cart-button");
const trackOrderButton = document.querySelector(".track-order-button");

if (
    !(placeOrderButton instanceof HTMLButtonElement) ||
    !(orderConfirmation instanceof HTMLElement) ||
    !(navbar instanceof HTMLElement) ||
    cartContents.length !== 4 ||
    !(emptyCartMessage instanceof HTMLElement) ||
    !(restoreCartButton instanceof HTMLButtonElement) ||
    !(trackOrderButton instanceof HTMLButtonElement)
) {
    throw new Error("Could not initialize the pre-order interface.");
}

let hideTimeout = 0;

placeOrderButton.addEventListener("click", () => {
    cartContents.forEach((content) => {
        content.hidden = true;
    });
    placeOrderButton.hidden = true;
    emptyCartMessage.hidden = false;
    restoreCartButton.hidden = false;
    trackOrderButton.hidden = false;

    window.clearTimeout(hideTimeout);
    orderConfirmation.style.top = `${navbar.getBoundingClientRect().height}px`;
    hideTimeout = window.setTimeout(() => {
        if (orderConfirmation.matches(":popover-open")) {
            orderConfirmation.hidePopover();
        }
    }, 2000);
});

restoreCartButton.addEventListener("click", () => {
    cartContents.forEach((content) => {
        content.hidden = false;
    });
    placeOrderButton.hidden = false;
    emptyCartMessage.hidden = true;
    restoreCartButton.hidden = true;
    trackOrderButton.hidden = true;
});
