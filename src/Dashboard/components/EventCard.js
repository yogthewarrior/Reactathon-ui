import React, { Component } from 'react'
import PropTypes from "prop-types"
import Modal from '../../Layout/components/Modal'
import EventDetails from './EventDetails'


const modalStyles = {
  overlay: {
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  content: {
    width: '90%',
    height: 'auto',
    left: '25%',
    right: '25%',
    top: '25%',
    bottom: 'auto'
  }
}

class EventCard extends Component {

  static propTypes = {
    awaitingWR: PropTypes.object,
    selectedWRCallBack: PropTypes.func,
    showModal: PropTypes.func,
    showModal: PropTypes.func,
    isAwaiting: PropTypes.bool,
    statusType: PropTypes.string,
  }

  constructor (props) {
    super(props)
    this.state = {
      openModal: false,
      eventDataHolder : null
    }
  }

  closeModal ()  {
    this.setState({openModal: false})
  }

  handleWRClick(eventInfo) {
    this.setState({
      openModal: true,
      eventDataHolder : eventInfo
    })
  }

  renderModal() {
    return (
      <Modal showModal={this.state.openModal}  handleClose={this.closeModal.bind(this)} style={modalStyles} title={this.state.eventDataHolder.get('eventName')} >
        <EventDetails data= {this.state.eventDataHolder}/>
      </Modal>)
  }
  render() {
    let {data} = this.props
    return (
      <div className="col-xs-3 hvr-float-shadow"  style={{ marginTop: '10px' }}>
        <div className="content_box_outer" style={{ minHeight: '300px' }} onClick={this.handleWRClick.bind(this,data)}>
          <div> <img src={data.get('imageURL')} alt='img' className='responsive-image' /></div>
          <div className='event_name'> {data.get('eventName')}</div>
          <span className="text_trim"> {data.get('readMoreConent')}</span>
          <div className='pull-left' style={{marginTop: '25px'}}> <i class="fa fa-calendar" aria-hidden="true" style={{color : 'green'}}></i> Start Date : {data.get('startDate')}</div>
          <div className='pull-left' style={{marginTop: '5px'}}> <i class="fa fa-calendar" aria-hidden="true" style={{color : 'orange'}}></i> Completion Date : {data.get('endDate')}</div>
          <div className="content_box_footer"> Learn More</div>
        </div>
        {this.state.openModal ? this.renderModal() : null}
      </div>
      
    )
  }
}

export default EventCard