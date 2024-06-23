// import React from 'react'
import Image from "next/image";
import henry from "@/public/henry.JPG";

const Section = () => {
  return (
    <section
      id="about"
      className="grid grid-cols-2 justify-center items-center border border-purple-800"
      style={{
        backgroundImage: `url("profile3.jpg")`,
      }}
    >
      <div className="flex flex-col py-8 px-2 border-2 border-black rounded-2xl justify-center items-center mt-10">
        <Image
          src={henry.src}
          alt="profile photo"
          width={216}
          height={216}
          className="rounded-full object-cover shadow-lg"
        />
      </div>
      <div className="text-black">
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
