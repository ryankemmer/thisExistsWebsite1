import React from "react";
import '../styles/Subpages.css';
import Stars from '../components/stars';

function ThreeAM() {

  return (
    <div>
      <div class="subpageBackground" id="home">
        <Stars/>

        <div class="logo">
          3 AM
        </div>
        <img src={require('../assets/albumArt/3am.jpeg')}/>

        <div id="links">
          <a className="link" target="_blank">Listen On SoundCloud</a>
        </div>
      </div>
    </div>
  );
}

export default ThreeAM;