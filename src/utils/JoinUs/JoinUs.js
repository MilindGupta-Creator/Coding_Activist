import React from "react";
import {
  FaWhatsapp,
  FaTelegram,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import "./JoinUs.css";
import profilepic from "../../assets/profile-pic.png";

const JoinUs = () => {
  const TelegramGroupLink = "https://t.me/codingactivist"; // Replace with your actual Telegram group link
  const WhatsAppGroupLink = "https://chat.whatsapp.com/JX84IIrp8axHuLv6AAOrOe"; // Whatsapp link
  const LinkedInProfileLink = "https://www.linkedin.com/in/milindguptaji/"; // LinkedIn profile link


  const handleJoinClick2nd = () => {
    window.open(TelegramGroupLink, "_blank");
  };

  const handleJoinClick1st = ()=>{
    window.open(WhatsAppGroupLink, "_blank");
  };

   const handleProfileClick = () => {
    window.open(LinkedInProfileLink, "_blank");
  };

  return (
    <div className="flex 
      bg-[#181818]
     text-white " style={{
      height:"91vh"
    }}>
      <div className="bg-[#333333] rounded-2xl cursor-pointer m-12 mr-10 " style={{
        height:"190px" , width:"190px" 
      }} onClick={handleJoinClick1st} >
        <FaWhatsapp size={80} style={{
            margin:"3rem"
        }}/>
      </div>
      <div className="bg-[#333333] rounded-2xl cursor-pointer m-12 mr-10 " style={{
        height:"190px" , width:"190px"
      }} onClick={handleJoinClick2nd} >
        <FaTelegram size={80} style={{
            margin:"3rem"
        }}/>
      </div>
      <div className="bg-[#333333] rounded-2xl cursor-pointer m-12 mr-10 " style={{
        height:"190px" , width:"190px"
      }} 
      onClick={handleProfileClick}
      >
        <img src={profilepic} alt="" srcset="" />
      </div>

      
    </div>
  )
};

export default JoinUs;
