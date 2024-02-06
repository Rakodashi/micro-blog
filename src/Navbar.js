import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <img src="./assets/trek-logo-2.png" alt="" /> */}
      <h1>The Micro Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Log</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;