# Luz FrontEnd Project

## Overview
This is an ongoing project to build the front end for the Luz website. The project is implemented using React and Bootstrap. It features various components including navigation, sign-in, video playback with a comments section, and more.

## Project Structure

Luz-FrontEnd/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── AboutUs.jsx
│ │ ├── Blog.jsx
│ │ ├── Footer.jsx
│ │ ├── NavBar.jsx
│ │ └── Subscribe.jsx
│ ├── screens/
│ │ ├── SignIn.jsx
│ │ ├── LogIn.jsx
│ │ └── VideoPlayer.jsx
│ ├── styles/
│ │ └── styles.css
│ ├── App.jsx
│ └── index.jsx
├── .gitignore
├── package.json
└── README.md


## Components

### NavBar
The navigation bar component. Provides links to different parts of the application.

### Footer
The footer component. Displays the footer section of the website.

### AboutUs
The About Us component. Provides information about the organization.

### Blog
The Blog component. Displays blog posts and includes a video menu.

### Subscribe
The Subscribe component. Manages user subscriptions and payments.

### SignIn
The Sign-In screen component. Allows users to sign in and subscribe with a payment form.

### LogIn
The Login screen component. Allows existing users to log in.

### VideoPlayer
The VideoPlayer screen component. Plays a selected video, includes a comments section, and displays other available videos.

## Getting Started

### Prerequisites
- Node.js
- npm (Node package manager)

### Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/androide47/Luz-FrontEnd.git
    cd Luz-FrontEnd
    ```
2. Install the dependencies:
    ```sh
    npm install
    ```

### Running the Project
Start the development server:
```sh
npm run dev

