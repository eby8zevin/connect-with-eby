import "./App.css";
import ParticlesBg from "particles-bg";
import { useState, useRef } from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
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
    card.current.scrollTop = card.current.scrollHeight;
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

          <div className="card-title">
            Familiar with{" "}
            <TextLoop interval={800}>
              <span className="text-blue">Android Studio</span>
              <span className="text-blue">Android SDK</span>
              <span className="text-blue">Android NDK</span>
              <span className="text-blue">PHP</span>
              <span className="text-blue">MySQL</span>
              <span className="text-blue">Git</span>
              <span className="text-blue">Cyber-Security</span>
            </TextLoop>
          </div>

          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://linkedin.com/in/ahmadabuhasan"
            >
              <div className="btn-action">
                <BsLinkedin className="icon" />
                <span>LinkedIn</span>
                <span></span>
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
              href="https://twitter.com/eby8zevin"
            >
              <div className="btn-action">
                <BsTwitter className="icon" />
                <span>Twitter</span>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/eby8zevin"
            >
              <div className="btn-action">
                <BsInstagram className="icon" />
                <span>Instagram</span>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/profile.php?id=100001555488554"
            >
              <div className="btn-action">
                <BsFacebook className="icon" />
                <span>Facebook</span>
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
