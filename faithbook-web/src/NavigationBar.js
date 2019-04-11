import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './NavigationBar.css'
import {Navbar, NavItem, Icon, SideNav, SideNavItem} from 'react-materialize';

class NavigationBar extends Component {
  state = {
    categories: [],
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:5000/allCategories")
      .then(response => {
        this.setState({categories: response.data});
    });
  }

  render() {
    const items = this.state.categories.map(category => {
      return (
        <SideNavItem>
          <Link to={`/${category.key}`} className="Sidelink">
            {category.displayName}
          </Link>
        </SideNavItem>
      )
    });
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
              {items}
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
