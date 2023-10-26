import React, { useState } from 'react'
import blogs from './blogdata'
import articles from './articledata'
import { NavLink } from 'react-router-dom'
import "./sliderimg.css"

const Blogs = () => {
    
    const Scrollup =() =>{
        window.scrollTo({top:0})
      }

    const [idx,setidx]=useState(0)

    const clickRighta=()=>{
        if (idx<articles.length-1){
            setidx(idx+1);
        }else{
            setidx(idx);
        }
    }
    const clickLefta=()=>{
        if (idx>0){
            setidx(idx-1);
        }else{
            setidx(idx);
        }
    }
    const [idxb,setidxb]=useState(0)

    const clickRightb=()=>{
        if (idxb<blogs.length-1){
            setidxb(idxb+1);
        }else{
            setidxb(idxb);
        }
    }
    const clickLeftb=()=>{
        if (idxb>0){
            setidxb(idxb-1);
        }else{
            setidxb(idxb);
        }
    }
  return (
    <>
        <div className="blogarticle">
            <div className="articles">
            <div className="headingarticle">
                <h2>Articles</h2>
            </div>
            <div className="imgarticle">
            <img src={articles[idx].imgsrc}/>
            <div className="blogbutton">
            <button onClick={clickLefta}>{'<'} </button>
            <button onClick={clickRighta}>{'>'} </button>
            </div>
            </div>
            <div className="topicarticle">
            <p>{articles[idx].content}</p>
            <NavLink onClick={Scrollup} to={articles[idx].btnlink} className="btnarticle">Read More</NavLink>
            </div>
            </div>
            <div className="blogs">
            <div className="headingarticle">
                <h2>Blogs</h2>
            </div>
            <div className="imgarticle">
            <img src={blogs[idxb].imgsrc}/>
            <div className="blogbutton">
            <button onClick={clickLeftb}>{'<'} </button>
            <button onClick={clickRightb}>{'>'} </button>
            </div>
            </div>
            <div className="topicarticle">
            <p>{blogs[idxb].content}</p>
            <NavLink className="btnarticle" to={blogs[idxb].btnlink}>Read More</NavLink>
            </div>
            </div>
        </div>
    </>
  )
}

export default Blogs