import { Link } from "react-router-dom";
import { Onglet } from "../style/style";

//barre de navigation, style directement sur Link car je n'arrive pas à le changer avec le styled-components.
const Navbar = () => {
  return (
    <Onglet>
      <div>
        <Link
          style={{ textDecoration: "none", color: "black", fontSize: "large" }}
          to="/"
        >
          Home
        </Link>
      </div>
      <div>
        <Link
          style={{ textDecoration: "none", color: "black", fontSize: "large" }}
          to="/Auth"
        >
          Se connecter
        </Link>
      </div>
      <div>
        <Link
          style={{ textDecoration: "none", color: "black", fontSize: "large" }}
          to="/ToDo"
        >
          To Do List
        </Link>
      </div>
      <div>
        <Link
          style={{ textDecoration: "none", color: "black", fontSize: "large" }}
          to="/TestPrivate"
        >
          TEST ROUTE PRIVEE
        </Link>
      </div>
    </Onglet>
  );
};

export default Navbar;
