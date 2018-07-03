import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Router} from 'react-router'
import {Provider} from 'react-redux'

export class App extends Component {
  static propTypes = {
    store: PropTypes.object,
    history: PropTypes.object,
    routes: PropTypes.node
  }

  render () {
    const {store, history, routes} = this.props
    return (
      <Provider store={store}>
        <Router history={history}>
          {routes}
        </Router>
      </Provider>
    )
  }
}

export default App
