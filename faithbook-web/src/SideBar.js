import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeSideBar, setFeed } from './actions';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';

const styles = {
  sideList: {
    width: 250,
    marginTop: 10,
  },
  sideListDynamicElement: {
    left: 25,
  },
  listItemText: {
    fontWeight: 500,
    fontSize: 15,
  },
  link: {
    textDecoration: 'none',
  },
  circle: {
    background: "#f00",
    width: 7,
    height: 7,
    borderRadius: "50%",
  }
};

class SideBar extends Component {
  render() {
    const { classes, category } = this.props;
    const items = [];
    Object.keys(this.props.titles).forEach((key, cnt) => {
      const active = category === key;
      items.push(
        <Link to={`/feed/${key}`} className={classes.link} key={cnt}>
          <ListItem button onClick={() => this.props.setFeed(key, this.props.translation)}>
            <div
              className={classes.circle}
              style={{visibility: active ? "visible" : "hidden"}}
            />
          <ListItemText
              classes={{primary:classes.listItemText}}
              className={classes.sideListDynamicElement}
              primary={this.props.titles[key]}
            />
          </ListItem>
        </Link>
      )
    });
    return (
      <Drawer open={this.props.isSideBarOpen} onClose={this.props.closeSideBar}>
        <List className={classes.sideList} onClick={this.props.closeSideBar}>
          {items}
        </List>
        <Divider />
        <div className='StdLinkGroup' onClick={this.props.closeSideBar}>
          <NavLink to= "/terms" className="StdLinkText"> Terms </NavLink> <br/>
          <NavLink to= "/privacy" className="StdLinkText"> Privacy </NavLink> <br/>
          <NavLink to= "/faq" className="StdLinkText"> FAQ </NavLink> <br/>
          <NavLink to= "/manageconsent" className="StdLinkText"> Manage Consent </NavLink> <br/>
          <s className='StdLinkText'>FAITHBOOK &#169; 2019</s>
        </div>
        <Divider />
      </Drawer>
    );
  }
}

const mapStateToProps = state => ({
  isSideBarOpen: state.controls.isSideBarOpen,
  category: state.content.category,
  titles: state.content.titles,
  translation: state.content.translation,
});

const mapDispatchToProps = dispatch => ({
  closeSideBar: () => dispatch(closeSideBar()),
  setFeed: (category, translation) => dispatch(setFeed(category, translation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SideBar));
