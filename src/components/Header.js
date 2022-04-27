import style from "./Header.module.scss";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <header>
      <img src={logo} />
    </header>
  );
};
export default Header;
