import React from 'react';
import { NavLink } from 'react-router-dom';
import './Links.css';
import './Footer.css';

const Footer = () => (
  <div className="Footer">
    <span className="StdLinkText-Bottom">
      <NavLink to="/terms" className="StdLinkText"> Terms </NavLink>
      {' '}
      &ensp;
      <NavLink to="/privacy" className="StdLinkText"> Privacy </NavLink>
      {' '}
      &ensp;
      <NavLink to="/faq" className="StdLinkText"> FAQ </NavLink>
      {' '}
      &ensp;
      <NavLink to="/manageconsent" className="StdLinkText"> Manage Consent </NavLink>
      {' '}
      &ensp;
      <br />
    </span>
    <span className="Copyright">FAITHBOOK &#169; 2019</span>
  </div>
);
export default Footer;
