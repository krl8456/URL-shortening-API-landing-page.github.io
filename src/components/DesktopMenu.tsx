import { DesktopMenuContent } from "./interfaces";

function DesktopMenu({
  features,
  pricing,
  resources,
  login,
  signup,
  windowWidth,
}: DesktopMenuContent) {
  if (windowWidth <= 749) return null;

  return (
    <div className="DesktopMenu">
      <p className="DesktopMenu--information">{features}</p>
      <p className="DesktopMenu--information">{pricing}</p>
      <p className="DesktopMenu--information">{resources}</p>
      <div className="login-signup">
        <p className="DesktopMenu--information login">{login}</p>
        <button className="Menu--button desktop-menu-button">{signup}</button>
      </div>
    </div>
  );
}

export default DesktopMenu;
