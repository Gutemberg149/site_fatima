import { Wrapper } from "./navbarStyle";
import logoBCG01 from "./logoBCG01.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  function scrollingBottom() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }
  return (
    <Wrapper>
      <Link to="/">
        <h1>Oficina de costura</h1>
      </Link>

      <Link to="/">
        <img src={logoBCG01} alt="maquina de costura" />
      </Link>
      <div className="leftside">
        <Link to="/sobre">
          <p>Sobre</p>
        </Link>
        <p onClick={() => scrollingBottom()}>Contato</p>
      </div>
    </Wrapper>
  );
};

export default NavBar;
