import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Links.css';
import Terms from './Terms.js';
import Privacy from './Privacy.js';
import ManageConsent from './ManageConsent.js';
import FAQs from './FAQs.js';

const Footer = (props) => {
  return (
    <div>
      <a className="StdLinkText-Bottom">
        <NavLink to= "/terms" className="StdLinkText"> Terms </NavLink>
          <Route path="/terms" component={Terms}/> &ensp;
        <NavLink to= "/privacy" className="StdLinkText"> Privacy </NavLink>
          <Route path="/privacy" component={Privacy}/> &ensp;
        <NavLink to= "/faq" className="StdLinkText"> FAQ </NavLink>
          <Route path="/faq" component={FAQs}/> &ensp;
        <NavLink to= "/manageconsent" className="StdLinkText"> Manage Consent </NavLink>
          <Route path="/manageconsent" component={ManageConsent}/> &ensp;  &ensp;
        <s className='StdLinkText'>FAITHBOOK &#169; 2019</s>
      </a>
    </div>
  );
}
export default Footer;
