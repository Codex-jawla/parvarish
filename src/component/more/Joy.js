import React from "react";
import Slid from "./Slid";
import g17 from '../../assets/bookdonation.jpg'

const Joy = () => {
  return (
    <>
      <div className="heading">
        <h2>Joy Of Giving</h2>
      </div>
      <h4>
        “The best and most beautiful things in the world cannot be seen or even
        touched they must be felt with the heart.” – Helen Keller
      </h4>
      <div className="slidimg">
        <Slid />
      </div>
      <div className="c1">
        <div className="ctext">
          <p>
            Where do your old clothes,books go?
            <br />
            <br />
            Donate Old Clothes in your city for poor people living on
            streets....
            <br />
            Donate your books to underprivileged children, government schools,
            various other grass-root organizations and charities.
            <br />
            <br />
            To execute above good cause at ground level, pavarishforyou will be
            a place where such good cause will be taking shape to serve needy
            one.{" "}
          </p>
        </div>
        <div className="cimg">
          <img src={g17} alt="" />
        </div>
      </div>
    </>
  );
};

export default Joy;
