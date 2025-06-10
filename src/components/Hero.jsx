import React from "react";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full h-screen relative mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl flex flex-row gap-5 items-start`}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="h-5 w-5 bg-[#915eff] rounded-full" />
          <div className="w-1 sm:h-80 h-48 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Sabeeha Rani</span>
          </h1>
          <p className={`${styles.heroSubText} text-white`}>
            I build powerfull MERN Stack Web applications.
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-2 bottom-20 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] flex justify-center items-start rounded-3xl border-4 border-secondary p-2">
            <motion.div
              animate={{
                y: [0, 25, 0],
              }}
              transition={{
                duration: 1.75,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
