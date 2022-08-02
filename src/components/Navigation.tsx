import { useState } from "react";
import Logo from "../images/logo.svg";
import Hamburger from "./Hamburger";
import Menu from "./Menu";

function Navigation() {

  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpened(prev => !prev)
  }

  return (
    <nav className="Navigation">
      <img src={Logo} alt="Logo" className="Navigation--logo" />
      <Hamburger toggleMenu={toggleMenu}/>
      <Menu
        features="Features"
        pricing="Pricing"
        resources="Resources"
        login="Login"
        signup="Sign up"
        isMenuOpened={isMenuOpened}
      />
    </nav>
  );
}

export default Navigation;
