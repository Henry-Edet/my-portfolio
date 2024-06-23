// import React from 'react'

const Header = () => {
  return (
    <div>
      <header className="fixed top-0 w-full z-50 ">
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
  );
};

export default Header;
