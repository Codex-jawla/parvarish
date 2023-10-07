import React from "react";
import imga from "../../../assets/telantsupport.png";

const P1 = () => {
  return (
    <>
      <div className="heading">
        <h2>ParvarishForYou Talent Support Scheme</h2>
      </div>
      <div className="content1">
        <div className="content1txt">
          <p>
            ParvarishForYou has started this scheme. Under this scheme we are
            trying to support talent either in academics , sports and any other
            field of life. Under this scheme organisation support students in
            different ways.
            <ol>
              <li>
                To support student one year school fee of student who got first
                position in school. (Already selected two students from two
                different schools).
              </li>
              <li>
                Awarding and supporting district topper with cash support and
                other required support .
              </li>
            </ol>
            There are several other ways where organisation is working to
            support real and needy talent.
          </p>
        </div>
        <div className="content1img">
          <img src={imga} alt="img" />
        </div>
      </div>
    </>
  );
};

export default P1;
