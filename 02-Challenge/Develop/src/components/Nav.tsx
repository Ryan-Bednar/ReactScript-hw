import { Link } from "react-router-dom";

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
const currentPath = window.location.pathname;

  return (
    <nav className="nav">
      <div>Nav</div>
      <div>
        <ul>
          <li className="nav-item">
            <Link to='/'>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/SavedCandidates" className={currentPath === '/SavedCandidates' ? 'active' : ''}>
              Saved Candidates
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default Nav;
