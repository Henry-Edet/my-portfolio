import "@/components/style.css";
import Profile from "@/components/Profile";
// import SplitText from "@/components/Textanimate";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText.js";

const Section = () => {
  return (
    <section
      id="about"
      className="backgroundImg grid grid-cols-2 justify-center items-center"
    >
      <Profile />
      <motion.div className="text-white about-me">
        <AnimatedText text="animated text with framer-motion" />
        <AnimatedText text="animated text with framer-motion" />
      </motion.div>
    </section>
  );
};

export default Section;

// className = "backgroundImg grid grid-cols-2 justify-center items-center";
