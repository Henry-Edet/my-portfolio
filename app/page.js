// import AnimatedPicture from "@/components/AnimatedImg";
import henry from "@/public/henry.JPG";
import { px } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="border border-green-800">
      <header className="flex flex-row justify-around items-center text-black ">
        {/* <AnimatedPicture /> */}
        <div>
          <h1>Engr. Henry Edet</h1>
          <h6>
            <em className="text-sm">
              Software Engineer & Cybersecurity Analyst
            </em>
          </h6>
        </div>
        <nav className="flex justify-between gap-8">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <section
        id="about"
        className="grid grid-cols-2 justify-center items-center border-8 border-purple-800"
      >
        <div>
          <Image
            src="/henry.JPG"
            alt="profile photo"
            width={216}
            height={288}
          />
        </div>
      </section>
    </main>
  );
}
