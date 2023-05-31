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
    element: "💘",
    hideWhenDone: true,
  };

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <div className={`card ${darkMode ? "dark" : ""}`}>
        <div
          className="toggle-btn"
          onClick={() => setDarkMode(!darkMode)}
        ></div>
        <div className="dark-mode"></div>
        <div className="card_body">
          <div className="profile text-center">
            <img src="/logo192.png" className="avatar" alt="avatar" />
            <div className="bg_content rd_12 p_8">
              <h1>Ahmad Abu Hasan</h1>
              <Typist cursor={config_cursor}>
                <span className="subtitle">سنتري | Programmer</span>
                <br />
                <span className="subtitle">
                  Backend & Android Apps Development
                </span>
              </Typist>
            </div>

            <div className="bg_content rd_12 p_8 mt-16">
              Familiar with{" "}
              <TextLoop interval={800}>
                <span className="highlight">Android Studio</span>
                <span className="highlight">Android SDK</span>
                <span className="highlight">Android NDK</span>
                <span className="highlight">PHP</span>
                <span className="highlight">MySQL</span>
                <span className="highlight">Git</span>
                <span className="highlight">Cyber-Security</span>
              </TextLoop>
            </div>
          </div>

          <div className="mt-16">
            <a
              className="btn_action bg_content"
              href="https://linkedin.com/in/ahmadabuhasan"
            >
              <BsLinkedin />
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="mt-16">
            <a
              className="btn_action bg_content"
              href="https://github.com/eby8zevin"
            >
              <BsGithub />
              <span>GitHub</span>
            </a>
          </div>
          <div className="mt-16">
            <a
              className="btn_action bg_content"
              href="https://twitter.com/eby8zevin"
            >
              <BsTwitter />
              <span>Twitter</span>
            </a>
          </div>
          <div className="mt-16">
            <a
              className="btn_action bg_content"
              href="https://www.instagram.com/eby8zevin"
            >
              <BsInstagram />
              <span>Instagram</span>
            </a>
          </div>
          <div className="mt-16">
            <a
              className="btn_action bg_content"
              href="https://www.facebook.com/profile.php?id=100001555488554"
            >
              <BsFacebook />
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>
      <ParticlesBg type="random" bg={true} />
    </div>
  );
}

export default App;
