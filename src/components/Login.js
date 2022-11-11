import logo from "./../images/logo.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import {useHistory} from "react-router-dom"
function Login(props) {
    
  const [isRender, setIsRender] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function linkRender() {
    setIsRender(true);
  }
  useEffect(() => {
    
    linkRender();
  }, [isRender]);

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAutharization({
      email: email,
      password: password,
    });
    props.handleLogin();
    console.log(props.handleLogin)
  }
  return (
    <div className="page page_preload">
      <div className="register__container">
        <header className="header">
          <img className="header__logo" src={logo} alt="лого" />
          <Link
            target="blank"
            to="/sign-up"
            className="header__link"
            onClick={linkRender}
          >
            Зарегистрироваться
          </Link>
        </header>
        <h2 className="register__title">Вход</h2>
        <form
          className="register__form"
          name="email-and-password"
          noValidate
          onSubmit={handleSubmit}
        >
          <input
            required
            type="text"
            name="email"
            className="register__input"
            placeholder="Email"
            minLength="2"
            maxLength="30"
            id="email"
            onChange={handleEmail}
            value={props.userData.email}
          />

          <input
            required
            type="password"
            name="password"
            className="register__input"
            placeholder="Пароль"
            id="password"
            onChange={handlePassword}
            value={props.userData.email}
          />

          <button className="register__button" type="submit">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
