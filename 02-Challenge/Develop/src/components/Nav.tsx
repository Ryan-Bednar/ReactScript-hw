const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
const currentPath = window.location.pathname;

  return (
    <div>
      <div>Nav</div>
      <div>
        <ul>
          <li>
            <a href="/" className={currentPath === '/' ? 'active' : ''}>
              Candidate Search
            </a>
          </li>
          <li>
            <a href="/SavedCandidates" className={currentPath === '/SavedCandidates' ? 'active' : ''}>
              Saved Candidates
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default Nav;
