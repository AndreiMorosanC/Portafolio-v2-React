import React from "react";
import SkillsComponent from "./SkillsComponet";

const Skills = ()=>{
    return(
        <div id='Skill-container'> 
            <h1 id="Title-h1">My Skills</h1>
            <div className='Skill-container-items'>
                
              <SkillsComponent 
                tittle="JAVASCRIPT" 
                img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
              />
              <SkillsComponent 
                tittle="REACT" 
                img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png"
              />
              <SkillsComponent 
              tittle="CSS" 
              img="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Devicon-css3-plain.svg/1024px-Devicon-css3-plain.svg.png"
              />
              <SkillsComponent 
                tittle="HTML" 
                img="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png"
              />
              <SkillsComponent 
                tittle="PHOTOSHOP" 
                img="data:image/png;base64,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"
              />
              <SkillsComponent 
              tittle="DAVINCI" 
              img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/DaVinci_Resolve_17_logo.svg/1200px-DaVinci_Resolve_17_logo.svg.png"
              />
              
            </div>
        </div>
    )
}
export default Skills;