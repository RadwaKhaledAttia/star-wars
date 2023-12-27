import React from "react";
import Tiktok from "../../assets/images/tik-tok.png";
import Instgram from "../../assets/images/instagram.png";
import Facebook from "../../assets/images/facebook.png";
import Youtube from "../../assets/images/youtube.png";
import Twitter from "../../assets/images/twitter.png";
import useStyles from "./style";

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.Footer}>
      <p>More From Star Wars:</p>
      <ul>
        <li>
          <a
            href="https://www.tiktok.com/@starwars"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Tiktok} alt="TikTok" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/starwars/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instgram} alt="Instgram" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/StarWars"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Facebook} alt="Facebook" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/starwars"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Twitter} alt="Twitter" />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/user/starwars"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Youtube} alt="Youtube" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
