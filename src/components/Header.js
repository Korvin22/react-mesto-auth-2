import logo from "./../images/logo.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";

function Header(props) {
  const [isRender, setIsRender] = useState(false);
  function linkRender() {
    setIsRender(true);
  }
  useEffect(() => {
    linkRender();
  }, isRender);
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="лого" />
      <div className="header__email">{props.email || ""}</div>
      <Link
        target="blank"
        to="/sign-in"
        className="header__link"
        onClick={props.signOut}
      >
        Выйти
      </Link>
    </header>
  );
}

export default Header;
