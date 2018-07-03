import React, { Component } from 'react'
import Card from './Card'

export default class CandidateDashboard extends Component {
  render() {
    return (
      <div className='col-md-12'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    )
  }
}
