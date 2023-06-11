import "./App.css";
import ParticlesBg from "particles-bg";
import { useState, useRef } from "react";
import {
  BsGithub,
  BsGooglePlay,
  BsQrCodeScan,
  BsYoutube,
  BsSpotify,
} from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import {
  FaReact,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaBriefcase,
} from "react-icons/fa";
import Typist from "react-typist";
import TextLoop from "react-text-loop";

function App() {
  const config_cursor = {
    show: true,
    blink: true,
    element: " ✏️",
    hideWhenDone: true,
  };

  const [darkMode, setDarkMode] = useState(false);
  const card = useRef(null);

  function toggle() {
    setDarkMode(!darkMode);
  }

  function HandleScrollDown() {
    card.current.scrollTo({
      top: card.current.scrollHeight,
      behavior: "smooth",
    });
  }

  return (
    <div className="d-flex content-center">
      <div className={`card ${darkMode ? "dark-theme" : ""}`}>
        <div
          className={`toggle ${darkMode ? "light" : "dark"}`}
          onClick={() => toggle()}
        ></div>
        <div className={`bg-dark ${darkMode ? "active" : ""}`}></div>
        <div ref={card} className="card-body custom-scrollbar">
          <div>
            <img
              className="card-avatar"
              src="https://github.com/eby8zevin.png"
              alt="avatar"
            />
          </div>

          <div className="card-title">
            <Typist startDelay={100} cursor={config_cursor}>
              Ahmad Abu Hasan <br />
              <Typist.Delay
                ms={500}
                hideWhenDone={true}
                hideWhenDoneDelay={true}
              />
              <span className="subtitle">سنتري | Programmer</span>
              <br />
              <Typist.Delay
                ms={100}
                hideWhenDone={true}
                hideWhenDoneDelay={true}
              />
              <span className="subtitle">
                Backend &amp; Android Apps Development
              </span>
            </Typist>
          </div>

          <div className="social-icons">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://linkedin.com/in/ahmadabuhasan"
            >
              <div className="btn-social">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/eby8zevin"
            >
              <div className="btn-social">
                <FaTwitter />
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/eby8zevin"
            >
              <div className="btn-social">
                <FaInstagram />
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/profile.php?id=100001555488554"
            >
              <div className="btn-social">
                <FaFacebookF />
              </div>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.tiktok.com">
              <div className="btn-social">
                <FaTiktok />
              </div>
            </a>
          </div>

          <div className="card-title">
            Familiar with{" "}
            <TextLoop interval={1000}>
              <span className="text-blue">Android Studio</span>
              <span className="text-blue">Android SDK</span>
              <span className="text-blue">Android NDK</span>
              <span className="text-blue">Java</span>
              <span className="text-blue">Kotlin</span>
              <span className="text-blue">Flutter</span>
              <span className="text-blue">Dart</span>
              <span className="text-blue">HTML5</span>
              <span className="text-blue">CSS3</span>
              <span className="text-blue">JavaScript</span>
              <span className="text-blue">PHP</span>
              <span className="text-blue">MySQL</span>
              <span className="text-blue">Node.js</span>
              <span className="text-blue">React.js</span>
              <span className="text-blue">Web Server</span>
              <span className="text-blue">RESTful API</span>
              <span className="text-blue">CI / CD</span>
              <span className="text-blue">Git</span>
              <span className="text-blue">Cyber-Security</span>
            </TextLoop>
          </div>

          <div>
            <a target="_blank" rel="noreferrer" href="https://google.com">
              <div className="btn-action">
                <FaBriefcase className="icon" />
                <span>Portfolio</span>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/eby8zevin"
            >
              <div className="btn-action">
                <BsGithub className="icon" />
                <span>GitHub</span>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://play.google.com/store/apps/dev?id=6964311956052920659"
            >
              <div className="btn-action">
                <BsGooglePlay className="icon" />
                <span>Play Store</span>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://play.google.com/store/apps/details?id=com.ahmadabuhasan.qrbarcode"
            >
              <div className="btn-action">
                <BsQrCodeScan className="icon" />
                <span>App - QR Barcode</span>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/@ahmadabuhasan118"
            >
              <div className="btn-action">
                <BsYoutube className="icon" />
                <span>YouTube</span>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://open.spotify.com/user/gr3y7pr12w9ol2dy2ccdb10e7"
            >
              <div className="btn-action">
                <BsSpotify className="icon" />
                <span>Spotify</span>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/eby8zevin/connect-with-eby"
            >
              <div className="btn-action">
                <FaReact className="icon" />
                <span>Source code this bio.link</span>
              </div>
            </a>
          </div>
        </div>
        <div className="scroll-info" onClick={HandleScrollDown}>
          <span className="scroll-text">Scroll Down</span>
          <AiOutlineDown size={12} />
        </div>
      </div>

      <ParticlesBg type="random" bg={true} />
    </div>
  );
}

export default App;
