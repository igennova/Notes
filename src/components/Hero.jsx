import React from 'react';
import { motion } from 'framer-motion';
import Book from "../components/Book";
import earth from "../assets/earth.jpg"; // Import the Earth image
import "./Hero.css";

const Hero = ({ scrollContainer }) => {
  // Animation variants for Framer Motion
  const titleVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const subtitleVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };

  // Function to handle scroll down
  const handleScrollDown = () => {
    const nextSection = document.getElementById('courses'); // Change to the ID of your next section
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative h-screen w-full"
      style={{
        backgroundImage: `url(${earth})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 flex flex-col items-start z-10 px-8" style={{ top: '9%' }}>
        {/* Animated text */}
        <h1 className="text">
          <span className="letter letter-1">T</span>
          <span className="letter letter-2">H</span>
          <span className="letter letter-3">E</span>
          <span className="letter letter-4"> </span>
          <span className="letter letter-1">N</span>
          <span className="letter letter-2">O</span>
          <span className="letter letter-3">T</span>
          <span className="letter letter-4">E</span>
          <span className="letter letter-1">S</span>
          <span className="letter letter-4"> </span>
          <span className="letter letter-1">W</span>
          <span className="letter letter-2">O</span>
          <span className="letter letter-3">R</span>
          <span className="letter letter-4">L</span>
          <span className="letter letter-1">D</span>
        </h1>
        <motion.div
          className="mt-4 sm:mt-14 text-white text-[20px] sm:text-[30px] md:text-[36px] 2xl:text-[46px] leading-none"
          variants={subtitleVariants}
          initial="initial"
          animate="animate"
        >
          Explore the universe of knowledge
        </motion.div>
      </div>

      <div className="absolute inset-0 flex justify-center items-center z-20">
        <Book scrollContainer={scrollContainer} />
      </div>

      {/* Scroll Down Button */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
        <button 
          onClick={handleScrollDown} 
          className="bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
        >
          Scroll Down
        </button>
      </div>
    </section>
  );
};

export default Hero;
