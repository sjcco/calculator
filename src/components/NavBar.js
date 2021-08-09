import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <>
    <nav className="nav-wrapper">
      <div className="container">
        <a href="/" className="brand">Math-Magicians</a>
        <ul className="nav-links">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/calculator">Calculator</NavLink></li>
          <li><NavLink to="/quotes">Quote of the day</NavLink></li>
        </ul>
      </div>

    </nav>
  </>
);

export default NavBar;
