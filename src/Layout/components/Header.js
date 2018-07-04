import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import Modal from '../../Layout/components/Modal'
import Login from '../../Login/components/login'
import * as actions from '../../Login/actions'
import hedaerImage from '../assets/header.jpg'


const modalStyles = {
  overlay: {
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  content: {
    width: '30%',
    height: '50px',
    left: '25%',
    right: '25%',
    top: '25%',
    bottom: 'auto'
  }
}

class Header extends Component {

  openLoginModal() {
    console.log('openLoginModal')
    this.setState({
      openModal: true
    })
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

  logout() {
    this.props.logOutUser()
  }


  renderModal() {
    return (
      <Modal showModal={this.state.openModal} handleClose={this.closeModal.bind(this)} style={modalStyles} title={"Login"} >
        <Login closeModal={this.closeModal.bind(this)} />
      </Modal>)
  }

  myProfile() {
    this.props.router.push('/profile')
  }

  createEvent() {
    this.props.router.push('/create')
  }


  render() {
    console.log('userID...', this.props.loginId)
    return (
      <div className='row' style={{ backgroundColor: 'lightgray' }}>
        <div className='col-md-12' >

          {this.props.loginId && (
            <div className='col-md-12' >
              <div className='pull-left' onClick={() => {this.props.router.push('/mainPage')}}style={{fontSize : '20px'}}> <i class="fa fa-home" aria-hidden="true"></i> </div>
              <div className='pull-left'> <button type="submit" className="btn-danger pull-right" onClick={this.createEvent.bind(this)}>Create Event</button> </div>
              <div className='pull-right'> <button type="submit" className="btn-danger pull-right" onClick={this.logout.bind(this)}>Logout</button> </div>
              <div className='pull-right' style={{ marginRight: '15px' }} onClick={this.myProfile.bind(this)}><i class="fa fa-user circle-icon" aria-hidden="true"></i></div>
            </div>
          )}
          {!this.props.loginId && (
            <div className='col-md-12' >
              <div className='pull-right'> <button type="submit" className="btn-danger pull-right" onClick={this.openLoginModal.bind(this)}>Login</button> </div>
            </div>
          )}
        </div>
        {this.state.openModal ? this.renderModal() : null}
      </div>
    )
  }
}


function mapStateToProps(state, props) {
  let loginId = state.getIn(["Login", "username"], '')
  return {
    loginId
  }
}

export default withRouter(connect(mapStateToProps, actions)(Header))
