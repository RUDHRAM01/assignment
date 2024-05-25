import React from "react";
import Logo from "../assets/logo.png";
import Linkedin from "../assets/linkedin.svg";
import Twitter from "../assets/twitter.svg";
import Facebook from "../assets/face.svg";
import Instagram from "../assets/insta.svg";

function Footar() {
  return (
    <div className="footar">
      <div className="footar-main">
        <div className="footar-side1">
          <div className="footar-img-cont">
            <img src={Logo} alt="logo" style={{ height: "50px" }} />
            <span>© R Singhania</span>
          </div>
          <div className="footar-items-cont">
            <div className="footar-items">
              <h4>Get Started</h4>
              <span>About</span>
              <span>FAQ</span>
            </div>
            <div className="footar-items">
              <h4>Terms</h4>
              <span>Data privacy</span>
              <span>Terms</span>
              <span>Accessibility</span>
            </div>
            <div className="footar-items">
              <h4>Related</h4>
              <span>Find Buyer</span>
              <span>Feedback</span>
            </div>
          </div>
        </div>
        <div className="footar-side2">
          <div className="link-cont">
            <img src={Linkedin} alt="linkedin" />
          </div>
          <div className="link-cont">
            {" "}
            <img src={Twitter} alt="twitter" />
          </div>
          <div className="link-cont">
            {" "}
            <img src={Facebook} alt="facebook" />
          </div>
          <div className="link-cont">
            {" "}
            <img src={Instagram} alt="instagram" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footar;
