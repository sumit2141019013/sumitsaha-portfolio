import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsFacebook, BsInstagram, BsLinkedin} from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
        Hello, I'm <b>Sumit Saha,</b> a dedicated Computer Science student currently pursuing my Bachelor's degree in Computer Science and Engineering at SOA University. 
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/sumit2141019013" >
          <BsGithub />
        </a>
        <a href="https://www.facebook.com/" >
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/feed/" >
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;