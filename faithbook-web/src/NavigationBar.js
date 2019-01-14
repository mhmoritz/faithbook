import React, { Component } from 'react';
import './NavigationBar.css'
import {Navbar, NavItem, Icon} from 'react-materialize';

class NavigationBar extends Component {
  render() {
    return (
      <div className="NavigationBar">
        <Navbar className="black-text white">
          <NavItem className="left" href="#">
            <Icon className="black-text">menu</Icon>
          </NavItem>
          <NavItem className="right">
            <Icon className="black-text">home</Icon>
          </NavItem>
          <NavItem className="right">
            <Icon className="black-text">favorite_border</Icon>
          </NavItem>
          <NavItem className="right">
            <Icon className="black-text">search</Icon>
          </NavItem>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
