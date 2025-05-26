import React from "react";
import clock from "../imgs/clock.svg";
import money from "../imgs/money.svg";
import teamwork from "../imgs/teamwork.svg";
import diaphragm from "../imgs/diaphragm.svg";
import home2 from "../imgs/home2.png";

function ServiceSection() {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>quality</span> services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
        <div className="image">
          <img src={home2} alt="professional camera" />
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
