// import React from 'react'
import "@/components/style.css";

const Header = () => {
  return (
    <div className="header">
      <header>
        <div className="flex flex-row justify-between items-center h-[8rem] px-8">
          <div>
            <h1>Engr. Henry Edet</h1>
            <h6>
              <em className="text-sm">
                Software Engineer & Cybersecurity Analyst
              </em>
            </h6>
          </div>
          <nav>
            <ul className="flex justify-between items-center gap-4">
              <li>
                <a href="#about" className="mr-4  hover:text-green-200">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="mr-4  hover:text-green-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="mr-4  hover:text-green-200">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
