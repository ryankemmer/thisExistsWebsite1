import React from "react";
import '../styles/Subpages.css';
import Navbar from '../components/navbar';
import Stars from '../components/stars';
import { Link } from "react-router-dom";

function BleedingOut() {

  return (
    <div>
      <div class="subpageBackground" id="home">
        <Stars/>

        <div class="logo">
          Bleeding Out
        </div>
        <img src={require('../assets/albumArt/Bleeding Out.jpeg')}/>

        <div id="links">
          <a className="link" target="_blank">Listen On SoundCloud</a>
        </div>
      </div>
    </div>
  );
}

export default BleedingOut;
