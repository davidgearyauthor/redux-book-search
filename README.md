# redux-book-search

This is the code for the book search application discussed in the [Manage state with Redux](http://www.ibm.com/developerworks/library/wa-manage-state-with-redux-p1-david-geary/index.html) article series from IBM Developerworks, published in the late summer of 2016.

To run the application, first install `Node.js` and `npm`. Then run `npm install`, which may take a few minutes, followed by `npm start`. The application is available at `http://localhost:9090`. If you open the developer tools, you will see lots of `eslint` warnings. See `.eslintrc` for details.

Note: There's a bug in React 1.5.2 and 1.5.3 that initializes range inputs to the wrong value. As a result of that bug, the book search application's history slider may have the wrong initial value. See https://github.com/facebook/react/issues/7170 for more information about the bug.
