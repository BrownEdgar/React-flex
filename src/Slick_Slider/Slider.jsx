import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  {
    url: './images/1.jpg',
    description: 'Image 1 Description',
  },
  {
    url: '2.jpg',
    description: 'Image 2 Description',
  },
  {
    url: '3.jpg',
    description: 'Image 3 Description',
  },
];

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.url} alt={image.description} />
          <p>{image.description}</p>
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;