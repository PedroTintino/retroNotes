import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <span>Retro Notes</span>
      <div className="linksWrapper">
        <Link to="/">Home</Link>
        <Link to="https://pedrotintino.github.io">Gallery</Link>
        <Link to="/teste">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
