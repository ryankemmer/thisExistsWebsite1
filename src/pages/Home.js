import React from "react";
import '../styles/Home.css';
import Navbar from '../components/navbar';
import Stars from '../components/stars';
import YoutubeEmbed from '../components/youtubeEmbed';
import SpotifyPlayer from 'react-spotify-player';
import { Link } from "react-scroll";
import { Link as RRLink } from "react-router-dom";
import { FaMusic } from 'react-icons/fa';

function Home() {

  const size = {
    width: '100%',
    height: '100%',
  };

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
        <div class="spotify-container">
        <SpotifyPlayer
            uri="spotify:artist:6fWV1FY6CUofKI4qcaHItc"
            size= {size}
            view='list'
            theme='black'
          />
        </div>
        </div>
      </div>

      <div id="videos">
      <Stars></Stars>
      <Navbar></Navbar>
        <div class="logo-sub">
            Videos
        </div>
        <div class="video-container">
          <YoutubeEmbed embedId="RLzBcq_G0_Y" />
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
            <p>The composition style of this project is something I have worked on my whole life. I make music that is centered around rhythm but also melodically thought provoking. 
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
        <a class="link" href="https://www.tiktok.com/@this____exists">TikTok</a>
        <a class="link" href="https://www.youtube.com/@ThisExistsMusic">YouTube</a>
        <a class="link"href="https://www.instagram.com/ryankemmer_">Instagram</a>
        </div>
      </div>

    </div>
  );
}

export default Home;
