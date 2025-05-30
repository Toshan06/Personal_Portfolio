import "../css/footer.css";
import {
  FaHome,
  FaPhone,
  FaLinkedin,
  FaInstagram,
  FaLink,
} from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footnote">
      <div className="footer bg-gray-900 p-20">
        <div className="left">
          <div className="address">
            <FaHome className="Home-logo" />
            <div className="address-word">
              Siddha Town, Narayanpur
              <br />
              Rajarhat, Kolkata, West Bengal
              <br />
              PIN: 700136.
            </div>
          </div>
          <div className="phone">
            <FaPhone className="phone-logo" />
            <div className="phone-number">+91 9348379756</div>
          </div>
          <div className="email">
            <BiLogoGmail className="email-logo" />
            <div className="gmail">toshanmandal0610@gmail.com</div>
          </div>
        </div>
        <div className="right">
          <div className="note">
            <h3>Created with passion, powered by curiosity</h3>
            <p>© 2025 Toshan Mandal — Open to Opportunities 🤝</p>
          </div>
          <div className="social-media">
            <a href="https://twitter.com/MandalTosh49500/"><FaXTwitter /></a>
            <a href="https://www.linkedin.com/in/toshan-mandal-693983316/"><FaLinkedin /></a>
            <a href="https://www.instagram.com/toshanmandal_/"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
