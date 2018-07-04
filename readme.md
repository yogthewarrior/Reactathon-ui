# React-Redux-BoilerPlate

### Tools required
  - Node**
  - Node Package Manager(NPM)
  - Git
  - Git Bash(if on windows)

We use [NVM](https://github.com/creationix/nvm) to install node and npm and be able to switch between different versions. We use git bash on windows because the stock windows command prompt doesn't let us set environmental variables in a linux fashion.

** We use Node 5.0.0 to develop to take advantage of some testing tools that only work on later node versions. The production app is run with node version 0.11.14. We switch to version 0.11.14 and do a quick manual test before giving the all clear for a new build to be deployed.

### Getting Started
  - Clone the repo
  - `cd` into the clone repo directory
  - install 3rd party dependencies, `npm install`

#### Running the application
The application requires a backend to pull data from. We have a mock api included with this repo at mock-server.js. Use `node mock-server.js` in a new git bash window to start the mock server. This will start the server at http://localhost:5006.

After the mock server is running, use the following command to start the frontend application at http://localhost:8080.
```
    NODE_ENV=development node_modules/.bin/webpack-dev-server --inline --content-base dist --history-api-fallback
```
At this point you should have 2 git bash windows open running 2 different commands. You should now be able to open a browser and see the application running at http://localhost:8080. The frontend will now detect file changes and rebuild/serve the application everytime a change is made.

### Testing
We use [mocha](https://mochajs.org/) and [chai](http://chaijs.com/) to test the application. All tests are located in the `/test` directory. To run all the tests once use the following command.

`node_modules/.bin/mocha --compilers js:babel-core/register,css:./test/css-null-compiler.js --require ./test/test_helper.js 'test/**/*_spec.@(js|jsx)'`

To have the tests continually run every time a file changes, use the following command in a new git bash window.

`node_modules/.bin/mocha --compilers js:babel-core/register,css:./test/css-null-compiler.js --require ./test/test_helper.js 'test/**/*_spec.@(js|jsx)' --watch`

####Redux Dev Tools
Can be downloaded from the [Chrome Web Store] (https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en). It can be extremely useful when debugging.
#####Features
- Lets you inspect every state and action payload
- Lets you go back in time by “cancelling” actions
- If you change the reducer code, each “staged” action will be re-evaluated
- If the reducers throw, you will see during which action this happened, and what the error was
- With persistState() store enhancer, you can persist debug sessions across page reloads

### 3rd party dependencies
The frontend application is built on 3 core 3rd party dependencies.

  - [React](https://facebook.github.io/react/) to manage markup
  - [Redux](http://redux.js.org/) to manage data
  - [Webpack](https://webpack.github.io/) for building

The application also uses [ImmutableJS](https://facebook.github.io/immutable-js/) objects for the state rather than plain 'ol javascript objects. We use this for React rendering benefits as well as providing convenient methods to get/update pieces of data deep inside the state.

It strongly suggested that you have a good understanding of both React and Redux before attempting to contribute to the project.

### Project Structure
The application's main entry point is `src/index.js`. This will render/run the whole application in the `#app` div found in `dist/index.html`.

[React-router](https://github.com/reactjs/react-router) is used to handle routing to different components based on the current url. All of the application's routes are located in `src/routes.js`. The router maps the path's to React components.

React components can be found in the `components` directory of the major sections of the app. For example, all React components for alarms are located in `src/<NAME>/components`.

Redux is used to hold all of the application's state/data. Redux does this by holding all of the data in a single javascript object inside of it's `store`. This object is manipulated by sending in [action objects](http://redux.js.org/docs/basics/Actions.html). [Functions called "reducers"](http://redux.js.org/docs/basics/Reducers.html) are responsible for inspecting these action objects and actually manipulating the state. Actions and reducers are broken out into separate files for each of the app's major sections and are located on the same level as the `components` directory.
