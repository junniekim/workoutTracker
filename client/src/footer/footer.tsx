import React from "react";
import git from "../assets/git.png";
import linkedin from "../assets/linkedIn.png";
const Footer: React.FC = () => {
  return (
    <div className="row footer mt-4">
      <hr></hr>
      <div className="col-6 text-right">
        <h1>Mooscles</h1>
        <p style={{ color: "grey" }}>Developed with love by Sijun Kim</p>
      </div>
      <div
        className="col-6 align-items-center justify-content-center"
        style={{
          display: "flex",
          flexDirection: "row",
          width: "fit-content",
        }}
      >
        <a
          href="https://github.com/junniekim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={git} alt="GitHub" height="50px" width="auto" />
        </a>
        <a
          href="https://www.linkedin.com/in/sijun-kim-4b7997258/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" height="45px" width="auto" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
