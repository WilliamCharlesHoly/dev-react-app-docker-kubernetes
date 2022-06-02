import React from "react";
import "./Intro.css";
import VectorReact from "../../img/VectorReact.png";
import MLRobot from "../../img/ML-Robot.png";
import AIRobotSmall from "../../img/AIRobotSmall.png";
import ShapeThumb from "../../img/ShapeThumb.png";
import ShapeCrown from "../../img/ShapeCrown.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import FloatDiv from "../FloatingDiv/FloatingDiv";

const Intro = () => {
  
  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span>TECH Provider</span>
          <span>Data Driven Solution with Software Engineering</span>
          <span>
            <h1>Data science skills using Artificial Intelligent, Deep Learning, Machine Learning Models,
            Data Visualization, Data Modeling, Data wrangling with
            practical hands-on experience on DS portfolio project
            and Django python project & React JS project.
            </h1>
          </span>
        </div>

        {/* social icons */}
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={VectorReact} alt="" />
        <img src={MLRobot} alt="" />


        <div style={{top: '-58%', left: '-8.5rem' }}>
          <img src={AIRobotSmall} />
        </div>

        <div style={{top: "54%", left: "70%" }}>
          <FloatDiv img={ShapeCrown} text1="Customized" text2="Solution" />
        </div>

        <div style={{top: '20rem', left: '3rem' }}>
          <FloatDiv img={ShapeThumb} text1="Updated" text2="Technology" />
        </div>

      </div>
    </div>
   );
};

export default Intro;
