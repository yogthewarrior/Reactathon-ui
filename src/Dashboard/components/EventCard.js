import React, { Component } from 'react'
import PropTypes from "prop-types"
import img from '../assets/img.png'
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
      openModal: false
    }
  }

  closeModal ()  {
    this.setState({openModal: false})
  }

  handleWRClick() {
    this.setState({
      openModal: true
    })
  }

  renderModal() {
    return (
      <Modal showModal={this.state.openModal}  handleClose={this.closeModal.bind(this)} style={modalStyles} title={"Hello"} >
        <EventDetails/>
      </Modal>)
  }
  render() {
    return (
      <div className="col-xs-3 hvr-float-shadow"  style={{ marginTop: '10px' }}>
        <div className="content_box_outer" style={{ minHeight: '200px' }} onClick={this.handleWRClick.bind(this)}>
          <div> <img src={img} alt='img' className='responsive-image' /></div>
          <div className='event_name'> Event Name </div>
          <span className="text_trim"> Machine Learning is a field of computer science using which computer systems get the ability to decipher data and learn from it. T...</span>
          <div className="content_box_footer"> Learn More</div>
        </div>
        {this.state.openModal ? this.renderModal() : null}
      </div>
      
    )
  }
}

export default EventCard