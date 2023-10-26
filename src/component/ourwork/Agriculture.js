import React from "react";
import { NavLink } from "react-router-dom";
import imga from "../../assets/agricuture.jpg";

const Agriculture = () => {
  return (
    <>
      <div className="heading">
        <h2>Agriculture</h2>
      </div>
      <div className="content1">
        <div className="content1txt">
          <p>
            Agriculture is the bone of our economy and it should be taken care.
            We are working to enrich agricultural field in India. Below are the
            areas which are being worked upon:
            <li>
              Farming, Fishery, Beekeeping, Dairy, Horticulture, Animal
              Husbandry, Pottery
            </li>
            <li>Animal health and soil health</li>
            <li>Traditional to technological farming</li>
            <li>Technology awareness - dip irrigation, soil fertility card</li>
            <li>Government policy awareness</li>
            <li>Kissan library</li>
            <br/>
            नींबू घास की खेती कैसे करें: Complete Information:<NavLink className="nav-link active " to="https://parvarish4u.blogspot.com/2019/11/blog-post.html">Read More</NavLink>
          </p>
        </div>
        <div className="content1img">
          <img src={imga} alt="img" />
        </div>
      </div>
    </>
  );
};

export default Agriculture;
