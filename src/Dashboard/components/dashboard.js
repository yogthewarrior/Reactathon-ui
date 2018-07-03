import React from 'react'
import EventDashboard from './EventDashboard'
import CanDashboard from './CanDashboard'

const FLAG = false
export default class Dashboard extends React.Component {

  render() {
    return (
      FLAG ? <CanDashboard/> : <EventDashboard/>
    )
  }
}
