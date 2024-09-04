
import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";  // Updated import for SiLeetcode
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hi, I'm Hardik, a Full Stack Developer passionate about building dynamic and scalable web applications. With expertise in the MERN stack and a knack for crafting engaging user experiences, I thrive on transforming ideas into impactful digital solutions. Let's connect and explore how we can create something amazing together!
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/ophardik?tab=repositories" target="_blank" rel="noopener noreferrer">
          <BsGithub />
        </a>
        <a href="https://leetcode.com/u/hardik2527/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode />
        </a>
        <a href="https://www.instagram.com/hardik.k_25/" target="_blank" rel="noopener noreferrer">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/hardik-khandelwal-64b9b2249/" target="_blank" rel="noopener noreferrer">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
