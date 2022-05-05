import React from "react";
import "./Projects.css"
const ProjectContainer = (props)=>{
    return(
        <div className="project-container-element">
            <img src={props.img} alt="" className="project-img" />
            <h2 className="name-proyect">{props.tittle}</h2>
        </div>
    )
}

export default ProjectContainer;