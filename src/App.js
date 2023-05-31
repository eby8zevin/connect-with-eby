import ParticlesBg from "particles-bg";
import "./App.css";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function App() {
  return (
    <div>
      <div className="card">
        <div className="card_body">
          <div className="profile text-center">
            <img src="/logo192.png" className="avatar" alt="avatar" />
            <div className="bg_content rd_12 p_8">
              <h1>Ahmad Abu Hasan</h1>
              <p>Android Developer</p>
            </div>
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
              href="https://www.instagram.com/eby8zevin"
            >
              <BsInstagram />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
      <ParticlesBg type="thick" bg={true} />
    </div>
  );
}

export default App;
