import '../styles/Home.css';
import { Link, animateScroll as scroll } from "react-scroll";

function Home() {

  return (
    <div>
      <div class="welcome-area">
        <section class="animated-background">
          <div id="stars1"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </section>

        <div class="logo">
          THIS<br></br>EXISTS
        </div>

        <div id="links">
          <a class="link" href="#about">
          <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >About
           </Link>
          </a>
          <a class="link" href="https://www.linkedin.com/in/johnggli" target="_blank">
            <i>&nbsp;</i>Music
          </a>
          <a class="link" href="https://www.facebook.com/johnggli" target="_blank">
            <i>&nbsp;</i>Store
          </a>
        </div>
      </div>

      <div id="about">

        <div class="logo">
            About
        </div>

      </div>


    </div>

  );
}

export default Home;
