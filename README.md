# redux-book-search

This is the code for the book search application discussed in the [Manage state with Redux](http://www.ibm.com/developerworks/library/wa-manage-state-with-redux-p1-david-geary/index.html) article series from IBM Developerworks, published in the late summer of 2016.

This repository contains two implementations of the book search application. One uses React and the other uses Angular. Because both Angular and React are component-based frameworks, the Angular version of the book search application is nearly identical to the React version, except for the implementation of the application's components. The Redux-specific parts of the code are identical.

To run the application, first install `Node.js` and `npm`. Then go to either the `react` or `angular` directory and run `npm install`, which may take a few minutes, followed by `npm start`. The application is available at `http://localhost:9090`. If you open the developer tools, you will see lots of `eslint` warnings. See `.eslintrc` for details.
