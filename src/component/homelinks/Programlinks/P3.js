import React from "react";
import imga from "../../../assets/technical.png";

const P3 = () => {
  return (
    <>
      <div className="heading">
        <h2>ParvarishForYou Technical Partnership Program </h2>
      </div>
      <div className="content1">
        <div className="content1txt">
          <p>
            Under this programme we are making parternership with the computer
            centres, shops which use to help students. We provide all kind of
            assistance to them with the help of our technical team. We also pay
            charges for those talented students who are not able to pay that .
            So if you are interested to be technical partner pls send you name
            and address to WhatsApp .our team will contact you soon .{" "}
          </p>
        </div>
        <div className="content1img">
          <img src={imga} alt="img" />
        </div>
      </div>
    </>
  );
};

export default P3;
