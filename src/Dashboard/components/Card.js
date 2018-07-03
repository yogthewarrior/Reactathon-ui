import React, { Component } from 'react'
import PropTypes from "prop-types"
import Modal from '../../Layout/components/Modal'


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

class Card extends Component {

  static propTypes = {
    awaitingWR: PropTypes.object,
    selectedWRCallBack: PropTypes.func,
    isAwaiting: PropTypes.bool,
    statusType: PropTypes.string,
  }

  constructor(props) {
    super(props)
    this.state = {
      openModal: false
    }
  }


  closeModal() {
    this.setState({ openModal: false })
  }

  handleWRClick() {
    this.setState({
      openModal: true
    })
  }

  renderModal() {
    return (
      <Modal showModal={this.state.openModal} handleClose={this.closeModal.bind(this)} style={modalStyles} title={"Candidate"} >
        Candidate Details......
      </Modal>)
  }

  render() {
    let statusColor = { "borderLeftColor": "yellow" }
    return (
      <div className="col-xs-3 hvr-float-shadow" style={{ marginTop: '10px' }}>
        <div className="content_box_outer" style={statusColor} onClick={this.handleWRClick.bind(this)}>
          <i className="fa fa-flag fa-lg pull-right" style={{ color: "red", padding: "2px" }} aria-hidden="true"></i>
          <span className="text_trim"> CONTENT</span>
          <div className="content_box_footer"> FOOTER</div>
        </div>
        {this.state.openModal ? this.renderModal() : null}
      </div>
    )
  }
}

export default Card