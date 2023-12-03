import React from 'react';
import templateimg from '../Media/template_image.png';

function TemplateSection() {
  return (
    <>
      <div className="template-section">
        <span className="head-text">
          <p style={{ fontSize: "40px", fontWeight: "bolder" }}>
            Endless Ways to Use it .<br />
            <a href='' style={{ fontSize: "15px", textDecoration: "none", color: "blue", textAlign: "center", marginLeft: "180px" }}>Browse all templates.</a>
          </p>
          <img src='https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/shared/illustrations/blocks/topPeekJ.png' alt="illustration" style={{marginRight:"400px",zIndex:"1"}}/>
        </span>
        <div className="template-body">
          <div className="template-card">
            <p>🏠</p>
            <p><b>Company Wiki</b></p> <br />
            <a href='' style={{ textDecoration: "none" }}>Get template</a>
            <img src={templateimg} alt='temp-img' style={{ marginLeft: "39px", borderRadius: "12px", margin: "10px", width: "490px", height: "390px" }} />
          </div>
          <div className="template-grid">
            
            <div className="grid-item"><b>Product Roadmap</b><br/><a href='' style={{textDecoration:'none'}}>Get template</a></div>
            <div className="grid-item"><b><p></p>ORKs</b><br/><a href='' style={{textDecoration:'none'}}>Get template</a></div>
            
            <div className="grid-item"><b>Meeting notes</b><br/><a href='' style={{textDecoration:'none'}}>Get template</a></div>
            <div className="grid-item"><b>Vaccation Planner</b><br/><a href='' style={{textDecoration:'none'}}>Get template</a></div>

            <div className="grid-item"><b>Editorial calender</b><br/><a href='' style={{textDecoration:'none'}}>Get template</a></div>
            <div className="grid-item"><b>Habit tracker</b><br/><a href='' style={{textDecoration:'none'}}>Get template</a></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TemplateSection;
