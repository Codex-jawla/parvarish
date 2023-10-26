import React, { useState , useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import parvarish from "../../assets/gimg/g8.jpg"
import parvarish2 from "../../assets/gimg/g9.jpg"
import parvarish3 from "../../assets/gimg/g12.jpg"
import parvarish4 from "../../assets/gimg/g18.jpg"
import "../home/sliderimg.css"

const Slid = () => {
  const [currentImage, setCurrentImage] = useState(1);

  const imageFiles = [parvarish,parvarish3,parvarish2,parvarish4];

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

export default Slid