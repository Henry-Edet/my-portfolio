import { motion } from "framer-motion";
import firstImg from "@/public/assets/backImg_1.jpg";

const AnimatedPicture = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, yoyo: Infinity }}
      style={{
        width: "400px",
        height: "300px",
        overflow: "hidden",
        margin: "0 auto",
      }}
    >
      <motion.img
        src={firstImg.src}
        alt="My Picture"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        animate={{ scale: [1, 1.05, 1], y: [0, -10, 0] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </motion.div>
  );
};

export default AnimatedPicture;
