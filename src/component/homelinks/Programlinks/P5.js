import React from "react";
import imga from "../../../assets/academicpartnership.png";

const P5 = () => {
  return (
    <>
      <div className="heading">
        <h2>ParvarishForYou Academic Partner Program </h2>
      </div>
      <div className="content1">
        <div className="content1txt">
          <p>
            This programme has been started with the vision of reducing or
            eliminating the gap of international level school and school which
            don't have sufficient resources. Our team organises different
            activites and different sessions at school at different time
          </p>
        </div>
        <div className="content1img">
          <img src={imga} alt="img" />
        </div>
      </div>
    </>
  );
};

export default P5;
