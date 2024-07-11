// BottomComponent.js
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./BottomComponent.css";

const BottomComponent = () => {
  const navigate = useNavigate(); // useNavigate hook for navigation

  const redirectToContactForm = () => {
    // Use the navigate function to navigate to the contact form page
    navigate("/joinus");
  };

  return (
    <div className="bottom-component datekeliye">
      📢
      <p className="joinuspara">Join Our Team</p>
      <button className="joinusbtn" onClick={redirectToContactForm}>Join</button>
    </div>
  );
};

export default BottomComponent;
