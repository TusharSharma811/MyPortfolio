import { motion } from "motion/react";
import { useRef } from "react";

export const Navbar = () => {
  const ref = useRef(null);
 

  return (
    <>
      {/* Original Navbar */}
      <motion.nav
        ref={ref}
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1 , width: "auto" }}
        exit={{ opacity: 0, width: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden md:flex  min-h-fit px-3 py-2 rounded-full relative top-2.5 mb-2 
                   items-center justify-center font-secondary text-lg font-light justify-self-center 
                   bg-bg border-2 border-accent shadow-lg shadow-accent/30"
      >
        
        <div className="flex gap-8">
          <a href="#about" className="text-sm">About</a>
          <a href="#projects" className="text-sm">Projects</a>
          <a href="#contact" className="text-sm">Contact</a>
        </div>
      </motion.nav>

      {/* Floating Dynamic Island (appears when nav is out of view) */}
      {/* <motion.div
        initial={{ y: -100, opacity: 0, scale: 0.5 }}
        animate={
          isInView
            ? { y: -100, opacity: 0, scale: 0.5 } // hidden when navbar is visible
            : { y: 20, opacity: 1, scale: 1 } // show floating pill
        }
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="fixed left-1/2 -translate-x-1/2 top-2  px-6 py-2 
                   rounded-full bg-bg border-2 border-accent shadow-lg shadow-accent/40 
                   flex gap-6 items-center"
      >
        <a href="#about" className="text-sm">About</a>
        <a href="#projects" className="text-sm">Projects</a>
        <a href="#contact" className="text-sm">Contact</a>
      </motion.div> */}
    </>
  );
};
