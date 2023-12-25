import React from "react";
import "./Footer.css";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";

const socialMedia = ["Facebook", "Instagram", "Twitter", "Youtube"];

const FooterItems = (props) => {
  return (
    <div className="app__footer-items">
      <h1 className="app__footer-item-title">{props.sectionName}</h1>
      <ul className="app__footer-item-names">
        {props.sectionList.map((item) => {
          return (
            <li key={item}>
              <a rel="noreferrer" target="_blank" href={`https://${item}.com`}>
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="app__footer-section" id="footer">
      <div
        className="app__about-image-box img-box-1"
        style={{
          backgroundImage: `url(${images.resturant})`,
        }}
      />
      <FooterItems sectionName="Social Media" sectionList={socialMedia} />
    </footer>
  );
};

export default AppWrap(Footer, "footer", "app__footer");
