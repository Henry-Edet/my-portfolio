"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import henry from "@/public/newFine.png";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div>
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]">
          <Image
            src={henry.src}
            alt="profile photo"
            fill
            priority
            quality={100}
            className="object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;

// className="profile-photo" initial={{ opacity: 0 }} animate={{ opacity: 1 }}