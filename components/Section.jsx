// import React from 'react'
import Image from "next/image";
import henry from "@/public/myImg.jpeg";
import "@/components/style.css";

const Section = () => {
  return (
    <section
      id="about"
      className="backgroundImg grid grid-cols-2 justify-center items-center py-6"
    >
      <div className="flex flex-col rounded-2xl justify-center items-center mt-10 ml-16 w-[20rem] h-[25rem] shadow-2xl drop-shadow-2xl bg-zinc-400">
        <Image
          src={henry.src}
          alt="profile photo"
          width={216}
          height={216}
          style={{ borderRadius: "15px" }}
        />
      </div>
      <div className="text-white">
        <h2>About</h2>
        <p>
          I am a software engineer and cybersecurity analyst with a passion for
          learning and problem solving.
        </p>
      </div>
    </section>
  );
};

export default Section;

// width: "300px",
//         height: "auto",
//         borderRadius: "50%",
