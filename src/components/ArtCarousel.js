import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

// carousel imgs
import pic1 from '../imgs/001.JPG'
import pic2 from '../imgs/002.JPG'
import pic3 from '../imgs/005.JPG'

const MyCarousel = () => (
  <Carousel plugins={['arrows']}>
    <img src={pic1} />
    <img src={pic2} />
    <img src={pic3} />
  </Carousel>
);

export default MyCarousel;