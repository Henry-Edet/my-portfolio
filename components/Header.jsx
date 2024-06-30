// import React from 'react'

const Header = () => {
  return (
    <div className="">
      <header className="fixed top-0 w-full z-50 ">
        <div className="flex flex-row justify-between items-center h-[8rem] px-8">
          {/* <video video-bg autoPlay muted loop>
            <source src="/natureVid.mp4" type="video/mp4" />
          </video>   */}
          <div>
            <h1>Engr. Henry Edet</h1>
            <h6>
              <em className="text-sm">
                Software Engineer & Cybersecurity Analyst
              </em>
            </h6>
          </div>
          <nav className="flex justify-between gap-8">
            <a href="#about" className="mr-4  hover:text-gray-900">
              About
            </a>
            <a href="#projects" className="mr-4  hover:text-gray-900">
              Projects
            </a>
            <a href="#contact" className="mr-4 hover:text-gray-900">
              Contact
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
