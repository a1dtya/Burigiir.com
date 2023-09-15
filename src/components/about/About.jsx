import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/founder.webp";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>Burgiiir</h4>
          <p>
            Best place for laughs and the burgers 
            on the internet
            
          </p>

          <p>
            Explore your new favourite order 
            Click below to see the
            menu
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Admin</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Burgiiir</h3>
            </div>

            <p>
              I am Aaditya, Admin of Burgiiir 
              Affiliated to Funny Taste...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
