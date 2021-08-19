import React from "react";
import "./Experience.css";
import DeveloperIcon from "../ExperienceImages/DeveloperIcon.png";
import Job1icon from "../ExperienceImages/Job1icon.png";
import Job2icon from "../ExperienceImages/Job2icon.png";
function Experience() {
  return (
    <>
      <h2 id="PSummary"> PROFESSIONAL SUMMARY </h2>
      <div className="exprience">
        <div className="PexprienceDetail">
          <div className="ProfileDescriptionText"></div>
          <ul>
            <li> 2 years of experience in the web development ecosystem.</li>
            <li>
              {" "}
              Ability to troubleshoot and tune relevant programming languages.{" "}
            </li>
            <li>
              Able to design and implement sophisticated algorithms to unsure{" "}
              <br />
              program scalability.{" "}
            </li>
            <li>
              Able to build reusable logical components and integrate them into{" "}
              <br /> complex solutions.
            </li>
            <li>Good understanding of software life cycle.</li>
            <li> Data governance, security, and operation experience.</li>
            <li> Object-Oriented Design, programming, and testing.</li>
            <li>Wireframe.</li>
            <br />
          </ul>
        </div>
        <img className="" src={DeveloperIcon} alt="logo" />
      </div>
      <h2 id="PExprience">PROFESIONAL EXPERIENCE</h2>
      <div className="WorkExperience1">
        <h4 className="Job">
          <div className="jobCompany flexJB">
            <di className="flexJBComp">
              New York State Energy Research and Development Authority (NYSERDA)
              <br /> <br />
              <i>Role: IT operations</i>
            </di>
            <di>
              Albany, NY <br /> <br />
              March 2021-Present
            </di>
          </div>
        </h4>
        <br />
        <div className="JobDetail">
          <div className="JobDetailText">
            <ul>
              <li>
                Work with C#, Visualbasic, ASP.NET, jQuery, React, SSMS and
                Microsoft azure in an IT team.
              </li>
              <li>
                {" "}
                Build, test, deploy and maintain multiples solutions both on
                premise and on the cloud.
              </li>
              <li>
                {" "}
                Migrate existing solutions from Physical data center to the
                cloud (Infrastructure and platform as a service)
                <br /> for availability, scalability, and cost efficiency.
              </li>
              <li>Unsure security scan and remediation (SQL Injection).</li>
              <li>
                {" "}
                Build, test and maintain windows and web applications for more
                than 500 users (Full-time, Contractors, Interns ...).
              </li>
            </ul>
          </div>
          <img className="Job1DetailPic" src={Job1icon} alt="logo" />
        </div>
      </div>
      <div className="WorkExperience2">
        <h4 className="Job">
          <div className="jobCompany flexJB">
            <di className="flexJBComp">
              Code the Dream
              <br /> <br />
              <i>Role: Web developer</i>
            </di>
            <di>
              Remote (North Carolina) <br /> <br />
              2020 – 2021
            </di>
          </div>
        </h4>
        <br />
        <div className="JobDetail">
          <div className="JobDetailText">
            <ul>
              <li>
                Build responsive and dynamic web applications using technologies
                such as React, jQuery, Html, JavaScript,  Bootstrap, CSS,Airtable, firebase (database) Node.js, Git …
              </li>
              <li>
                {" "}
                Build multi-level authentication applications to enable
                companies to shift to remote work.
              </li>
              <li> Deploy web solutions to Heroku.</li>
              <li>Work on the back end using SSMS and java.</li>
            </ul>
          </div>
          <img className="Job1DetailPic" src={Job2icon} alt="logo" />
        </div>
      </div>
    </>
  );
}

export default Experience;

//    Interning in the IT operation team of New York State Energy Research and
// Development Authority. The most advance clean energy innovation and
// investments company to combat climate change, improving the health,
// resiliency, prosperity of New Yorkers and delivering benefits equitably to
// all.
