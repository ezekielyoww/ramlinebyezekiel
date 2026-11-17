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
const filterButtons = Array.from(document.querySelectorAll(".stall-filter"));
const stallCards = Array.from(document.querySelectorAll(".stall-cards > .card"));
const supportedFilters = new Set(["all", "rice-meals", "snacks"]);

if (filterButtons.length === 0 || stallCards.length === 0) {
    throw new Error("Could not initialize the stall filters.");
}

for (const button of filterButtons) {
    if (!supportedFilters.has(button.dataset.filter)) {
        throw new Error("A stall filter is missing a supported category.");
    }
}

for (const card of stallCards) {
    if (!supportedFilters.has(card.dataset.category) || card.dataset.category === "all") {
        throw new Error("A stall card is missing a supported category.");
    }
}

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedFilter = button.dataset.filter;

        stallCards.forEach((card) => {
            card.hidden = selectedFilter !== "all" && card.dataset.category !== selectedFilter;
        });

        filterButtons.forEach((filterButton) => {
            const isSelected = filterButton === button;
            filterButton.classList.toggle("is-active", isSelected);
            filterButton.setAttribute("aria-pressed", String(isSelected));
        });
    });
});
