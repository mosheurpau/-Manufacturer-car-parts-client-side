import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer
      style={{
        background: `url(${"https://i.ibb.co/KqfC9Ks/slider-1.webp"})`,
        backgroundSize: "cover",
      }}
      className="p-10"
    >
      <div className="text-center footer px-12 text-white">
        <div>
          <span className="footer-title text-">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </div>
      <div className="text-gray-200 text-center text-3xl">
        <FontAwesomeIcon icon={faFacebook} className="p-5" />
        <FontAwesomeIcon icon={faInstagram} className="p-5" />
        <FontAwesomeIcon icon={faGithub} className="p-5" />
        <FontAwesomeIcon icon={faYoutube} className="p-5" />
      </div>
      <div className="mb-5 text-center text-white">
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
