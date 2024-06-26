import React, { useEffect, useState } from "react";
import img1 from "../../assets/homeslider.jpg";
import img2 from "../../assets/homeslider2.jpg";
import userimg from "../../assets/user.jpg";
import "./Home.css";

import { Fade, Zoom } from "@mui/material";

const sliderImages = [img1, img2];

const Home = () => {
  const [index, setIndex] = useState(0);
  console.log(index);

  const chatMessages1 = [
    {
      name: "Perspective AI",
      role: "on behalf of Elon",
      message:
        "Hey 👋 Mike! What was challenging about the Starlink installation process?",
    },
    {
      name: "Perspective AI",
      role: "on behalf of Elon",
      message:
        "Hey 👋 Mike! What was challenging about the Starlink installation process?",
    },
    {
      name: "Perspective AI",
      role: "on behalf of Elon",
      message:
        "Hey 👋 Mike! What was challenging about the Starlink installation process?",
    },
  ];
  const chatMessages2 = [
    {
      name: " 2nd Perspective AI",
      role: "on behalf of Elon",
      message:
        "Hey 👋 Mike! What was challenging about the Starlink installation process?",
    },
    {
      name: "Perspective AI",
      role: "on behalf of Elon",
      message:
        "Hey 👋 Mike! What was challenging about the Starlink installation process?",
    },
    {
      name: "Perspective AI",
      role: "on behalf of Elon",
      message:
        "Hey 👋 Mike! What was challenging about the Starlink installation process?",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

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
          <div className="slider">
            {sliderImages.map((image, idx) => (
              <Fade in={index === idx} key={idx} timeout={1000}>
                <div
                  key={idx}
                  className="sliderImageContainer"
                  style={{ backgroundImage: `url(${image})` }}
                >
                  {index === 0 && (
                    <div className="sliderTextBoxArea">
                      {chatMessages1.map((message, chatIdx) => (
                      <Fade in={index === idx} key={chatIdx} timeout={1000}>
                          <div key={chatIdx} className="ChatBox">
                            <div className="chatImgName">
                              <div className="ChatAvatar">
                                <img src={userimg} alt="User Avatar" />
                              </div>
                              <div className="CharName">
                                <h3>{message.name}</h3>
                                <p>{message.role}</p>
                              </div>
                            </div>
                            <p className="ChatParagraph">{message.message}</p>
                          </div>
                        </Fade>
                      ))}
                    </div>
                  )}
                  {index === 1 && (
                    <div className="sliderTextBoxArea">
                      {chatMessages2.map((message, chatIdx) => (
                        <Fade in={message} timeout={1000}>
                          <div key={chatIdx} className="ChatBox">
                            <div className="chatImgName">
                              <div className="ChatAvatar">
                                <img src={userimg} alt="User Avatar" />
                              </div>
                              <div className="CharName">
                                <h3>{message.name}</h3>
                                <p>{message.role}</p>
                              </div>
                            </div>
                            <p className="ChatParagraph">{message.message}</p>
                          </div>
                        </Fade>
                      ))}
                    </div>
                  )}
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
