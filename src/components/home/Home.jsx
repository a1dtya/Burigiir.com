import React from "react";
import { motion } from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";
import burgerEating from "../../assets/hb.png";

const Home = () => {
  const options = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <section className="home">
       
          <motion.div {...options} >
          <div>
          <motion.h1 {...options}>Burgiiir</motion.h1>
          <motion.img {...options}
            src={burgerEating}
            alt="Photo"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: 0.3,
            }}
            />
          <motion.p
            {...options}
            transition={{
              delay: 0.6,
            }}
          >
            Your meme burger.
          </motion.p>
        </div>
        </motion.div>
        <motion.a {...options}
       
        
          href="#menu"
          initial={{
            y: "-100%",
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.9,
          }}
        >
          Explore Menu
        </motion.a>
        
      </section>

      <Founder />

      <Menu />
    </>
  );
};

export default Home;
