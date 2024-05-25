import React from "react";
import locIcon from "../assets/loc.svg";
import boxIcon from "../assets/box.svg";

function Landing() {
  return (
    <div className="landing-container">
      <h1>Are You a Supplier?</h1>
      <span className="explore">Explore Matching Opportunities.</span>
      <div className="landing-middle">
        <div className="input-group">
          <img src={boxIcon} alt="box" />
          <input type="text" placeholder="Search your required service here" />
        </div>
        <div className="input-group">
          <img src={locIcon} alt="location" />
          <input type="text" placeholder="Search your desired location here" />
        </div>
        <button className="search-btn">Search</button>
      </div>
      <div className="landing-middle-se">Are you a buyer? <span className="underline">Click here if you are looking to post a requirements</span></div>
    </div>
  );
}

export default Landing;
