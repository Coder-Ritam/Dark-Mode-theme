# Dark-Mode-theme
A vanilla JavaScript solution for toggling between light and dark themes using the classList API and event listeners.

Theme Toggle

A simple and lightweight JavaScript implementation that allows users to switch between light and dark modes on a webpage. This script manipulates the DOM to swap CSS classes on the body element and updates the toggle button text dynamically.
Features

    Theme Switching: Toggles the document body class between light-mode and dark-mode.

    Dynamic UI: Updates the button text label to reflect the current state (e.g., "Switch to Dark Mode").

    Keyboard Accessibility: Includes an event listener for the Enter key to allow toggling via keyboard navigation.

    Vanilla JavaScript: Zero dependencies; built using standard DOM manipulation methods.

How It Works

The script selects the toggle button and the document body. It initializes the page in light-mode. When the button is clicked, it checks the current class:

    If light-mode is active, it replaces it with dark-mode and updates the button text.

    If dark-mode is active, it reverts to light-mode.
