import { Link } from 'gatsby';
import React from 'react';
import { Navbar } from 'react-bulma-components';


export const Header = () => {
  return (
    <Navbar color="primary">
      <Navbar.Brand>
        <Link to={'/'} className="navbar-item">
          <h1>Gatsby Bulma Starter</h1>
        </Link>
      </Navbar.Brand>
    </Navbar>
  )
}
