import React, { useState } from "react";
import "./VideoCall.css";

const VideoCall = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div
      className={`VideoCallSection ${isClicked ? "Clicked" : ""}`}
      onClick={handleClick}
    >
      <div className="VideoCallBox">
        <div className="VideoCallHeader">
          <h3 className="logo"> Sparkl</h3>
          <div className="Timer">
            Solving linear equation in one variable <span>47:21</span>{" "}
          </div>
        </div>

        <div className="FixedIcons">
          <span className="FixedIconYellow FixedIcon">
            <svg fill="black" viewBox="0 0 16 16" height="1em" width="1em">
              <path d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4.02 4.02 0 0012 8V7a.5.5 0 011 0v1zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a4.973 4.973 0 01-2.43.923V15h3a.5.5 0 010 1h-7a.5.5 0 010-1h3v-2.025A5 5 0 013 8V7a.5.5 0 011 0v1a4 4 0 004 4zm3-9v4.879l-1-1V3a2 2 0 00-3.997-.118l-.845-.845A3.001 3.001 0 0111 3z" />
              <path d="M9.486 10.607l-.748-.748A2 2 0 016 8v-.878l-1-1V8a3 3 0 004.486 2.607zm-7.84-9.253l12 12 .708-.708-12-12-.708.708z" />
            </svg>
          </span>

          <span className="FixedIconGreen FixedIcon">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
            >
              <path d="M23 7l-7 5 7 5V7z" />
              <path d="M3 5 H14 A2 2 0 0 1 16 7 V17 A2 2 0 0 1 14 19 H3 A2 2 0 0 1 1 17 V7 A2 2 0 0 1 3 5 z" />
            </svg>
          </span>
          <span className="FixedIconGreen FixedIcon">
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M408 80c-3.994 0-7.91.326-11.73.955-9.586-28.51-36.57-49.11-68.27-49.11a71.9 71.9 0 00-18.68 2.457C296.6 13.73 273.9 0 248 0s-48.7 13.79-61.4 34.44c-5.9-1.59-12.1-2.44-18.5-2.44-39.7 0-72.09 32.3-72.09 72v121.6c-5.24-1-10.6-1.6-16-1.6-.003 0 .003 0 0 0C36.43 224 0 259.2 0 304.1c0 20.29 7.558 39.52 21.46 54.45l81.25 87.24C141.9 487.9 197.4 512 254.9 512h33.08C393.9 512 480 425.9 480 320V152c0-39.7-32.3-72-72-72zm24 240c0 79.41-64.59 144-143.1 144h-34c-44.41 0-86.83-18.46-117.1-50.96l-79.76-85.63c-6.202-6.659-9.406-15.4-9.406-23.1 0-22.16 18.53-31.4 31.35-31.4 8.56 0 17.1 3.416 23.42 10.18l26.72 28.69c1.676.92 3.776 1.62 5.776 1.62 4.106 0 8.064-3.172 8.064-8.016V104c0-13.25 10.75-24 23.1-24 13.25 0 23.1 10.75 23.1 24v152C192 264.8 199.2 272 208 272s15.1-7.163 15.1-15.1L224 72c0-13.25 10.75-24 23.1-24 13.25 0 23.1 10.75 23.1 24v184c1.8 8.8 9 16 17.8 16s15.99-7.164 15.99-15.1l.008-152.2c0-13.25 10.75-24 23.1-24 13.25 0 23.1 10.75 23.1 24v152.2C352 264.8 359.2 272 368 272s15.1-7.163 15.1-15.1V152c0-13.25 10.75-24 23.1-24 13.25 0 23.1 10.75 23.1 24v168z" />
            </svg>
          </span>
          <span className="FixedIconGreen FixedIcon">
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
            >
              <path d="M14 1a1 1 0 011 1v8a1 1 0 01-1 1H4.414A2 2 0 003 11.586l-2 2V2a1 1 0 011-1h12zM2 0a2 2 0 00-2 2v12.793a.5.5 0 00.854.353l2.853-2.853A1 1 0 014.414 12H14a2 2 0 002-2V2a2 2 0 00-2-2H2z" />
            </svg>
          </span>
        </div>
        <div className="VideoCallMainScreen">
          <div
            className={`TeacherImgBox ${
              isClicked ? "AfterStartTeacherImg" : ""
            }`}
          ></div>
          <div className={`StudentImgBox`}>
            <div
              className={`StudentCard ${
                isClicked ? "AfterStartStudentImg" : ""
              }`}
            ></div>
            <div
              className={`StudentCard ${
                isClicked ? "AfterStartStudentImg" : ""
              }`}
            ></div>
            <div
              className={`StudentCard ${
                isClicked ? "AfterStartStudentImg" : ""
              }`}
            ></div>
            <div
              className={`StudentCard ${
                isClicked ? "AfterStartStudentImg" : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCall;
