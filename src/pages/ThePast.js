import React from "react";
import '../styles/Subpages.css';
import Stars from '../components/stars';

function ThePast() {

  return (
    <div>
      <div class="subpageBackground" id="home">
        <Stars/>

        <div class="logo">
          The Past
        </div>
        <img src={require('../assets/albumArt/ThePast.jpeg')}/>

        <div id="links">
          <a className="link" target="_blank">Listen On SoundCloud</a>
        </div>
      </div>
    </div>
  );
}

export default ThePast;