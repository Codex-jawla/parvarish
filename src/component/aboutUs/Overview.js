import React from "react";
import imga from "../../assets/overviewa.jpg";

const Overview = () => {
  return (
    <>
      <div className="heading">
        <h2>Overview</h2>
      </div>
      <div className="onlyheadingtxt">
        <p>
          This is an initiative by alumni of Jawahar Navodaya Vidyalaya and
          youth from different sector of working environment, different part of
          society and also from different geographical area, rural background.
          We all have same mind set about the problem of remote area and also
          challenges faced by backward class or other area of society. This
          mindset gave a positive path to all of us to do something for positive
          change . This laid the foundation of Parvarishforyou: a helping hand.
        </p>
      </div>
      <div className="content1">
        <div className="content1txt">
          <ul>
            <li>
              Initiative by a Team of Youth having Common Goal for Positive
              Change.
            </li>
            <li>
              Team - From different working Sectors, Environment, Society and
              Geographical area, rural background.
            </li>
            <li>
              Common Goal - Eliminate problems and challenges faced by Backward
              Class of rural area and Society.
            </li>
            <li>
              This noble cause overwhelms and gives us the everlasting
              motivation, energy and sufficient fuel to laid down the foundation
              of Parvarish: a helping hand.
            </li>
            <li>
              Parvarish - A Helping Hand’ will provide you the Canvas, Colour,
              Palette and Brush to paint the dreams of a Child.
            </li>
            <li>
              Canvas (Life of A child) + Colour, Palette & Brush (Parvarish) =
              Painting (Dreams with flying Colours).
            </li>
          </ul>
        </div>
        <div className="content1img">
          <img src={imga} alt="img" />
        </div>
      </div>
    </>
  );
};

export default Overview;
