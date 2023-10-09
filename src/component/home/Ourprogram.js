import React from "react";
import "./sliderimg.css"
import { NavLink } from "react-router-dom";
import pic1 from "../../assets/telantsupport.png"
import pic2 from "../../assets/knowledgecenter.png"
import pic3 from "../../assets/technical.png"



const Ourprogram = () => {

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
              <img src={pic1} />
            </div>
            <div className="Ptopic">
            ParvarishForYou Talent Support Scheme 
            </div>
            <div className="Particle">
            ParvarishForYou has started this scheme. Under this scheme we are supporting talent either in academics, sports and any other field of life. Under this scheme organization support students in different ways.
            </div>
            <div className="btnpData">
              <NavLink onClick={Scrollup} className="nav-link active " to="/p1">
                Read More
              </NavLink>
            </div>
          </div>
          <div className="pbox1">
            <div className="imgp">
              <img src={pic2} />
            </div>
            <div className="Ptopic">
            ParvarishForYou Knowledge Center 
            </div>
            <div className="Particle">
            Under this scheme we are in the process of establishing libraries at various remote locations where students in need of books. These libraries also accept books as donation.
            </div>
            <div className="btnpData">
              <NavLink onClick={Scrollup} className="nav-link active " to="/p2">
                Read More
              </NavLink>
            </div>
          </div>
          <div className="pbox1">
            <div className="imgp">
              <img src={pic3} />
            </div>
            <div className="Ptopic">
            ParvarishForYou Technical Partnership Program
            </div>
            <div className="Particle">
            Under this programme we are making parternership with the computer centres, shops which use to help students. We provide all kind of assistance to them with the help of our technical team.
            </div>
            <div className="btnpData">
              <NavLink onClick={Scrollup} className="nav-link active " to="/p3">
                Read More
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourprogram;