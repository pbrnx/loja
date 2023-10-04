import React from 'react';
import { Carousel } from 'react-bootstrap';
import './css/casual.css'; 

function Slide() {
    return (
      <>
        <Carousel className='carousel-container'>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://club.designitalianshoes.com/wp-content/uploads/2020/03/01-2.jpg"
              alt="Slide 1"
            
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.ninesparis.com/modules/prestablog/views/img/grid-for-1-7/up-img/566.jpg"
              alt="Slide 2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://club.designitalianshoes.com/wp-content/uploads/2020/03/09-1.jpg"
              alt="Slide 3"
            />
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
  
  export default Slide;