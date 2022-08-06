import { useState, useEffect } from "react";
import Logo from "../images/logo.svg";
import DesktopMenu from "./DesktopMenu";
import Hamburger from "./Hamburger";
import Menu from "./Menu";

function Navigation() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", watchWidth);

    return () => {
      window.removeEventListener("resize", watchWidth);
    };
  });

  const NavData = {
    features: "Features",
    pricing: "Pricing",
    resources: "Resources",
    login: "Login",
    signup: "Sign up",
  };

  const toggleMenu = () => {
    setIsMenuOpened((prev) => !prev);
  };

  return (
    <nav className="Navigation">
      <img src={Logo} alt="Logo" className="Navigation--logo" />
      <Hamburger toggleMenu={toggleMenu} windowWidth={windowWidth} />
      {windowWidth < 780 ? (
        <Menu {...NavData} isMenuOpened={isMenuOpened} />
      ) : (
        <DesktopMenu {...NavData} />
      )}
    </nav>
  );
}

export default Navigation;
