import { socialImgs } from "../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <Link to="/terms-conditions" className="hover:text-white transition-colors duration-300">
            Terms & Conditions
          </Link>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a key={index} href={socialImg.link} target="_blank" rel="noopener noreferrer" className="icon">
              <img src={socialImg.imgPath} alt="social icon" />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Kiet Pham. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
