import React, { useState , useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import parvarish from "../../assets/parvarish.png"
import parvarish1 from "../../assets/parvarish1.png"
import parvarish2 from "../../assets/parvarish2.png"
import "./sliderimg.css"

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(1);

  const imageFiles = [parvarish,parvarish1,parvarish2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage % imageFiles.length) + 1);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (<>
   <div className='slide'>
    <img src={imageFiles[currentImage - 1]} className='imginfo' />
   </div>
  
  </>

  );
}

export default ImageSlider