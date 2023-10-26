import React from "react";
import imga from "../../../assets/capacitybuilding.png";

const P4 = () => {
  return (
    <>
      <div className="heading">
        <h2>ParvarishForYou Capacity Building Center</h2>
      </div>
      <div className="content1">
        <div className="content1txt">
          <p>
            Under this scheme we are establishing centres where sessions and
            classes can be arranged by expert to increase capacity of students.
            As most of problems of society can be solved with this capacity
            building initiative. Currently we are running our capacity building
            centres which is giving very good response
          </p>
        </div>
        <div className="content1img">
          <img src={imga} alt="img" />
        </div>
      </div>
    </>
  );
};

export default P4;
