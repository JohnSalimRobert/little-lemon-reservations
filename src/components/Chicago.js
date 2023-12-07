import React from "react";
import chicago1 from "../images/chicago1.png";
import chicago2 from "../images/chicago2.png"

function Chicago() {
  return (
    <div>
      <div className="chicagoSection">
        <div className="chicago-section1">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.
          </p>
        </div>
        <div className="chicago-section2">
          <div className="chicago chicago-img1">
            <img src={chicago1} alt="Little Lemon owners" />
            </div>
          <div className="chicago chicago-img2">
            <img src={chicago2} alt="Little Lemon owners" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Chicago;
