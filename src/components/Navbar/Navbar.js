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
        <Link to="/">Home</Link>
        <Link to="/Guide">Guide</Link>
        <Link to="/Download">Download</Link>
      </div>
    </nav>
  );
}

export default Navbar;