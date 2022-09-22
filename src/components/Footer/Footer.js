import React, { useContext } from "react";
import "./Footer.css";
import { ThemeContext } from "../../contexts/ThemeContext";

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="footer" style={{ backgroundColor: theme.secondary }}>
      {/* <p style={{ color: theme.tertiary }}>
        Eat
        <span style={{ color: theme.primary, margin: "0 0.5rem -1rem 0.5rem" }}>
          {"->"}
        </span>
        Code
        <span style={{ color: theme.primary, margin: "0 0.5rem -1rem 0.5rem" }}>
          {"->"}
        </span>
        Sleep
        <span style={{ color: theme.primary, margin: "0 0.5rem -1rem 0.5rem" }}>
          {"->"}
        </span>
        Repeat
      </p> */}
    </div>
  );
}

export default Footer;
