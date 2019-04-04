import React, { Component } from 'react';
import axios from 'axios';
import './NavigationBar.css'
import {Navbar, NavItem, Icon, SideNav, SideNavItem} from 'react-materialize';

class NavigationBar extends Component {
  state = {
    categories: [],
  }

  render() {
    return (
        <Navbar className="black-text white">
          <div className="Subbar">
            <SideNav className="Sidebar"
              trigger={
                <div>
                  <NavItem className="left">
                    <Icon className="black-text">menu</Icon>
                  </NavItem>
                </div>
              }
              options={{closeOnClick: true}}
              >
              <SideNavItem className="SidebarElements">Categories</SideNavItem>
              <SideNavItem divider />
              <SideNavItem>Friends</SideNavItem>
              <SideNavItem>Love</SideNavItem>
              <SideNavItem>Talent</SideNavItem>
              <SideNavItem>Identity</SideNavItem>
              <SideNavItem>Study & Work</SideNavItem>
              <SideNavItem>Men</SideNavItem>
              <SideNavItem>Women</SideNavItem>
              <SideNavItem>Challenges</SideNavItem>
              <SideNavItem>Family</SideNavItem>
              <SideNavItem>Faith</SideNavItem>
            </SideNav>
            <NavItem className="right" href="#!">
              <Icon className="black-text">language</Icon>
            </NavItem>
          </div>
        </Navbar>
    );
  }
}

export default NavigationBar;
