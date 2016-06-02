## What it is

A simple starter for using Firebase 3 authentication in React with React Router.

## What it is not

This is **not** a complete project. **No build tools or setup is included at all**. Choose your own build setup and use whichever combination of webpack/browserify/gulp etc that you want.

## Why?

At the time of creation, ther are no decent easy to use starters/templates/boilerplates/tutorials on how to use React and the new Firebase version 3.x. This showcases how you easily can structure an app with authentication + routing.

## Installation

You need to set up your own build to run this. This project is **only** a code example of the React components and structure.

* Make sure to update /src/config/firebaseConfig.js with the appropriate credentials from your Firebase project.
* Make sure to update index.html with the correct path to your final production JS bundle.

## What it does

It logs a user in using the Firebase authentication, and sets an AUTH state on the main App component which listens to updates in the authentication status. This state controls which router is used, one is public and one is private.

## Contributors

[Florian Didron](https://github.com/fdidron)