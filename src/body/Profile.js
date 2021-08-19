import React from "react";
// import Graduation from "../ProfileImages/Graduation.png";
import Bootcamp from "../ProfileImages/Bootcamp.jpeg";
import Certificate from "../ProfileImages/Certificate.jpeg";
import Certificateicon from "../ProfileImages/certificate-icon.png";
import Graduation from "../ProfileImages/goldStarRounded.jpeg";
import "./Profile.css";
function Profile() {
  return (
    <>
    <div className="ProfileDescriptionWrap">
      <div className="ProfileDescription ">
        <h2 id="Aboutme">ABOUT ME</h2>
        <div className="ProfileDescriptionText">
          My name is <strong>Ismael Boro</strong>. <br />I am a{" "}
          <strong>computer science</strong> major who graduate with a{" "}
          <strong>GPA of 3.75</strong>.<br /> I am a very{" "}
          <strong>focused and detail-oriented programmer</strong> with over two
          years of experience.
          <br /> I also participated in a 12-month web development Bootcamp
          where I learned the leading technologies of the work field.
          <br /> My top programming and scripting languages are:{" "}
          <strong>HTML</strong>, <strong>JavaScript </strong>,
          <strong>CSS</strong>, <strong>React</strong>,{" "}
          <strong>Bootstrap</strong> , <strong>Java</strong> (object Oriented )
          , <strong>C++ </strong>(object Oriented ).
          <br /> In addition to the above skills,{" "}
          <strong>data structure and algorithm</strong> are some of my favorite
          courses.
          <br /> In my Github are shown some of my projects using features like
          authentication, database, API, and much more.
        </div>
      </div>
      <div className="Education">
        <h2 id="Education">EDUCATION</h2>
        <div className="FlexJustContain">
          <div className="College">
            <h3 className="EducationSubtitles">COLLEGE</h3>
            LAGUARDIA COMMUNITY COLLEGE <br />
            MAJOR : COMPUTER SCIENCE GPA: 3.75 <br />
          </div>
          <div>
            <img className="IconPicture" src={Graduation} alt="logo" />
          </div>
        </div>
        <div className="FlexJustContain">
          <div className="College">
            <h3 className="EducationSubtitles">BOOTCAMP</h3>
            CODE THE DREAM
            <br />
            TEAMTREEHOUSE
            <br />
            LINKEDIN LEARNING
            <br />
          </div>
          <div>
            <img className="IconPicture" src={Bootcamp} alt="logo" />
          </div>
        </div>
        <div className="FlexJustContain">
          <div className="College">
            <h3 className="EducationSubtitles">CERTIFICATES</h3>
            Web development Certificate
            <br />
            Microsoft SQL Server 2019 Essential Training
            <br />
            AZ-900: Microsoft Azure Fundamentals
            <br />
            Application Security and Secure Coding
          </div>
          <div>
            <img className="IconPicture" src={Certificate} alt="logo" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Profile;
