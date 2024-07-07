// import React from 'react'
import "@/components/style.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <header>
        <div className="flex flex-row justify-between items-center h-[8rem] px-8">
          <Link href="/">
            <div>
              <h1>Engr. Henry Edet</h1>
              <h6>
                <em className="text-sm">
                  Software Engineer & Cybersecurity Analyst
                </em>
              </h6>
            </div>
          </Link>

          <nav>
            <ul className="flex justify-between items-center gap-4">
              <li>
                <Link href="#about" className="mr-4  hover:text-green-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="mr-4  hover:text-green-200">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="mr-4  hover:text-green-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="https://lnnkin.co/@edblog"
                  className="mr-4  hover:text-green-200"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
