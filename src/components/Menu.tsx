interface MenuProps {
  features: string;
  pricing: string;
  resources: string;
  login: string;
  signup: string;
  isMenuOpened: boolean;
}

function Menu({
  features,
  pricing,
  resources,
  login,
  signup,
  isMenuOpened,  
}: MenuProps) {
  if (!isMenuOpened) return null;

  return (
    <div className="Menu">
      <p className="Menu--text">{features}</p>
      <p className="Menu--text">{pricing}</p>
      <p className="Menu--text">{resources}</p>
      <div className="Menu--line"></div>
      <p className="Menu--text">{login}</p>
      <button className="Menu--button">{signup}</button>
    </div>
  );
}

export default Menu;
