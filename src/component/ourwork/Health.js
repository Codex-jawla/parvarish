import React from "react";
import imga from "../../assets/health.jpg"

const Health = () => {
  return (
    <>
      <div className="heading">
        <h2>Health</h2>
      </div>
      <div className="content1">
        <div className="content1txt">
          <p>
            We are working to improve health and aware people about different
            health issues faced by them. We are organizing various programs at
            ground level so that maximum people can be benefited. Programs like
            below:
            <li>Health awareness camps.</li>
            <li>Yoga classes.</li>
          </p>
        </div>
        <div className="content1img">
          <img src={imga} alt="img" />
        </div>
      </div>
    </>
  );
};

export default Health;
