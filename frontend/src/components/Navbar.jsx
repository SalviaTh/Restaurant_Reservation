import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <nav>
        <div className="logo">ZEESH</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
          </div>
          <button className="theme-toggle-btn" onClick={toggleTheme}>
            {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
          </button>
          <button className="menuBtn">OUR MENU</button>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
