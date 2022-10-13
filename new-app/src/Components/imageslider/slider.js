import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
  {
    url: 'https://images.pexels.com/photos/64613/pexels-photo-64613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'Slide 1'
  },
  {
    url: 'https://images.pexels.com/photos/3737623/pexels-photo-3737623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'Slide 2'
  },
  {
    url: 'https://images.pexels.com/photos/9705830/pexels-photo-9705830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    caption: 'Slide 3'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default Slideshow;