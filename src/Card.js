import React, { Component } from 'react'
import imgSourse from './img.png'

export default class MCard extends Component {
  render() {
    return (
      <div className='card-body'>
        <p className='card-title'>{this.props.title}</p>
        <img src={imgSourse} alt='dasdasd'></img>
        <div className='truncate'>
          <p className='card-description'>{this.props.description}</p>
        </div>
      </div>
    )
  }
}
