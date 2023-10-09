import React from 'react'
import { Link } from 'react-router-dom'
import "./sliderimg.css"

const Updates = () => {
  const Scrollup =() =>{
    window.scrollTo({top:0})
  }
  return (<>
    <div className="maindiv">
        <div className="newsHeading">
            <h2>NEWS AND UPDATES</h2>
        </div>
        <div className="newsbox">
            <div className="newsbox1">
                <div className="topic">Sainik School - All India Sainik School entrance exam application 2019-20.</div>
                <div className="btnnewsData">
            <Link onClick={Scrollup} className="nav-link active " to="/news5">Read More</Link>
          </div>
            </div>
            <div className="newsbox1">
                <div className="topic">Sainik School -Sainik School Lucknow entrance exam application 2019-20.</div>
                <div className="btnnewsData">
            <Link onClick={Scrollup} className="nav-link active " to="/news6">Read More</Link>
          </div>
            </div>
            <div className="newsbox1">
                <div className="topic">विद्याज्ञान स्कूल प्रवेश परीक्षा : notification 2019-20: अंतिम तिथि : 15 अक्टूबर 2019</div>
                <div className="btnnewsData">
            <Link onClick={Scrollup} className="nav-link active " to="/news7">Read More</Link>
          </div>
            </div>
            <div className="newsbox1">
                <div className="topic">update later</div>
                <div className="btnnewsData">
            <Link onClick={Scrollup} className="nav-link active " to="/news8">Read More</Link>
          </div>
            </div>
            </div>
        </div>
  </>
  )
}

export default Updates