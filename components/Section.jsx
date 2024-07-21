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
          learning and problem solving; with 2 years of experience in designing
          software architecture and enterprise level solutions. Demonstrated
          success in mentoring engineers, reducing product delivery time, and
          managing micro services across diverse technologies. Able to
          effectively self-manage during independent projects. Exceptional
          communication and interpersonal skills with expertise in building,
          managing and scaling high performance technology organizations.
        </p>
      </div>
    </section>
  );
};

export default Section;

// className = "backgroundImg grid grid-cols-2 justify-center items-center";
