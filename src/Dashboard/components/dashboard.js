import React from 'react'
import EventDashboard from './EventDashboard'
import CanDashboard from './CanDashboard'
import * as actions from '../actions'
import { connect } from 'react-redux'
import { List } from 'immutable'

const FLAG = false

class Dashboard extends React.Component {

  componentDidMount() {
    this.props.FetchEvents()
    this.props.FetchComments()
  }

  render() {
    let {events} = this.props
    return (
      FLAG ? <CanDashboard /> : <EventDashboard events={events} />
    )
  }
}

function mapStateToProps(state, props) {
  return {
    events: state.getIn(["Dashboard", "events"], List())
  }
}

export default connect(mapStateToProps, actions)(Dashboard)
