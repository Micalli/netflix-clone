import "../Styles/inicial.css";
import global from "../assets/global.png";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

function Inicial() {
  const history = useHistory();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onChangeLogin = (event) => {
    setLogin(event.target.value);
  };

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  useEffect(() => {
    const label = document.querySelector(".label-login");

    if (login == "") {
      label.classList.remove("active");
    } else {
      label.classList.add("active");
    }
  });

  useEffect(() => {
    const label = document.querySelector(".label-senha");

    if (password == "") {
      label.classList.remove("active");
    } else {
      label.classList.add("active");
    }
  });
  function handleSingIn() {
    history.push("/home");
  }

  return (
    <div>
      <img
        className="bg"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/3064770e-4281-4471-b539-b1dc98d164a5/BR-pt-20210719-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      />
      <div className="gradient">
        <header className="header">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix"
          />
        </header>

        <main>
          <div className="content">
            <h1 className="title--singin">Entrar</h1>
            <form>
              <div>
                <input
                  className="input--login"
                  type="text"
                  value={login}
                  onChange={onChangeLogin}
                />

                <label className="label-login active">
                  Email ou número de telefone
                </label>

                <input
                  className="input--login"
                  type="password"
                  id="password"
                  value={password}
                  onChange={onChangePassword}
                />
                <label className="label-senha active">Senha</label>
              </div>
            </form>
            <div className="button--singin">
              <button onClick={handleSingIn} className="button">
                Entrar
              </button>
            </div>
            <div className="rememberme">
              <span className="remember-me">
                <label class="container">
                   <div> Lembre-se de min</div>
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </span>
              <span>Precisa de ajuda?</span>
            </div>
            <span></span>
            <a href="#">
              <div className="connect-face">
                <img
                  className="facebook--ico"
                  src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png"
                />
                <span className="connect--face--color">
                  Conectar com Facebook
                </span>
              </div>
            </a>

            <div className="singup--now">
              Novo por aqui?
              <a className="singup" href="#">
                {" "}
                Assine agora
              </a>
              .
              <div className="terms">
                <span className="terms-of--use">
                  Esta página é protegida pelo Google reCAPTCHA para garantir
                  que você não é um robô. 
                  <a href="#">Saiba mais.</a>
                </span>
              </div>
            </div>
          </div>
        </main>
        <footer className="footer">
          <div>
            <p>
              Dúvidas? Ligue  
              <a> 0800-761-4631</a>
            </p>
          </div>

          <ul>
            <li>
              <a href="#">Perguntas frequentes</a>
            </li>
            <li>
              <a href="#">Centro de ajuda</a>
            </li>
            <li>
              <a href="#">Termos de uso</a>
            </li>
            <li>
              <a href="#">Privacidade</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Preferências de cookies</a>{" "}
            </li>
            <li className="item--list">
              <a href="#">Informações corporativas</a>
            </li>
          </ul>
          <select>
            <option>Português</option>
            <option>English</option>
          </select>
          <img src={global} />
        </footer>
      </div>
    </div>
  );
}

export default Inicial;
