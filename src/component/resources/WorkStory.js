import React from "react";
import g17 from "../../assets/gimg/g17.jpg";
import g15 from "../../assets/gimg/g15.jpg";
import g21 from "../../assets/gimg/g21.jpg";

const WorkStory = () => {
  return (
    <>
      <div className="heading">
        <h2>Our Work Story</h2>
      </div>
      <div className="allcontent">
        <div className="tophead">
          <h5>
            School Fee Support under ParvarishForYou Talent Support Scheme:-
          </h5>
          <p>
            We have reached at remote location schools and selected talented
            students based on their academic record for the session 2018-19
            under our ParvarishForYou Talent Support Scheme. Organization had
            paid complete school fee of these talented students for the session
            2019-20. We understand that supporting meritious students from a
            school will surely encourage students towards their studies.{" "}
          </p>
        </div>
        <h5>School approched whose students get benified:</h5>
        <div className="c1">
          <div className="ctext">
            <h5>
              {" "}
              School: Saraswati Jan Shiksha Mandir, Dharampur, Saraira Ditrict
              Budaun U.P.
            </h5>
            <li>Student Name: Sugandhi </li>
            <li>Father's Name: Shyoraj Singh</li>
            <li>Class: Fifth</li>
            <li>
              Reason for Selection: She has topped school in session 2018-19 and
              tremendous performance in other activities too.
            </li>
          </div>
          <div className="cimg">
            <img src={g17} alt="" />
          </div>
        </div>
        <div className="c1">
          <div className="ctext">
            <h5>
              {" "}
              School: Rukmani Devi Saraswati Shishu Mandir, Asmoli, District
              Sambhal U.P.
            </h5>
            <li>Student Name: Radha Rani </li>
            <li>Father's Name: Rajveer Singh</li>
            <li>Class: Second</li>
            <li>
              Reason for Selection: She has topped school in session 2018-19.
            </li>
          </div>
          <div className="cimg">
            <img src={g15} alt="" />
          </div>
        </div>
        <div className="c1">
          <div className="ctext">
            <h5>A Seminar on Sports as health and career:- </h5>
            <li>Venue: Rukmani Devi Saraswati Shishu/Vidya Mandir, Asmoli</li>
            <li>Date of Seminar: Saturday, 4th May 2019</li>
            <li>
              Guest Speaker: Dr. Vineet Kumar Sharma, P.E.T. Jawahar Navodaya
              Vidyalaya, Ph.D., M.P.Ed., B.P.Ed. (LNPE Gwalior), Former Asst
              prof. at LPU, Jalandhar, Punjab
            </li>
          </div>
          <div className="cimg">
            <img src={g21} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkStory;
