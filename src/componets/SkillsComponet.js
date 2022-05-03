import React from "react";
import "./Skills.css"

const SkillsComponent = (props)=>{
    return(
        <div className="container-content-skill">

            <img className="Skills-img" src={props.img} alt="logo" />
            <p className="Skills-text">{props.tittle}</p>
        </div>
        
    )
}

export default SkillsComponent;