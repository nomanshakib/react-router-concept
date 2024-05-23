import { Link } from "react-router-dom";

const Header = () => {
    return (
      <div className="text-center mt-10">
        <h1 className="text-5xl text-cyan-500 mb-5">---React Router Concept---</h1>
        <nav className="mt-5">
          <Link className="mr-3 text-cyan-500" to="/">Home</Link>
          <Link className="mr-3 text-cyan-500" to="/About">About Us</Link>
          <Link className="mr-3 text-cyan-500" to="/Contact">Contact Us</Link>
          <Link className="mr-3 text-cyan-500" to="/Users">Users</Link>
          <Link className="mr-3 text-cyan-500" to="/Comments">Comments</Link>
          <Link className="mr-3 text-cyan-500" to="/Photos">Photos</Link>
          {/* <Link to="/"></Link> */}
        </nav>
      </div>
    );
};

export default Header;