import React from "react";
import sliderImg from "../../assets/homeslider.jpg";
import "./Home.css";
const Home = () => {
  return (
    <div className="HomeSectionParent">
      <div className="HomeSection">
        <div className="HomeHeadingSection">
          <h1 className="HomeHeadingMain">
            <span className="HomeHeadingMainGradient">
              Gather Feedback with AI
            </span>
            <br />
            <div className="whiteDyanmicHeading">
              <div>From Your</div>
              <div className="shiftTextBox">
                <span className="shiftText">Customers</span>
                <span className="shiftText">Teammates</span>
                <span className="shiftText">Community</span>
                <span className="shiftText">Audiance</span>
              </div>
            </div>
          </h1>

          <p className="homePagePara">
            Conduct quality AI-mediated conversations with customers and
            teammates to get their invaluable input
          </p>

          <div className="HomebtnGroup">
            <button className="activeHomeBtn">
              Create an interview{" "}
              <svg fill="white" viewBox="0 0 16 16" height="1em" width="1em">
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z"
                />
              </svg>
            </button>
            <button className="lightHomeBtn">Try and interview</button>
          </div>
        </div>
        <div className="HomeImgSliderSection">
          <div className="imgSliderArea">
            <img style={{ width: "200px" }} src={sliderImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
