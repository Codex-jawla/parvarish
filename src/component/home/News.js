import React from 'react'
import { NavLink } from 'react-router-dom'
import "./sliderimg.css"

const News = () => {
  return (<>
    <div className="maindiv">
        <div className="newsHeading">
            <h2>NEWS AND UPDATES</h2>
        </div>
        <div className="newsbox">
            <div className="newsbox1">
                <div className="topic">28th July 2019:- Book Donation Derive: R D Progressive School Wazirganj</div>
                <div className="btnnewsData">
            <NavLink className="nav-link active " to="/news1">Read More</NavLink>
          </div>
            </div>
            <div className="newsbox1">
                <div className="topic">4th May 2019:- Seminar On Sports: Health and Career.</div>
                <div className="btnnewsData">
            <NavLink className="nav-link active " to="/news2">Read More</NavLink>
          </div>
            </div>
            <div className="newsbox1">
                <div className="topic">UP Police - UP Police constable 49568 bharti 2018.</div>
                <div className="btnnewsData">
            <NavLink className="nav-link active " to="/news3">Read More</NavLink>
          </div>
            </div>
            <div className="newsbox1">
                <div className="topic">Navodalaya Vidyalaya - NVS entrance exam online application 2019.</div>
                <div className="btnnewsData">
            <NavLink className="nav-link active " to="/news4">Read More</NavLink>
          </div>
            </div>
            </div>
        </div>
  </>
  )
}

export default News