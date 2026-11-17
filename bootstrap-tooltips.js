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
if (typeof bootstrap === "undefined" || typeof bootstrap.Tooltip !== "function") {
    throw new Error("Could not initialize Bootstrap tooltips.");
}

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((trigger) => {
    new bootstrap.Tooltip(trigger);
});
