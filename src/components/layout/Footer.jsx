import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Burgiirr - You can hear the picture isn't it?</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @Burgiir</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://www.linkedin.com/in/aadityaparmar/">
          <AiFillYoutube />
        </a>
        <a href="https://twitter.com/a1dtya">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/a1dtya">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
