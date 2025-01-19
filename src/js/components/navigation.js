export function initMobileNav() {
	const navContainer = document.querySelector('[data-mobile-nav]');

	if (!navContainer) {
		console.warn('Mobile navigation container not found');
		return;
	}

	navContainer.addEventListener('click', (event) => {
		const button = event.target.closest('[data-mobile-button]');

		if (button) {
			const buttonName = button.getAttribute('data-mobile-button');

			// Call the appropriate function based on button name
			if (buttonHandlers[buttonName]) {
				buttonHandlers[buttonName]();
			} else {
				console.warn(`No handler found for button: ${buttonName}`);
			}
		}
	});
}

// Define separate functions for each button
function handleFiltersClick() {
	console.log('Filters button clicked');
	const filtersContainer = document.querySelector('[data-filters]');
	if (!filtersContainer) return;

	filtersContainer.classList.toggle('active');
	// Add your logic here
}

function handleMenuClick() {
	console.log('Menu button clicked');
	// Add your logic here
}

function handleSettingsClick() {
	console.log('Settings button clicked');
	// Add your logic here
}

function handleInfoClick() {
	console.log('Info button clicked');
	// Add your logic here
}

// Mapping of button names to their respective functions
const buttonHandlers = {
	filters: handleFiltersClick,
	menu: handleMenuClick,
	settings: handleSettingsClick,
	into: handleInfoClick, // Assuming 'into' is intentional, not 'info'
};
