import React from "react";
import ProjectContainer from "./ProjectContainer";
import "./Projects.css"
import ManhuaOnline from "../componets/images/Manhua-Online-page.png"
const Projects = ()=>{
    return(
        <div className="Projects-main-container">
            <p id="project-tittle">PROJECTS</p>
            <div  className="container-element">
                <ProjectContainer
                img={ManhuaOnline}
                tittle="Manhua Online"
                />
                <ProjectContainer
                img="https://www.geekmi.news/__export/1632595844070/sites/debate/img/2021/09/25/zero2.jpg_191073497.jpg"
                tittle="Menu restaurant"
                />
                <ProjectContainer
                img="https://www.geekmi.news/__export/1632595844070/sites/debate/img/2021/09/25/zero2.jpg_191073497.jpg"
                tittle="Mini Projects js"
                />
            </div>
        </div>
    )
}

export default Projects;