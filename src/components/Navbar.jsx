import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>🍲 Recipe App</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </nav>
  );
}

export default Navbar;
