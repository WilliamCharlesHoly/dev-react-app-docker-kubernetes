import React from "react";
import "./Service.css";
import { motion } from "framer-motion";
import Profile from './Profile.pdf';
import Card from "../Card/Card";
import WD from "../../img/WD.png";
import PML from "../../img/PML.png";
import RID from "../../img/RID.png";

const Service = () => {
  
  const transition = {
    duration: 2,
    type: "spring",
  };

  return (
    <div className="Serve" id='Service'>
      {/* left name side */}
      <div className="s-left" id="service-left">
        <div className="s-name">

          <span>My Awesome</span>
          <span>services</span>
          <span>Total TECH Solution for business needs</span>
          <a href={Profile} download>
            <button className="button s-button">Download Profile</button>
          </a>
          <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>

      </div>
      {/* right image side */}
      <div className="s-right" id="service-right">
       
        <motion.div 
         className="card-div"
         initial ={{top:'7%', left: '-9.5rem'}} 
         whileInView ={{top:'7%', left: '-6rem'}}
         transition= {transition}>
          <Card emoji={RID}
            heading={"Reports/Insight/Dashboard"}
            detail={"Power Bi, Tableau, Google Data Studio"}/>
        </motion.div>

        <motion.div
         className="card-div" 
         initial ={{top:'33%', left: '21.5rem'}} 
         whileInView ={{top:'33%', left: '9rem'}}
         transition= {transition}>
          <Card emoji={WD}
            heading={"Web Development"}
            detail={"Html, Css, JavaScript, React, Django"}/>
        </motion.div>

        <motion.div
         className="card-div" 
         initial ={{top:'48%', left: '-12rem'}} 
         whileInView ={{top:'48%', left: '-6rem'}}
         transition= {transition}>
          <Card
            emoji={PML}
            heading={"Predicting/Forecasting For Business Needs"}
            detail={"Data Driven Solution Using Python Packages & Machine Learning Models"}/>
        </motion.div>

      </div>
    </div>
   );
};

export default Service;
