// import logo from "./logo.svg";
import STYLES from "../styles/Header.module.scss";

const getClassName = (className) => STYLES[className] || "UNKNOWN";

const Header = () => (
  <header className={getClassName("Header")}>
    <a href="/">
      <span className={getClassName("Header__hidden-text")}>Skyscanner</span>
      <img
        src="/logo.svg"
        className={getClassName("Header__logo-image")}
        alt="Skyscanner"
      />
    </a>
  </header>
);

export default Header;
