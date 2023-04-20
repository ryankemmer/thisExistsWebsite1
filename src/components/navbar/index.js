import React from 'react';
import { Link } from "react-scroll";
import '../../styles/navbar.css'
  
const Navbar = () => {
  return (
      <div class='nav'>
        <div class='nav-menu'>
            <Link
                activeClass="active"
                to="home"
                smooth={true}
                duration={500}
                class="link-text"
                >Home
            </Link>
            <Link
                    activeClass="active"
                    to="music"
                    smooth={true}
                    duration={500}
                    class="link-text"
                >Music
            </Link>
            <Link
                    activeClass="active"
                    to="videos"
                    smooth={true}
                    duration={500}
                    class="link-text"
                >Videos
            </Link>
            <Link
                    activeClass="active"
                    to="about"
                    smooth={true}
                    duration={500}
                    class="link-text"
                >About
            </Link>
            <Link
                    activeClass="active"
                    to="more"
                    smooth={true}
                    duration={500}
                    class="link-text"
                >More
            </Link>
        </div>
      </div>
  );
};
  
export default Navbar;