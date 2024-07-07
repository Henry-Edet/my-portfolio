import "@/components/style.css";
import Profile from "@/components/Profile";

const Section = () => {
  return (
    <section
      id="about"
      className="backgroundImg grid grid-cols-2 justify-center items-center"
    >
      <Profile />
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

// className = "backgroundImg grid grid-cols-2 justify-center items-center";
