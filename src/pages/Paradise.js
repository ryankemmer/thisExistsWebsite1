import React from "react";
import '../styles/Subpages.css';
import Navbar from '../components/navbar';
import Stars from '../components/stars';
import { Link } from "react-router-dom";

function Paradise() {

  return (
    <div>
      <div class="subpageBackground" id="home">
        <Stars/>

        <div class="logo">
          Paradise
        </div>
        <img src={require('../assets/albumArt/Paradise.jpeg')}/>

        <div id="links">
        <a className="link" target="_blank">Listen On SoundCloud</a>
        </div>
      </div>
    </div>
  );
}

export default Paradise;
