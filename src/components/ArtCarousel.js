import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import '../css/Carousel.css'

// carousel imgs
import pic1 from '../imgs/DarthVectivus.jpeg'
import pic2 from '../imgs/LGBTQavatar.png'

const MyCarousel = () => (
  <Carousel plugins={['arrows']} className='carousel'>
    <img src={pic1} />
    <img src={pic2} />
  </Carousel>
);

export default MyCarousel;