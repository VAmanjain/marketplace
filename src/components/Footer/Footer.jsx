import React, { useState } from "react";
import "../../css/main.css";
import { Link } from "react-router-dom";
import { FaArrowRight, FaDiscord } from "react-icons/fa";
import { LuCopyright } from "react-icons/lu";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };
  return (
    <footer className="footer container_box ">
      <div className="footer_container">
        <div className="footer_col">
          <h2>Stay in the loop</h2>
          <form action="" className="newsletter_form">
            <input type="email" name="" id="inp" placeholder="Your e-mail " />
            <button type="submit">
              <FaArrowRight />
            </button>
          </form>
          <span>We don't spam</span>
        </div>
        <div className="footer_col">
          <h2>Explore</h2>
          <ul>
            <li>
              <a href="/">NFT</a>
            </li>
            <li>
              <a href="/">Collection</a>
            </li>
            <li>
              <a href="/">Drops</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
          </ul>
        </div>
        <div className="footer_col">
          <h2>Links</h2>
          <ul>
            <li>
              <a href="/">Help Center</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Learn</a>
            </li>
            <li>
              <a href="/">Terms & Conditions</a>
            </li>
          </ul>
        </div>
        <div className="footer_col">
          <h2>Join us</h2>
          <ul>
            <li>
              <a href="/">X</a>
            </li>
            <li>
              <a href="/">Discord</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="logo">
          <img src="logo.png" alt="" width={55} height={55} />
          <span>ARTISANVISTA</span>
        </div>
        <div className="footer_credit">
          <LuCopyright className="icons" />
          <span>Copyright 2024- ETH-Miners</span>
        </div>
        <div className="footer_links">
          <ul>
            <li>
              <a href="/">
                <FaXTwitter className="icons" />
              </a>
            </li>
            <li>
              <a href="/">
                <FaDiscord className="icons" />
              </a>
            </li>
            <li>
              <a href="/">
                <FaInstagram className="icons" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
