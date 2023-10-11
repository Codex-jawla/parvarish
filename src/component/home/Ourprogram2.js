import React from 'react'
import "./sliderimg.css"
import {NavLink} from 'react-router-dom'
import pic4 from "../../assets/capacitybuilding.png"
import pic5 from "../../assets/academicpartnership.png"
import pic6 from "../../assets/intershipprogram.jpg"

const Ourprogram2 = () => {

  const Scrollup =() =>{
    window.scrollTo({top:0})
  }

  return (
    <>
    <div className="maindiv">
      <div className="pHeading">
        <h2>Our Program</h2>
      </div>
      <div className="pbox">
        <div className="pbox1">
          <div className="imgp">
            <img src={pic4} />
          </div>
          <div className="Ptopic">
          ParvarishForYou Capacity Building Center
          </div>
          <div className="Particle">
          Under this scheme we are establishing centres where sessions and classes can be arranged by expert to increase capacity of students. As most of problems of society can be solved with this.
            </div>
          <div className="btnpData">
            <NavLink onClick={Scrollup} className="nav-link active " to="/p4">
              Read More
            </NavLink>
          </div>
        </div>
        <div className="pbox1">
          <div className="imgp">
            <img src={pic5} />
          </div>
          <div className="Ptopic">
          ParvarishForYou Academic Partnership Program
          </div>
          <div className="Particle">
          This programme has been started with the vision reducing or eliminating gap of international level school and school which don't sufficient resources. Our team organises different activites and different sessions at school at different time.
            </div>
          <div className="btnpData">
            <NavLink onClick={Scrollup} className="nav-link active " to="/p5">
              Read More
            </NavLink>
          </div>
        </div>
        <div className="pbox1">
          <div className="imgp">
            <img src={pic6} />
          </div>
          <div className="Ptopic">
          ParvarishForYou Internship Program
          </div>
          <div className="Particle">
          ParvarishForYou has started this program to provide internship for freshers or students. Under this program individual will work under the guidance of our experienced team.chool at different time.
            </div>
          <div className="btnpData">
            <NavLink onClick={Scrollup} className="nav-link active " to="/p6">
              Read More
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Ourprogram2