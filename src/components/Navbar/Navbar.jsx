import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h2 className="text-rose-500 text-2xl">StreamVault</h2>

      <div className="flex">
      <input type="text" placeholder="Type to search" className="text-xl rounded-bl-3xl rounded-tl-3xl bg-rose-500 border border-white"/>
      <button className=" w-9 text-4xl rounded-tr-3xl rounded-br-3xl text-white bg-rose-500 p-3 border border-white hover:cursor-pointer ml-3" >⌕</button>
      </div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;