import React from "react";
import '../styles/Subpages.css';
import Navbar from '../components/navbar';
import Stars from '../components/stars';
import { Link } from "react-router-dom";

function Paradise() {

  return (
    <div>
      <div class="paradise" id="home">
        <Stars/>

        <div class="logo">
          Paradise
        </div>
        <img src={require('../assets/rain.jpeg')}/>

        <div id="links">
          <Link className="link" target="_blank">Spotify</Link>
          <a className="link" target="_blank">Apple Music</a>
          <a className="link" target="_blank">Youtube</a>
          <a className="link" target="_blank">Bandcamp</a>
        </div>
      </div>
    </div>
  );
}

export default Paradise;
