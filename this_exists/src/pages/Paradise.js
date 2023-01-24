import '../styles/LinkPage.css';

function Paradise() {
  return (
    <div className="App">
      <section class="animated-background">
        <div id="stars1"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </section>

      <a id="profilePicture" href="#popup">
      </a>

      <div class="overlay" id="popup">
        <div class="popup">
          <div class="popup-quote">
            But... the sensation that I've lost something lingers for a longtime after I wake up.
          </div>
          <a class="popup-close" onclick="history.back()">&times;</a>
        </div>
      </div>

      <div id="userName">
        This Exists
      </div>

      <div id="links">
        <a class="link" href="https://github.com/johnggli" target="_blank">
          <i class="fab fa-github">&nbsp;</i>Github
        </a>
        <a class="link" href="https://www.linkedin.com/in/johnggli" target="_blank">
          <i class="fab fa-linkedin">&nbsp;</i>Linkedin
        </a>
        <a class="link" href="https://www.facebook.com/johnggli" target="_blank">
          <i class="fab fa-facebook">&nbsp;</i>Facebook
        </a>
        <a class="link" href="https://www.instagram.com/johnggli" target="_blank">
          <i class="fab fa-instagram">&nbsp;</i>Instagram
        </a>
        <a class="link" href="https://twitter.com/johnggli" target="_blank">
          <i class="fab fa-twitter">&nbsp;</i>Twitter
        </a>
        <a class="link" href="https://myanimelist.net/profile/johnggli" target="_blank">
          <i class="fa fa-play-circle">&nbsp;</i>MyAnimeList
        </a>
      </div>

      <div id="hashtag">
        This Exists
      </div>
    </div>
  );
}

export default Paradise;
