import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css";
import backImage from "../assets/backimage.avif";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="book-container">
        <img src={backImage} alt="Notebook" />
        <div className="text" contentEditable={true}>
          <br />
          <center>
            ✨Welcome to Culinary Suite✨
            <br />
            <br />
            <i>
              Where recipes meet creativity,
              <br />
              and every dish tells a story.
              <br />
              <br />
              Bon Appétit! 🍴
            </i>
            <br />
            <br />
            <button className="btn" onClick={() => navigate("/login")}>
              <i>Log In</i>
            </button>
            <button className="btn" onClick={() => navigate("/signup")}>
              <i>Sign Up</i>
            </button>
          </center>
        </div>
      </div>
    </>
  );
}

export default LandingPage;