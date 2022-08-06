import React, { useState } from "react";
interface LinkProps {
  link: string;
  shortened_link: string;
}

function Link({ link, shortened_link }: LinkProps) {
  const [copied, setCopied] = useState(false);

  const buttonStyles = {
    backgroundColor: copied ? "var(--very-dark-blue)" : "var(--cyan)"
  }

  const toggleCopy = async () => {
    await navigator.clipboard.writeText(shortened_link);
    setCopied(true);
  }

  return (
    <div className="Link">
      <p className="Link--link-content">{link}</p>
      <div className="Link--line"></div>
      <p className="Link--shortened-link">{shortened_link}</p>
      <button className="Link--copy" style={buttonStyles} onClick={toggleCopy}>{copied ? "Copied!" : "Copy"}</button>
    </div>
  );
}

export default Link;
