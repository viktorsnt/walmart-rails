import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export function Header(props, context) {

  return (
    <div className="header">
      <div className="content">
        <h1 className="site-title">
          <Link to="/" >Walmart</Link>
        </h1>
      </div>
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
};

export default Header;
