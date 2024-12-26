import React from 'react';
import Card from '../Card/Card';
import "./Project.css";
import va from "../../assets/va.png"
import fw from "../../assets/fw.png"
import cb from "../../assets/cb.png"
import tti from "../../assets/tti.png"
import br from "../../assets/br.png"
import ise from "../../assets/ise.png"

function Project() {
  return (
    <div id="project">
        <h1 id="para">2+ YEARS EXPERIENCE IN PROJECTS</h1>
        <div className="slider">
          <Card title="VIRTUAL ASSISTANT" image={va} />
          <Card title="AI POWERED FITNESS WEBSITE" image={fw} />
          <Card title="AI CHAT APPS" image={cb} />
          <Card title=" AI TEXT TO IMAGE DENERATUOR" image={tti} />
          <Card title="REMOVE IMAGE BACKGROUND & DAWNLOAD PNG " image={br } />
          <Card title="YOUR OWN IMAGE SEARCH ENGINE" image={ise } />
        </div>
    </div>
  );
}

export default Project;
