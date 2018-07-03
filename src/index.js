import React from 'react'
import config from './config'
import './style'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import {syncHistoryWithStore} from 'react-router-redux'
import {browserHistory} from 'react-router'
import store from './store'
import App from './App'
import routes from './routes'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {Route, Router,IndexRedirect } from 'react-router'
// import Login from './Login/components/login'

const history = syncHistoryWithStore(browserHistory, store, {selectLocationState: state => state.get('Routes').toJS()})


injectTapEventPlugin()
console.log(config) // eslint-disable-line no-console
const palette = {
  primary1Color: '#cd040b',
}

const theme = {
  palette: palette,
  raisedButton: {
    primaryColor: palette.primary1Color,
    secondaryColor: palette.primary1Color,
  },
  flatButton :{
    primaryColor: palette.primary1Color,
    secondaryColor: palette.primary1Color,
  },
  floatingActionButton:{
    primaryColor: palette.primary1Color,
    secondaryColor: palette.primary1Color,
  }
}

const render = props => {
    // console.log("render...",props);
  ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
    <AppContainer>
      <App {...props}/>
    </AppContainer>
  </MuiThemeProvider>,
    document.getElementById('app')
  )
}
const renderApp = () => render({store, history, routes})

renderApp()

if (module.hot) {
  // console.log("Module hot");
  module.hot.accept('./routes', () => {
    const newRoutes = require('./routes').default
    render({store, history, newRoutes})
  })
}

// const render = (function(props){
//   console.log("render...",props);
//   ReactDOM.render(
//   <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
//     <AppContainer>
//       <App {...props}/>
//     </AppContainer>
//   </MuiThemeProvider>,
//     document.getElementById('app')
//   )
// })
// // console.log("const...",render);
//
//
//
// const renderApp = function(){
//   render({store, history, routes})
// }

// ReactDOM.render(
//   <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
//       <AppContainer>
//         <App store={store} history={history} routes={routes}/>
//       </AppContainer>
//   </MuiThemeProvider>
// , document.getElementById('app'));
