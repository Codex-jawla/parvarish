import React from "react";
import imga from "../../../assets/knowledgecenter.png";

const P2 = () => {
  return (
    <>
      <div className="heading">
        <h2>ParvarishForYou Knowledge Center</h2>
      </div>
      <div className="content1">
        <div className="content1txt">
          <p>
            Under this scheme we are in the process of establishing libraries at
            various remote locations where students in need of books. These
            libraries also accept books as donation from around the globe
            because most of the people gives at no cost .so students can use
            these books , magzines , reference books, syllabus books from these
            libraries at very nominal membership fee. So , if any one interested
            to donate books pls send your name and address with city name to our
            WhatsApp no. We will arrange a pick up from there. This is to create
            a habit of reading in society which is getting reduce day by day.
          </p>
        </div>
        <div className="content1img">
          <img src={imga} alt="img" />
        </div>
      </div>
    </>
  );
};

export default P2;
