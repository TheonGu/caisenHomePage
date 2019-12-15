import React, { Component } from 'react'
import { Carousel } from 'antd'

export default class HomeCarousel extends Component {
    render() {
        return (
            <Carousel autoplay>
                <div>
                <img style={{width:"100%"}} src={require('../../assets/images/c1.jpg')} alt="1" />
                </div>
                <div>
                <img style={{width:"100%"}} src={require('../../assets/images/c2.jpg')}  alt="1"  />
                </div>
                <div>
                <img style={{width:"100%"}} src={require('../../assets/images/c3.jpg')} alt="1" />
                </div>
                <div>
                <img style={{width:"100%"}} src={require('../../assets/images/c2.jpg')} alt="1" />
                </div>
            </Carousel>
        )
    }
}
