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
                <span className="shiftText">community</span> 
                <span className="shiftText">Audiance</span> 
              </div>
            </div>
          </h1>

          <p className="homePagePara">
            Conduct quality AI-mediated conversations with customers and
            teammates to get their invaluable input
          </p>

          <div className="HomebtnGroup">
            <button className="activeHomeBtn">Create an interview</button>
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
