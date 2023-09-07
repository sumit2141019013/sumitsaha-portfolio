
import React, { useEffect } from "react";
import "./Home.css";

import { Typography } from "@mui/material";
import TimeLine from "../timeline/TimeLine";
import {

  SiHtml5,
  SiCss3,
  // SiJava,
  SiNodedotjs,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiJavascript
} from "react-icons/si";

import YoutubeCard from "../youtubecard/YoutubeCard";
import { Link } from "react-router-dom";
import { MouseOutlined } from "@mui/icons-material";

const Home = ({ timelines, youtubes, skills }) => {
  useEffect(() => {
    return window.addEventListener("scroll", () => {
      const skillsBox = document.getElementById("homeskillsBox");
      if (window.scrollY > 1400) {
        skillsBox.style.animationName = "homeskillsBoxAnimationOn";
      } else {
        skillsBox.style.animationName = "homeskillsBoxAnimationOff";
      }
    });
  }, []);

  return (
    <div className="home">
      {/* <canvas className="homeCanvas"></canvas> */}
      

      <div className="homeCanvasContainer">
        <Typography variant="h1">
          <p>S</p>
          <p>U</p>
          <p>M</p>
          <p>I</p>
          <p>T</p>
         
        </Typography>

        <div className="homeCanvasBox">
          <Typography variant="h2">-CODER</Typography>
          <Typography variant="h2">-STUDENT</Typography>
          <Typography variant="h2">-DEVELOPER</Typography>
          <Typography variant="h2">-CODING ENTHUSIAST </Typography>
          <Typography variant="h2">-ENGINEER</Typography>
        </div>

        <Link to="/projects">VIEW WORK</Link>
      </div>

      <div className="homeScrollBtn">
        <MouseOutlined />
      </div>

      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={timelines} />
      </div>

      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>

       <div className="homeCubeSkills">

<div className="homeCubeSkillsFaces homeCubeSkillsFace1">
<img src={skills.image1.url} alt="Face1" />

</div>
<div className="homeCubeSkillsFaces homeCubeSkillsFace2">
<img src={skills.image2.url} alt="Face2" />

</div>
<div className="homeCubeSkillsFaces homeCubeSkillsFace3">
<img src={skills.image3.url} alt="Face3" />

</div>
<div className="homeCubeSkillsFaces homeCubeSkillsFace4">
<img src={skills.image4.url} alt="Face4" />

</div>
<div className="homeCubeSkillsFaces homeCubeSkillsFace5">
<img src={skills.image5.url} alt="Face5" />

</div>
<div className="homeCubeSkillsFaces homeCubeSkillsFace6">
<img src={skills.image6.url} alt="Face6" />

</div>
        </div>

        <div className="cubeShadow"></div>

        <div className="homeskillsBox" id="homeskillsBox">
          {/* <SiJava/> */}
          <SiHtml5 />
          <SiTailwindcss />
          <SiBootstrap />
          <SiCss3 />
          <SiJavascript />
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs/>
        </div>
      </div>

      <div className="homeYoutube">
        <Typography variant="h3">CERTIFICATIONS</Typography>

        <div className="homeYoutubeWrapper">
          {youtubes.map((item) => (
            <YoutubeCard
              image={item.image.url}
              title={item.title}
              url={item.url}
              id={item._id}
              key={item._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;