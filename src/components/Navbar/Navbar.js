import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>SDOP</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Guide">Guide</Link>
        <Link to="/Download">Download</Link>
      </div>
    </nav>
  );
}

export default Navbar;