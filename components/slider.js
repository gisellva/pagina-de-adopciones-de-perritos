import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import style from '../styles/Layaut.module.css'
import Inicio from "./inicio";
import Adopcion from "./adopcion";
import Footer from "./footer";


const anchors = ["inicio", "adopcion","pie" ];

const Slider = () => (
  <ReactFullpage
  sectionsColor={[,"#e8c39e","#e8c39e" ]}
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    navigat
    loopBottom={true}
    render={() => {
    return (
        <div className={style.hv}>
          <div className="section">
            <Inicio />
          </div>
          <div className="section">
            <Adopcion />
          </div>
         <div className="section">
          <Footer/>
         </div>
        </div>
      );
    }}
  />
);
export default Slider;