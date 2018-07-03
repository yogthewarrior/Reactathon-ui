import React, { Component } from 'react'
import Dashboard from '../../Dashboard/components/dashboard'
import Footer from './Footer'
import Header from './Header'

export default class MainContent extends Component {
  render() {
    return (
      <div>
        <Header />
        <Dashboard />
        <Footer />
      </div>
    )
  }
}
