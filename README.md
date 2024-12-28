Portfolio Website

This is the source code for a portfolio website built with React. The website showcases projects, skills, and contact information. It also includes features like theme toggling and responsive design.

Features

Dynamic Theme Switching: Toggle between light and dark modes.

Responsive Design: Optimized for all screen sizes.

Reusable Components: Modular and maintainable code structure.

Contact Form: Functional form for user inquiries.

Project Showcase: Displays a list of projects with descriptions and links.

Table of Contents

Installation

Usage

Folder Structure

Components Overview

Technologies Used

Contributing

License

Installation

Clone the repository:

git clone https://github.com/atulshivaan/portfolio-website.git

Navigate to the project directory:

cd portfolio-website

Install dependencies:

npm install

Start the development server:

npm start

The website will be available at http://localhost:3000.

Usage

Open the application in your browser.

Navigate through sections: Hero, Projects, Skills, Contact, and Footer.

Toggle between light and dark themes using the theme icon.

Use the contact form to send messages.

Folder Structure

portfolio-website/
├── src/
│   ├── assets/             # Images, icons, and other assets
│   ├── common/             # Shared components and utilities
│   ├── components/         # Feature-specific components
│   ├── styles/             # CSS modules for styling
│   ├── App.js              # Main application entry point
│   ├── index.js            # React DOM renderer
│   └── ThemeContext.jsx    # Context for theme management
└── package.json            # Project configuration and dependencies

Components Overview

1. Hero

Displays a hero image, introduction, and links to social profiles.

Includes the theme toggle button.

2. Projects

Lists projects with titles, descriptions, and links to GitHub repositories.

3. SkillList

Displays a list of skills with icons.

4. Contact

Contains a form to collect user inquiries.

5. Footer

Displays copyright information.

Technologies Used

React: Frontend framework for building user interfaces.

CSS Modules: For scoped and reusable styles.

LocalStorage: To persist theme settings.



License

This project is licensed under the MIT License. See the LICENSE file for details.

