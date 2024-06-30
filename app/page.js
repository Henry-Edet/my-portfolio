import Section from "@/components/Section";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Header from "@/components/Header";
import "@/components/style.css";

export default function Home() {
  return (
    <body>
      <div className="hero">
        <Header />
        <video className="video-bg" autoPlay loop muted>
          <source src="natureVid.mp4" type="video/mp4" />
        </video>

        <div className="flex flex-col justify-around items-center mt-16 py-[1rem] px-[5rem]">
          <h1 className="text-[6rem]">Welcome</h1>
          <br />
          <p>
            <em>Imagination is the start of the future...</em>
          </p>
          <div className="flex flex-col justify-between items-center gap-5 mt-4">
            <h6>Featured Projects</h6>
            <MdKeyboardDoubleArrowDown className="arrow" />
          </div>
        </div>
      </div>

      {/*  */}
      <main className="">
        <Section />
        <Section />
        <Section />
        <Section />
      </main>
    </body>
  );
}

// div className="headerImg flex flex-col h-[30rem] text-white border-2 border-red-600">
//         // {/* <Header /> */}

//         <div className="flex flex-col justify-around items-center">
//           <h1 className="text-[8rem]">Welcome</h1>
//           <br />
//           <p>
//             <em>Imagination is the start of the future...</em>
//           </p>

//           <div className="flex flex-col justify-between items-center gap-5 mt-4">
//             <h6>Featured Projects</h6>
//             <MdKeyboardDoubleArrowDown />
//           </div>
//         </div>
//       </div>
{
  /* <section
  className="h-[30rem] text-white border-5 border-yellow-200"
  style={{ backgroundImage: `url("profile2.jpg")` }}
>
  <div className="flex flex-col">
    <header className="fixed top-0 w-full z-50 border-2 border-red-600">
      <div className="flex flex-row justify-between items-center h-[8rem] px-8">
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
  </div>
  <div className="flex flex-col justify-around items-center border-2 border-yellow-600">
    <h1 className="text-[8rem]">Welcome</h1>
    <br />
    <p>
      <em>Imagination is the start of the future...</em>
    </p>

    <div className="flex flex-col justify-between items-center gap-5 mt-4">
      <h6>Featured Projects</h6>
      <MdKeyboardDoubleArrowDown />
    </div>
  </div>
</section>; */
}
