import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h2 className="text-rose-500 text-3xl">StreamVault</h2>

      <div className="flex">
      <button className=" w-9 h-9 text-4xl rounded-tl-3xl rounded-bl-3xl text-[rgb(247,157,173)] bg-rose-500 border border-white border-r-0 " >⌕</button>
      <input type="text" placeholder="Type to search" className=" h-9 bg-rose-500 border border-white border-l-0"/>
      <button className=" w-17 h-9 text-4xl rounded-tr-3xl rounded-br-3xl  text-white bg-rose-500 border border-white hover:cursor-pointer ml-3 active:bg-rose-700" >⌕</button>
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