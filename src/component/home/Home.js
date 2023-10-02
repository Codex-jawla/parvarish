import React, { useState } from 'react'
import News from './News';
import ImageSlider from './ImageSlider'
import { NavLink } from 'react-router-dom'
import "./sliderimg.css";
import Updates from './Updates';
import Blogs from './Blogs';
import Ourprogram from './Ourprogram';
import Ourprogram2 from './Ourprogram2';
import enhance from "../../assets/enhance.jpg"
import Installapp from './Installapp';
import Ourcontact from './Ourcontact';
const Home = () => {

  const [curnews,setcurnews]= useState(1)

  const changebarleft=()=>{
      setcurnews(1)
  }
  const changebarright=()=>{
    setcurnews(2)
  }
  const [curp,setcurp]= useState(1)

  const changebarleftp=()=>{
      setcurp(1)
  }
  const changebarrightp=()=>{
    setcurp(2)
  }
  return (<>
    <div className='div'>
      <ImageSlider/>
      <div className="data">
      <div className="leftorange"></div>
    
        <div className="maindata">
          <div className="headingMainData" >
            <h2>ParvarishForYou</h2>
          </div>
          <div className="dataMainData" data-aos="fade-up">
            <p>This is an initiative by alumni of Jawahar Navodaya Vidyalaya and youth from different sectors of working environment, different part of society and also from different geographical area, rural background. We all have same mind set about the problem of remote area and also challenges faced by backward class or other area of society. This mindset gave a positive path to all of us to do something for positive change . This laid the foundation of ParvarishForYou: a helping hand.</p>
          </div>
          <div className="btnMainData" >
            <NavLink className="nav-link active a" to="/overviewa">Read More</NavLink>
          </div>
        </div>
        <div className="rightorange"></div>
        
        </div>
        <div data-aos="fade-left">
        {(curnews===1)? <News/>:<Updates/>}
        </div>
        <div className="navigate">
        <div className="lefright">
        <button onClick={changebarleft}>{'<'} </button>
        <button onClick={changebarright}>{'>'} </button>
        </div>
        </div>
        <div data-aos="fade-up">
        <Blogs/>
        </div>
        <div className='pmaindiv' >
        <div data-aos="zoom-in-up">
        {(curp===1)? <Ourprogram/>:<Ourprogram2/>}
        </div>
        </div>
        <div className="navigatediv">
        <div className="navigate">
        <div className="lefright">
        <button onClick={changebarleftp}>{'<'} </button>
        <button onClick={changebarrightp}>{'>'} </button>
        </div>
        </div>
        </div>
        <div className="enhanceheading">
          <h2>Steps for Enhancement</h2>
          <p>A positive path to all of us to do something for positive change</p>
        </div>
        <div className="enhanceimgtxt" >
          <div className="enhanceimg" >
            <img src={enhance} alt="img" width={300} height={300} />
          </div>
          <div className="enhancetxt" >
          <ol>
            <li>Think</li>
            <p>ParvarishForYou provides an opportunity to think about your career goals.</p>
            <li>Plan</li>
            <p>ParvarishForYou is plateform where you can plan your career goals with the help of expereinced mentors.</p>
            <li>Execute</li>
            <p>Finally you can execute you career goals with the help of various programs run by ParvarishForYou.</p>
          </ol>
          </div>
        </div>
       <div className="installappbox">
        <Installapp/>
       </div>
       <div className="ourcontact">
        <Ourcontact/>
       </div>
    </div>
    </>
  )
}

export default Home