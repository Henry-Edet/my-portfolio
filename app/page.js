import Section from "@/components/Section";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Header from "@/components/Header";
import "@/components/style.css";
import { About, Projects, Contact, Blog, Footer } from "@/components/data";
import classes from "@/components/style.css";

export default function Home() {
  return (
    <body>
      <div className="hero">
        <Header />
        <video className="video-bg" autoPlay loop muted>
          <source src="natureVid.mp4" type="video/mp4" />
        </video>

        <div className="flex flex-col justify-around items-center mt-16 py-[1rem] px-[5rem]">
          <h1 className="text-[8rem]">Welcome</h1>
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
      <main className={classes.section}>
        <Section
          id="About"
          title={About.title}
          description={About.description}
        />

        <Section
          id="Projects"
          title={Projects.title}
          description={Projects.description}
        />

        <Section
          id="Contact"
          title={Contact.title}
          description={Contact.description}
        />

        <Section id="Blog" title={Blog.title} description={Blog.description} />

        <Section
          id="Footer"
          title={Footer.title}
          description={Footer.description}
        />
      </main>
    </body>
  );
}
