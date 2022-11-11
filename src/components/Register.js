import logo from "./../images/logo.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import InfoToolTip from "./InfoToolTip";
import { api } from "../utils/Api";

function Register(props) {
  const [isRender, setIsRender] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function linkRender() {
    setIsRender(true);
  }

  useEffect(() => {
    linkRender();
  }, [isRender]);

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateRegistration({
      email: email,
      password: password,
    });
  }

  return (
    <div className="page page_preload">
      <div className="register__container">
        <header className="header">
          <img className="header__logo" src={logo} alt="лого" />
          <Link
            target="blank"
            to="/sign-in"
            className="header__link"
            onClick={linkRender}
          >
            Войти
          </Link>
        </header>
        <h2 className="register__title">Регистрация</h2>
        <form
          className="register__form"
          name="email-and-password"
          noValidate
          onSubmit={handleSubmit}
        >
          <input
            required
            type="email"
            name="email"
            className="register__input"
            placeholder="Email"
            minLength="2"
            maxLength="30"
            id="email"
            value={email}
            onChange={handleChangeEmail}
          />

          <input
            required
            type="password"
            name="password"
            className="register__input"
            placeholder="Пароль"
            id="password"
            value={password || ""}
            onChange={handleChangePassword}
          />

          <button className="register__button" type="submit">
            Зарегистрироваться
          </button>
        </form>
        <Link to="/sign-in" target="blank" className="register__link">
          Уже зарегистрированы? Войти
        </Link>
      </div>
    </div>
  );
}

export default Register;
