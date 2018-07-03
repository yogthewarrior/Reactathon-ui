import React, { Component } from 'react'
export default class Header extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-md-12' style={{ backgroundColor : '#ecebeb'}}>
          <div class="col-md-2 pull-right">login</div>
        </div>
      </div>
    )
  }
}
