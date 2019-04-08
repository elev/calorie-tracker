# Calorie count app
*because we dont like the bloat of of other ones*

## TODO

* TESTS
** Test all the integrations
** goals updating main state goals √
** Food updating the main state √
** Exercise updating the main state √

* Daily reset at midnight?
** install moment
** const end = moment().endOf('day');
** const timeout = end.diff(moment())
** setTimeout
** Record day, reset state....
** Recording a day feature is not built yet.
** This needs to be the next thing we do.

* check if other components aren't tests
* write tests for the popup toast jawn
* write tests header count
** update state see header count update
* write test for view macros


* Add popup for updating goals (maybe this is broken????)






* we need to refactor these components to make them smaller and cleaner.
* See if theres a better way to 2 way data bind, seems like the parent pass method thing is the way it works...
* Make screen and buttons look good. Gradients -- https://cssgradient.io/
* Build save food and save exercise
* Reiterate and see if anything else needs to be completed
* use prop types or flow or typescript, research as to the best ones
* Set up CI
* Get this badboy live, even if it's just a free heroku
* Phase 2// weekly or monthly goals?
* Maybe TDEE Calculator? https://www.surroundedbymath.com/interactive-math/tdee/




# Base Create React App Notes
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
