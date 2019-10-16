import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Links.css";
const Footer = (props) => {
  return (
    <div>
      <a className="StdLinkText-Bottom">
        <NavLink to= "/terms" className="StdLinkText"> Terms </NavLink> &ensp;
        <NavLink to= "/privacy" className="StdLinkText"> Privacy </NavLink> &ensp;
        <NavLink to= "/faq" className="StdLinkText"> FAQ </NavLink> &ensp;
        <NavLink to= "/manageconsent" className="StdLinkText"> Manage Consent </NavLink> &ensp;
        <s className='StdLinkText'>FAITHBOOK &#169; 2019</s>
      </a>
    </div>
  );
}
export default Footer;
