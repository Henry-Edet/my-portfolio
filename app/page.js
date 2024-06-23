import Section from "@/components/Section";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export default function Home() {
  return (
    <main className="border border-green-800">
      <section
        className="ring-8 ring-pink-500 h-[30rem] text-white"
        style={{ backgroundImage: `url("profile2.jpg")` }}
      >
        <header className=" ">
          <div className="flex flex-row justify-between items-center w-screen h-[8rem] px-8 ring-2 ring-red-700">
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
          </div>
        </header>
        <div className="flex flex-col justify-around items-center py-4">
          <h1 className="text-[8rem]">Welcome</h1>
          <br />
          <p>
            <em>Imagination is the start of the future...</em>
          </p>

          <h6>Featured Projects</h6>
          <MdKeyboardDoubleArrowDown />
        </div>
      </section>

      <Section />
      <Section />
      <Section />
      <Section />
    </main>
  );
}
