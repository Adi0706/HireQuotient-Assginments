import React from "react";

function CandidateSection() {
  return (
    <>
      <div className="candidate-section">
        <div className="candidate-photo-section">
          <h1
            style={{ color: "black", fontSize: "50px", fontWeight: "bolder" }}
          >
            Consolidate tools.
            <br />
            Cut costs.
          </h1>
          <img
            src="https://www.notion.so/cdn-cgi/image/format=webp,width=256/front-static/pages/home/giant-pencil-illustration.png"
            alt="pencil-image"
            style={{ width: "230px", height: "200px" }}
          ></img>
        </div>

        <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=640/front-static/pages/home/tools-strikethrough-V2.png"></img>

        <p style={{ fontSize: "30px", marginTop: "150px" }}>
          "We got rid of nearly a dozen different tools because of <br /> what
          Notion does for us."
        </p>

        <div className="box-logo">
          <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=128/front-static/shared/logos/color/metalab.png"></img>
          <p style={{ margin: "2px" }}>
            <b>Justin Watt</b>
            <br />
            Director of Ops & Marketing, MetaLab
          </p>
        </div>
      </div>
    </>
  );
}

export default CandidateSection;
