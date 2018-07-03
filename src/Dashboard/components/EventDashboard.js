import React, { Component } from 'react'
import EventCard from './EventCard'
import img from '../assets/img.png'
import { Carousel } from 'react-responsive-carousel';

export default class EventDashboard extends Component {
  
  _onClickItem() {
    console.log('onClickItem', arguments);
  }

  render() {
    return (
      <div className='row'>
        <div className='col-md-12'>
          <Carousel style={{ height: '180px' }} dynamicHeight={false} showThumbs={false} showArrows={true} autoPlay={true} infiniteLoop={true} onClickItem={this._onClickItem}>
            <div>
              <img src={img} />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src={img} style={{ height: 'auto' }} />
              <p className="legend">Legend 2</p>
            </div>
          </Carousel>
        </div >
        <div className='col-md-12'>
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div >
      </div>

    )
  }
}
