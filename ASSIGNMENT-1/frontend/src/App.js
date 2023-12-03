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
import GlobalTextSection from "./Components/GlobalTextSection";
import DataSection from "./Components/DataSection";
import Section3 from "./Components/Section3";
import PreFooter from "./Components/PreFooter";
import Footer from '../src/Components/Footer';
import TemplateSection from "./Components/TemplateSection";

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
      <GlobalTextSection/>
      <DataSection/>
      <Section3/>
      <TemplateSection/>
      <PreFooter/>
      <Footer/>
    </>
  );
}

export default App;
