import { HamburgerProps } from "./interfaces";

export default function Hamburger({ toggleMenu }: HamburgerProps) {
  return (
    <div className="Hamburger-container" onClick={toggleMenu}>
      <div className="Hamburger"></div>
    </div>
  );
}
