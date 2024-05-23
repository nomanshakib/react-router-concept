import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
      <div className="text-center mt-10">
        <h1 className="text-5xl text-cyan-500 mb-5">---React Router Concept---</h1>
        <nav className="mt-5">
          <NavLink className="mr-3 text-cyan-500" to="/">Home</NavLink>
          <NavLink className="mr-3 text-cyan-500" to="/About">About Us</NavLink>
          <NavLink className="mr-3 text-cyan-500" to="/Contact">Contact Us</NavLink>
          <NavLink className="mr-3 text-cyan-500" to="/Users">Users</NavLink>
          <NavLink className="mr-3 text-cyan-500" to="/Comments">Comments</NavLink>
          <NavLink className="mr-3 text-cyan-500" to="/Photos">Photos</NavLink>
          {/* <Link to="/"></Link> */}
        </nav>
      </div>
    );
};

export default Header;