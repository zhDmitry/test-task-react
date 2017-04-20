import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router';

export const CoreLayout = ({ children }) => (
  <div>
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">Project X </Link>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/worklog" activeClassName="active">
                Worklog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {children}
  </div>
)

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default CoreLayout
