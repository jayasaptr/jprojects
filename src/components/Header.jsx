/** @format */

import profilePicture from "../assets/profile-picture.png";
import "../styles/header.css";
import { FaInstagram, FaTiktok, FaTwitter, FaFacebook } from "react-icons/fa";

export const Header = () => {
  return (
    <header>
      <div className='header-jumbotron'>
        <img src={profilePicture} alt='profile' />
        <h3>Muhammad Jaya Saputra</h3>
        <p>Frontend Developer - Backend Developer - Mobile Developer</p>
        <div className='socialMedia'>
          <a href=''>
            <FaInstagram />
          </a>
          <a href=''>
            <FaTiktok />
          </a>
          <a href=''>
            <FaTwitter />
          </a>
          <a href=''>
            <FaFacebook />
          </a>
        </div>
      </div>
    </header>
  );
};
