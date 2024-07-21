"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import henry from "@/public/newFine.png";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import "@/components/Profile-gsap";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div>
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
              <h1>Engr. Henry Edet</h1>
            </div>
            <div className="person__role">
              Software Engineer & Cybersecurity Analyst
            </div>

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
