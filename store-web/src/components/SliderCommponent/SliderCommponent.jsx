import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../Asset/images/slide1.jpg'
import slide2 from '../../Asset/images/slide2.jpg'
import slide3 from '../../Asset/images/slide3.jpg'
import slide4 from '../../Asset/images/slide4.jpg'
import React from 'react'
import './Slider.css'
const SliderCommponent = () => {
  return (
    <div className="carousel-container" style={{ width: '75%', height: '20%', display: 'flex', justifyContent: 'center' }}>
      <Carousel className='slider' interval={3000}>
        <Carousel.Item style={{}}>
          <img
            style={{ width: '100%', height: '100%' }}
            className="d-block w-100"
            src='https://cf.shopee.vn/file/vn-50009109-727a24a85a60935da5ccb9008298f681'
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{ width: '100%', height: '100%' }}
            className="d-block w-100"
            src='https://cf.shopee.vn/file/vn-50009109-a36ca122ff396384467945294ae27edd'
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{ width: '100%', height: '100%' }}
            className="d-block w-100"
            src=' https://cf.shopee.vn/file/vn-50009109-b850047513facece14eab68739be6902'
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{ width: '100%', height: '100%' }}
            className="d-block w-100"
            src='https://cf.shopee.vn/file/vn-50009109-b40ff0ff3bcaf8afc43dc0e54e5f3bdd'
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default SliderCommponent
