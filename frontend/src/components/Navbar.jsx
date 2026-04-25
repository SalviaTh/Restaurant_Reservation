import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <nav>
        <div className="logo">FOODIE</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <ScrollLink
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </ScrollLink>
            ))}
          </div>
          <button className="theme-toggle-btn" onClick={toggleTheme}>
            {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
          </button>
          <RouterLink to="/menu" className="menuBtn">OUR MENU</RouterLink>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
