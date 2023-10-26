import React  from "react";
import { NavLink } from "react-router-dom";
import g17 from '../../assets/capacitybuilding.png'

const Cbc = () => {
    const Scrollup =() =>{
        window.scrollTo({top:0})
      }
  return (
    <>
      <div className="heading">
        <h2>Capacity Building Center</h2>
      </div>
      <div className="tophead">
        <p>
          Nowadays all of us accept that a lot of competition is there (both in
          personal and professional life). It's result is very much visible i.e.
          even minor students are commiting suicides. This is happening in both
          scenario of success and failure. This leads us to think that it needs
          something additional to our educational part. Capacity Building Center
          is one step towards it. Our team is working for it. Your ideas are
          always welcome. Lets be a part of capacity builing centres so that our
          new generation be compatible enough for competition and better life.<br/>
          Story 1:<br/> We met with student who passed 12th with 80% marks. But after
          certain discussion, he came to know he is lacking in confidence.
          Lastly he replied, माहोल नही है| <br/>Story 2:<br/> After certain year we met to
          him and other guys, we asked what’s going on. He Replied: I took
          admission in BSc. But now dropping it to pursue something else.<br/> Story
          3:<br/> We also tried to met different class of student i.e those who moved
          to big cities and also who joined big names for preparation. Initially
          the level of confidence was high but after 1-2 year. Concluded that it
          is difficult to survive there. (Economic region, family pressure,
          homesickness, social pressure)<br/> Our solution to story 1 + story 2 +
          story 3 :
        </p>
      </div>
      <div className="c1">
          <div className="ctext">
            <h5>
            PARVARISH FOR YOU CAPACITY BUILDING CENTRE (C.B.C.)
            </h5>
            <li>Case Studies:</li>
            <li>{`-->`}'नौकरी लगेगी नहीं तो जी कर क्या करेंगे'<NavLink onClick={Scrollup} className="nav-link active " to="/cs1">
              ... Read More
            </NavLink> </li>
          </div>
          <div className="cimg">
            <img src={g17} alt="" />
          </div>
        </div>
    </>
  );
};

export default Cbc;
