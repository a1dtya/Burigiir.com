import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/founder.webp";
const Founder = () => {
  const options = {
    initial: {
      y: "80%",
      opacity: 0.5,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}
      >
        <img src={me} alt="Founder" height={200} width={200} />
        
      
        <h3>Aaditya</h3>

        <p>
          Burgiiir,I am Aaditya, Making hot meme burgers for you.
          <br />
          My aim is to make every customer happy with the Burgers.
        </p>
      
      </motion.div>
    </section>
  );
};

export default Founder;
