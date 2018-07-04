import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

class Header extends Component {

  openLoginModal () {
    console.log('openLoginModal')
  }
  
  myProfile () {
    console.log('myProfile')
    this.props.router.push('/profile')
  }


  render() {
    return (
      <div className='row'>
        <div className='col-md-12' style={{ backgroundColor : '#ecebeb'}}>
        <div className='col-md-2'> <button type="submit" className="btn-danger pull-right" onClick={this.openLoginModal.bind(this)}>Login</button> </div>
          <div className="col-md-2 pull-right"  onClick={this.myProfile.bind(this)}><i class="fa fa-user" aria-hidden="true"></i></div>
        </div>
      </div>
    )
  }
}

export default withRouter((Header))
