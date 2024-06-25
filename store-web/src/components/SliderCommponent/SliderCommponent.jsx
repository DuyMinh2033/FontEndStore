import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../Asset/images/slide1.jpg'
import slide2 from '../../Asset/images/slide2.jpg'
import slide3 from '../../Asset/images/slide3.jpg'
import slide4 from '../../Asset/images/slide4.jpg'
import React from 'react'
import './Slider.css'
const SliderCommponent = () => {
  return (
    <div className="carousel-container">
      <Carousel className='sm-2' interval={3000}> {/* Apply desired styling class */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide3}
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item> {/* Add the second slider item here */}
          <img
            className="d-block w-100"
            src={slide4}
            alt="Second slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default SliderCommponent
