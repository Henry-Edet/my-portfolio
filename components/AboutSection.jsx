import "@/components/style.css";
import Henry from "@/public/profile photo.png";
import Image from "next/image";
import lil from "@/public/littleabout.png";
import About from "@/components/data.js";

const AboutSection = () => {
  console.log(About);

  return (
    <section id="about" className="backgroundImg">
      <div className="imagediv">
        <Image
          src={Henry.src}
          alt="profile photo"
          width={219}
          height={247}
          quality={100}
          className="profile-image ml-[6.8rem] mb-[16rem]"
        />

        <Image
          src={lil.src}
          alt="description"
          width={486}
          height={60}
          quality={100}
          className="aboutImg mb-[15rem]"
        />
      </div>
      <h2>{About?.title}</h2>
      <p>{About?.description}</p>
    </section>
  );
};

export default AboutSection;

// className = "backgroundImg grid grid-cols-2 justify-center items-center";
