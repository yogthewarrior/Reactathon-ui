import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import Modal from '../../Layout/components/Modal'
import Login from '../../Login/components/login'
import * as actions from '../../Login/actions'


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
    console.log('----logout----')
    this.props.logOutUser()
  }


  renderModal() {
    return (
      <Modal showModal={this.state.openModal} handleClose={this.closeModal.bind(this)} style={modalStyles} title={"Login"} >
        <Login closeModal={this.closeModal.bind(this)} />
      </Modal>)
  }

  myProfile() {
    console.log('myProfile')
    this.props.router.push('/profile')
  }


  render() {
    console.log('userID...', this.props.loginId)
    return (
      <div className='row'>
        <div className='col-md-12' style={{ backgroundColor: '#ecebeb' }}>
          {!this.props.loginId && (<div className='col-md-2'> <button type="submit" className="btn-danger pull-right" onClick={this.openLoginModal.bind(this)}>Login</button> </div>)}
          {this.props.loginId && (
            <div>
              <div className='col-md-2'> <button type="submit" className="btn-danger pull-right" onClick={this.logout.bind(this)}>Logout</button> </div>
              <div className="col-md-2 pull-right" onClick={this.myProfile.bind(this)}><i class="fa fa-user" aria-hidden="true"></i></div>
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
