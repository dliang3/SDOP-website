import "./Navbar.css"
import { Link } from "react-router-dom";
import logo from "../../images/SDOP-logo.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Silly Data <br></br> Object Packager</h1>
      </Link>
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="SDOP-Logo"></img>
        </div>
      </Link>

      <div className="links">
        <Link to="/" className="hoverBorder">Home</Link>
        <Link to="/Guide" className="hoverBorder">Guide</Link>
        <Link to="/Download" className="hoverBorder">Download</Link>
        <Link to="/FAQ" className="hoverBorder">FAQ</Link>
      </div>
    </nav>
  );
}

export default Navbar;