import React from "react";
import ProjectSection_img_1 from '../Media/Images/ProjectSection_img_1.png';
import ProjectSection_img_2 from '../Media/Images/ProjectSection_img_2.png';

function ProjectCards() {
  return (
    <>
      <div className="project-card">
        <div className="Cards-proj">
        <div className="card_1">
          <p>👁️</p>
          <p>
            <b>Visualize, filter & sort any way you want</b>
          </p>
          <p>
            Show only tasks assigned to you, or items marked as urgent. Break{" "}
            <br />
            down any project in the way that’s most helpful to you.
          </p>
          <img src={ProjectSection_img_1} alt="image-1" style={{width:"400px"}}></img>
        </div>
        <div className="card_2">
          <p>🎨</p>
          <p>
            <b>Visualize, filter & sort any way you want</b>
          </p>
          <p>
            Show only tasks assigned to you, or items marked as urgent. Break{" "}
            <br />
            down any project in the way that’s most helpful to you.
          </p>
          <img src={ ProjectSection_img_2} alt="image-1" style={{width:"400px",height:"320px"}}></img>
        </div>
        </div>
        <div className="proj-text" style={{textAlign:"center",fontSize:"25px"}}>
            <p>"
Notion adapts to your needs. It’s as minimal or as <br/> powerful as you need it to be."</p>
        </div>
        <div className="box-logo">
          <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=48/front-static/shared/logos/color/match-group.png"></img>
          <p style={{ margin: "2px" }}>
            <b>Rahim Makani</b>
            <br />
            Director of Product, Matchgroup.
          </p>
        </div>
      </div>
    </>
  );
}

export default ProjectCards;
