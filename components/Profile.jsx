"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import henry from "@/public/newFine.png";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Photo = ({ name, title }) => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        className="profile-card"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="person">
          <div className="person__container">
            <div className="avatar">
              <Image
                src={henry.src}
                alt="profile photo"
                fill
                priority
                quality={100}
                className="profile-image"
              />
            </div>
            <div className="person__details">
              <h1>{name}</h1>
            </div>
            <div className="person__role">{title}</div>

            <div className="card-footer">
              <div className="social-buttons">
                <button>
                  <FaInstagram />
                </button>
                <button>
                  <FaGithub />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
