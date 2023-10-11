import React from "react";
import img1 from "../../assets/telantsupport.png";
import img2 from "../../assets/knowledgecenter.png";
import img3 from "../../assets/academicpartnership.png";
import img4 from "../../assets/capacitybuilding.png";
import img5 from "../../assets/technical.png";

const Education = () => {
  return (
    <>
      <div className="heading">
        <h2>Education</h2>
      </div>
      <div className="onlyheadingtxt">
        <p>
          We are working in education field where there is no institutional
          source of education. As most of the places have schools but there is
          no carrier guiding or preparation centres. This is the major cause of
          backwardness there as we think. Most of the people who get education
          move away from these places. This creates a gap between rural and
          urban development. We are working to fulfill this gap.
        </p>
      </div>
      <div className="content1">
        <div className="content1txt">
          <h5>ParvarishForYou Talent Support Scheme</h5>

          <ol>
            <li>
              ParvarishForYou has started this scheme. Under this scheme we are
              trying to support talent either in academics , sports and any
              other field of life. Under this scheme organisation support
              students in different ways.
            </li>
            <li>
              To support student one year school fee of student who got first
              position in school. (Already selected two students from two
              different schools).
            </li>
            <li>
              Awarding and supporting district topper with cash support and
              other required support .
            </li>
            <li>
              There are several other ways where organisation is working to
              support real and needy talent.
            </li>
          </ol>
        </div>
        <div className="content1img">
          <img src={img1} alt="img" />
        </div>
      </div>
      <div className="content1">
        <div className="content1txt">
          <h5>ParvarishForYou Knowledge Center </h5>
          <ul>
            Under this scheme we are in the process of establishing libraries at
            various remote locations where students in need of books. These
            libraries also accept books as donation from around the globe
            because most of the people gives at no cost .so students can use
            these books , magzines , reference books, syllabus books from these
            libraries at very nominal membership fee. So , if any one interested
            to donate books pls send your name and address with city name to our
            WhatsApp no. We will arrange a pick up from there. This is to create
            a habit of reading in society which is getting reduce day by day.
          </ul>
        </div>
        <div className="content1img">
          <img src={img2} alt="img" />
        </div>
      </div>
      <div className="content1">
        <div className="content1txt">
          <h5>ParvarishForYou Academic Partnership Program </h5>
          <ul>
            This programme has been started with the vision of reducing or
            eliminating the gap of international level school and school which
            don't have sufficient resources. Our team organises different
            activites and different sessions at school at different time . Also
            we provide sessions for teachers so that gap can be reduced. If any
            one interested for parternship please send your name and address to
            our WhatsApp numner. Our concerned team will contact you soon.
          </ul>
        </div>
        <div className="content1img">
          <img src={img3} alt="img" />
        </div>
      </div>
      <div className="content1">
        <div className="content1txt">
          <h5>ParvarishForYou Capacity Building Center </h5>
          <ul>
            Under this scheme we are establishing centres where sessions and
            classes can be arranged by expert to increase capacity of students.
            As most of problems of society can be solved with this capacity
            building initiative.
            <br />
            Currently we are running our capacity building centres which is
            giving very good response.
          </ul>
        </div>
        <div className="content1img">
          <img src={img4} alt="img" />
        </div>
      </div>
      <div className="content1">
        <div className="content1txt">
          <h5>ParvarishForYou Technical Partnership Program</h5>
          <ul>
          Under this programme we are making parternership with the computer centres, shops which use to help students. We provide all kind of assistance to them with the help of our technical team. We also pay charges for those talented students who are not able to pay that .
          <br/>
So if you are interested to be technical partner pls send you name and address to WhatsApp .our team will contact you soon .
          </ul>
        </div>
        <div className="content1img">
          <img src={img5} alt="img" />
        </div>
      </div>
    </>
  );
};

export default Education;
