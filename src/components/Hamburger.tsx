interface HamburgerProps {
  toggleMenu(): void;
  windowWidth: number;
}

export default function Hamburger({ toggleMenu, windowWidth }: HamburgerProps) {
  if (windowWidth > 749) return null;

  return (
    <div className="Hamburger-container" onClick={toggleMenu}>
      <div className="Hamburger"></div>
    </div>
  );
}
