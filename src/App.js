import React, { useState } from "react";
import ParticlesBg from "particles-bg";
import "./App.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
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

  return (
    <div className="d-flex content-center">
      <div className={`card ${darkMode ? "dark-theme" : ""}`}>
        <div
          className={`${darkMode ? "toggle light" : "toggle dark"}`}
          onClick={() => setDarkMode(!darkMode)}
        ></div>
        <div className={`bg-dark ${darkMode ? "active" : ""}`}></div>
        <div className="card-body">
          <div>
            <img
              src="https://github.com/eby8zevin.png"
              className="card-avatar"
              alt="avatar"
            />
          </div>

          <div className="card-title">
            Ahmad Abu Hasan
            <Typist cursor={config_cursor}>
              <span className="subtitle">سنتري | Programmer</span>
              <br />
              <span className="subtitle">
                Backend & Android Apps Development
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
                <BsLinkedin />
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
                <BsGithub />
                <span>GitHub</span>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/eby8zevin"
            >
              <div className="btn-action">
                <BsTwitter />
                <span>Twitter</span>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/eby8zevin"
            >
              <div className="btn-action">
                <BsInstagram />
                <span>Instagram</span>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/profile.php?id=100001555488554"
            >
              <div className="btn-action">
                <BsFacebook />
                <span>Facebook</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <ParticlesBg type="random" bg={true} />
    </div>
  );
}

export default App;
