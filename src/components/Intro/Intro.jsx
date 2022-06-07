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
import { motion } from "framer-motion";

const Intro = () => {
  
  const transition = {
    duration: 2,
    type: "spring",
  };

  return (
    <div className="Intro">
      {/* left name side */}
      <div className="i-left" id="grid-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span>TECH Provider</span>
          <span>Data Driven Solution with Software Engineering</span>
          <span>
            Data science skills using Artificial Intelligent, Deep Learning, Machine Learning Models,
            Data Visualization, Data Modeling, Data Wrangling, Web Scraping with
            practical hands-on experience on DS portfolio project
            and Django python project & React JS project. 
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
      <div className="i-right" id="grid-right">
        <img src={VectorReact} alt="" />
        <img src={MLRobot} alt="" />


        <motion.div 
         className="floating-div"
         initial ={{top:'-38%', left: '-13.5rem'}}
         whileInView ={{top:'-38%', left: '-8.5rem'}}
         transition= {transition}>
        <img src={AIRobotSmall} alt=""/></motion.div>

        <motion.div 
         className="floating-div"
         initial ={{top: "8rem", left: "25rem" }}
         whileInView ={{top: "16rem", left: "25rem" }}
         transition= {transition}>
          <FloatDiv img={ShapeCrown} text1="Customized" text2="Solution" />
        </motion.div>

        <motion.div 
         className="floating-div"
         initial ={{top: "20rem", left: "-10rem" }}
         whileInView ={{top: "20rem", left: "-1rem" }}
         transition= {transition}>
          <FloatDiv img={ShapeThumb} text1="Updated" text2="Technology" />
        </motion.div>

      </div>
    </div>
   );
};

export default Intro;
