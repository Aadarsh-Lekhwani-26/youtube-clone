import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h2>MyTube</h2>

      <input type="text" placeholder="Search..." />

      <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;