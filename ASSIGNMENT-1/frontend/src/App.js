import React from "react";
import NavBar from "./Components/NavBar";
import Section1 from "./Components/Section1";
import ImageSketch from "./Components/ImageSketch";
import Card from "./Components/Card";
import GalleryView from "./Components/GalleryView";
import Section2 from "./Components/Section2";
import CandidateSection from "./Components/CandidateSection";
import Gallery2 from "./Components/Gallery2";
import ProjectCards from "./Components/ProjectCards";
import TeamSection from "./Components/TeamSection";

function App() {
  return (
    <>
      <NavBar />
      <Section1 />
      <ImageSketch />
      <Card />
      <GalleryView />
      <Section2/>
      <CandidateSection/>
      <Gallery2/>
      <ProjectCards/>
      <TeamSection/>
    </>
  );
}

export default App;
