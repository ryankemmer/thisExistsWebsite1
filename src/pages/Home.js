import React from "react";
import '../styles/Home.css';
import Navbar from '../components/navbar';
import Stars from '../components/stars';
import YoutubeEmbed from '../components/youtubeEmbed';
import { Link } from "react-scroll";
import { Link as RRLink } from "react-router-dom";
import { FaMusic } from 'react-icons/fa';

function Home() {

  return (
    <div>
      <div class="welcome-area" id="home">
        <section class="animated-background">
          <div id="stars1"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </section>

        <div class="logo">
          THIS<br></br>EXISTS
        </div>

        <div id="links">
          <Link className="link"
                activeClass="active"
                to="music"
                smooth={true}
                duration={500}
              >Music
           </Link>
          <Link
                className="link"
                activeClass="active"
                to="videos"
                smooth={true}
                duration={500}
              >Videos
           </Link>
           <Link
                class="link"
                activeClass="active"
                to="about"
                smooth={true}
                duration={500}
              >About
           </Link>
           <Link
                class="link"
                activeClass="active"
                to="more"
                smooth={true}
                duration={500}
              >More
           </Link>
        </div>
      </div>

      <div id="music">
        <Stars></Stars>
        <Navbar></Navbar>
        <div class="logo-sub">
            Music
        </div>
        <div id="songs">
          <RRLink class="songText" target="_blank" to="/paradise"><FaMusic />   Paradise</RRLink>
          <RRLink class="songText"><FaMusic />   3 AM</RRLink>
          <RRLink class="songText"><FaMusic />   Coma</RRLink>
          <RRLink class="songText"><FaMusic />   The Past</RRLink>
        </div>
      </div>

      <div id="videos">
      <Stars></Stars>
      <Navbar></Navbar>
        <div class="logo-sub">
            Videos
        </div>
        <div class="video-container">
          <YoutubeEmbed embedId="3ICDYsIveM4" />
        </div>
      </div>

      <div id="about">
      <Stars></Stars>
      <Navbar></Navbar>
        <div class="logo-sub">
            About
        </div>
        <div class="aboutText">
          <br></br>
          <br></br>
          <p>“This Exists” is a raw, rhythmic and handcrafted completely out of a home studio. 
            The independent project is lead by multinstrumentalist Ryan Kemmer,
             who is based out of Phoenix, Arizona.</p>
          <p>The project began just from messing around with keyboards, guitars, and drums in my house.</p>
            <p>The composition style of this project is something I have worked on my whole life. I try to make music that is  melodically thought provoking, yet rhythmic-centric. 
            The indie rock "sound" is something I have cultivated over the last couple years playing and recording indie rock bands. 
          </p>
          <p>Stay tuned for new music in 2023.</p>
        </div>
      </div>

      <div id="more">
      <Stars></Stars>
      <Navbar></Navbar>
        <div class="logo-sub">
            More
        </div>
        <div id="links">
        <a class="link">TikTok</a>
        <a class="link">YouTube</a>
        <a class="link">Instagram</a>
        </div>
      </div>

    </div>
  );
}

export default Home;
