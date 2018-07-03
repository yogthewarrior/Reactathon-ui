import React, { Component } from 'react'
import EventCard from './EventCard'
import img from '../assets/img.png'
import { Carousel } from 'react-responsive-carousel';

export default class EventDashboard extends Component {
  
  _onClickItem() {
    console.log('onClickItem', arguments);
  }

  contructCarouselImages (url, eventName) {
    return (<div>
      <img src={url} />
      <p className="legend">{eventName}</p>
    </div>)
  }

  render() {
    let EventCardrows = []
    let Carouselrows = []
    this.props.events.map((data,index) => {
      EventCardrows.push(<EventCard data={data}/>)
      if(index <= 2){
        Carouselrows.push(this.contructCarouselImages(data.get('imageURL'),data.get('eventName') ))
      }
    })

    return (
      <div className='row'>
        <div className='col-md-12'>
          <Carousel style={{ height: '180px' }} dynamicHeight={false} showThumbs={false} showArrows={true} autoPlay={true} infiniteLoop={true} onClickItem={this._onClickItem}>
            {Carouselrows}
          </Carousel>
        </div >
        <div className='col-md-12'>
          {EventCardrows}
        </div >
      </div>

    )
  }
}
