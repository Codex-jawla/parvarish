import React from "react";
import imga from "../../../assets/intershipprogram.jpg";

const P6 = () => {
  return (
    <>
      <div className="heading">
        <h2>ParvarishForYou Internship Program </h2>
      </div>
      <div className="content1">
        <div className="content1txt">
          <p>
            ParvarishForYou has started this program to provide internship for
            freshers or students. Under this program individual will work under
            the guidance of our experienced team
          </p>
        </div>
        <div className="content1img">
          <img src={imga} alt="img" />
        </div>
      </div>
    </>
  );
};

export default P6;
