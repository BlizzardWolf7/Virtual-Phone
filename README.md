# Virtual Phone Demo

A lightweight prototype that mimics a modern smartphone home screen. The demo showcases animated page transitions, a collapsible status tray, a news carousel, and a working mock Messages experience.
Still a work in progress. 

## Quick Start

1. Clone or download the repository.
2. Open `Phone.html` in any modern desktop browser.
3. Explore the home, news, and apps pages with the navigation dots or touch gestures. Launch the Messages app from the app grid to test the conversation flow.

## Features

- **Status tray** with tappable quick toggles for Wi-Fi, Bluetooth, airplane mode, and more.
- **Three-page layout** for news headlines, the main home screen, and an app grid.
- **Live weather** card with geolocation, Open-Meteo data, and real-time conditions.
- **News hub** with a live search bar, responsive story cards, and expandable article reader.
- **Mock Messages app** with conversation lists, threaded replies, and auto-generated responses.
- **Live time and day updates** mirrored across the UI.

## Project Structure

- `Phone.html` – markup for the virtual phone and app windows.
- `styles.css` – standalone styling for the phone chassis, pages, and apps.
- `script.js` – interactive behavior for navigation, toggles, news, and the Messages mock.
- `wave-pattern.png` (optional) – background texture used for the phone shell.

## Customization Ideas

- Swap out the app list or add new overlays for other mock apps.
- Connect the news panel to a live feed or static JSON file.
- Extend the Messages logic with persistence or richer conversation data.
