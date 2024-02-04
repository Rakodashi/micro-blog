const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <img src="./assets/trek-logo-2.png" alt="" /> */}
      <h1>The Micro Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Log</a>
      </div>
    </nav>
  );
}
 
export default Navbar;