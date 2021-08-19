import React from "react";
import useState from 'react-hook-use-state';
import Profile from "../body/Profile.js";
import Experience from "../body/Experience.js";
import Projects from "../body/Projects.js";
import Contact from "../body/Contact.js";
import "../header/Header.css";
import profileImg from "../Images/ProfileImg.JPG";
// function ProfileDisplay() {
//   ProfileDisplayState = "none";
//   ExperienceDisplayState = "block";
//   ProjectsDisplayState = "block";
//   ContactDisplayState = "block";
// }
function Header() {
    const [ProfileDisplay, SetProfileDisplay] = useState("Block");
    const [ExperienceDisplay, SetExperienceDisplay] = useState("none");
    const [ProjectsDisplay, SetProjectsDisplay] = useState("none");
    const [ContactDisplay, SetContactDisplay] = useState("none");
    function ProfileDisplayFuct(){
        SetExperienceDisplay("none")
        SetProjectsDisplay("none")
        SetContactDisplay("none")
        SetProfileDisplay("block")

    }
    function ExperienceDisplayFuct(){
        SetProfileDisplay("none")
        SetProjectsDisplay("none")
        SetContactDisplay("none")
        SetExperienceDisplay("block")

    }
    function ProjectsDisplayFuct(){
        SetProfileDisplay("none")
        SetExperienceDisplay("none")
        SetContactDisplay("none")
        SetProjectsDisplay("block")

    }
    function ContactDisplayFuct(){
        SetProfileDisplay("none")
        SetExperienceDisplay("none")
        SetProjectsDisplay("none")
        SetContactDisplay("block")

    }
  return (
    <div>
      <div className="Header">
      <div className="Profile-BgrdCover">
        <div className="Profile-Bgrd"></div>
        </div>
        <img className="ProfilePicture" src={profileImg} alt="logo" />
        <div class="NavbarContain">
        <div class="Navbar">
          <div className="welcomeText">
            <h2>Welcome to my portfolio</h2>
            {/* <p>
            "Two roads diverged in a wood, and I— <br/>
            I took the one less traveled by, And that <br/>has made all the difference."<br/>
            BY ROBERT FROST
          </p> */}
            <button
              type="button"
              class="btn btn-success mb-1"
              data-toggle="collapse"
              data-target="#demo"
            >
              WHO I AM
            </button>
            <div id="demo" class="collapse out">
              <button
                className="btn btn-primary navBtn"
                onClick={ProfileDisplayFuct}
              > <strong>
                Profile
                </strong>
              </button>
              <button
                className="btn btn-primary navBtn"
                onClick={ExperienceDisplayFuct}
              ><strong>
                Experience
                </strong>
              </button>
              <button
                className="btn btn-primary navBtn"
                onClick={ProjectsDisplayFuct}
              ><strong>
                Projects
                </strong>
              </button>
              <button
                className="btn btn-primary navBtn"
                onClick={ContactDisplayFuct}
              ><strong>
                Contact
                </strong>
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="bodyCoponents">
        <div className="ProfDisplay" style={{display:ProfileDisplay }}>
          <Profile />
        </div>
        <div className="ExpDisplay" style={{display: ExperienceDisplay  }}>
          <Experience />
        </div>
        <div className="ProjDisplay" style={{display: ProjectsDisplay  }}>
          <Projects />
        </div>
        <div className="ContDisplay" style={{display: ContactDisplay  }}>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Header;

// shift + option + f
