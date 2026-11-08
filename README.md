# Warhammer 40,000 | Beginner's Guide (Endterm Project)

## Project Description
This repository contains the Endterm Project for the Web Frontend course, extending the Midterm multi-page responsive website dedicated to the Warhammer 40,000 universe. The project preserves the semantic HTML5, custom CSS, Flexbox, CSS Grid, and Bootstrap 5 foundation while integrating interactive JavaScript, DOM manipulation, custom form validation, and jQuery effects.

## Group Members
* **Student Name:** Bekeshev Askhat

## New Endterm Interactive Features
1. **Global Theme Switcher (All Pages):** Allows users to toggle between the default Grimdark Mode and Light Mode, saving the preference in `localStorage`.
2. **Interactive Lore Tabs (`index.html`):** Dynamically updates faction descriptions, key units, and status badges without reloading the page.
3. **jQuery Lightbox & Collapsible Tactical Intel (`tabletop.html`):** Uses jQuery selectors, DOM traversal (`closest()`, `find()`, `siblings()`), and effects (`slideToggle()`, `slideUp()`, `fadeIn()`, `fadeOut()`, `animate()`) to preview faction artwork and reveal army stats.
4. **Personal Reading List / Favorites (`lore.html`):** Allows users to bookmark novels directly from the reading order table or add custom titles, mark books as read, and remove items dynamically from the DOM.
5. **Dynamic Games Rendering, Live Search & Genre Filter (`games.html`):** Renders video game cards from an array of objects using JavaScript loops and filters them in real time via `input` and `change` events.
6. **Custom JavaScript Form Validation (`contact.html`):** Validates required fields, minimum text length, email format via Regular Expression, numeric age range (14–120), and dropdown selection using `event.preventDefault()`, displaying field-specific error messages and a personalized confirmation banner.

## Instructions for Testing Interactive Functions
1. **Theme Switcher:** Click the **Light Mode / Dark Mode** button in the top navigation bar on any page.
2. **Interactive Tabs:** On `index.html`, scroll down to "Pillars of the 41st Millennium" and click the faction buttons to switch content.
3. **jQuery Effects & Traversal:** On `tabletop.html`, click **Show Tactical Intel** beneath any faction to slide down its tabletop details (automatically sliding up sibling panels). Click on any faction image to trigger the animated Lightbox modal.
4. **Reading List (DOM Add/Remove):** On `lore.html`, click **+ Add to List** in the table or type a novel name in the input box and click **Add Novel**. Use **Read** to cross out completed books or **Remove** to delete them.
5. **Search & Filtering:** On `games.html`, type keywords into the search bar or choose a category from the genre dropdown to filter the dynamically generated game cards.
6. **Form Validation:** On `contact.html`, click **SEND TRANSMISSION** with empty or invalid fields to test field-specific error messages, then fill in valid details to view the confirmation message.

## Live Demo
Published Website Link: https://solomondemeter07.github.io/WEB_Endterm/