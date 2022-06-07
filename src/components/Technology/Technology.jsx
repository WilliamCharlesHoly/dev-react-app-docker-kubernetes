import React from "react";
import "./Technology.css";
import { motion } from "framer-motion";
import Seaborn from "../../img/Seaborn.png";
import TensorFlow from "../../img/TensorFlow.png";
import Python from "../../img/Python.png";
import ScikitLearn from "../../img/ScikitLearn.png";
import PyCaret from "../../img/PyCaret.png";


const Technology = () => {

  return (
    <div className="TechIntro" id='Technology'>
      {/* left name side */}
      <div className="Tech-left">
        <div className="experience" id='experience'>
          <div className="achievement">
            {/* darkMode */}
            <div className="circle">1+</div>
            <span>years </span>
            <span>Experience</span>
          </div>
          <div className="achievement">
            <div className="circle">3+</div>
            <span>completed </span>
            <span>Projects</span>
          </div>
          <div className="achievement">
            <div className="circle">1+</div>
            <span>companies </span>
            <span>Work</span>
          </div>
        </div>
      </div>
      {/* right image side */}
      <div className="Tech-right">
        <div className="w-right">
          <motion.div
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            viewport={{ margin: "-40px" }}
            transition={{ duration: 3.5, type: "spring" }}
            className="w-mainCircle">
            <div className="w-secCircle">
              <img src={Seaborn} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={TensorFlow} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Python} alt="" />
            </div>{" "}
            <div className="w-secCircle">
              <img src={ScikitLearn} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={PyCaret} alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
   );
};

export default Technology;
