import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { closeSideBar, setFeed } from './actions';

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
    color: 'grey'
  },
  listActiveText: {
    fontWeight: 500,
    fontSize: 15,
    color: '#4d4d4d'
  },
  link: {
    textDecoration: 'none'
  },
  circle: {
    background: '#f00',
    width: 7,
    height: 7,
    borderRadius: '50%',
  },
};

const SideBar = ({
  titles, category, isSideBarOpen, translation, closeSideBar, setFeed, classes,
}) => {
  const items = [];
  Object.keys(titles).forEach((key) => {
    const active = category === key;
    items.push(
      <Link to="/feed" className={classes.link} key={key}>
        <ListItem button onClick={() => setFeed(key, translation)}>
          <div
            className={classes.circle}
            style={{ visibility: active ? 'visible' : 'hidden' }}
          />
          <ListItemText
            classes={{ primary: active ? classes.listActiveText : classes.listItemText}}
            className={classes.sideListDynamicElement}
            primary={titles[key]}
          />
        </ListItem>
      </Link>,
    );
  });
  return (
    <Drawer open={isSideBarOpen} onClose={closeSideBar} onClick={closeSideBar}>
      <List className={classes.sideList}>
        {items}
      </List>
      <Divider />
      <div className="StdLinkGroup">
        <NavLink to="/terms" className="StdLinkText"> Terms </NavLink>
        {' '}
        <br />
        <NavLink to="/privacy" className="StdLinkText"> Privacy </NavLink>
        {' '}
        <br />
        <s className="StdLinkText">BibleFeed &#169; 2019</s>
      </div>
      <Divider />
    </Drawer>
  );
};

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

SideBar.propTypes = {
  isSideBarOpen: PropTypes.bool.isRequired,
  category: PropTypes.string.isRequired,
  titles: PropTypes.object.isRequired,
  translation: PropTypes.object.isRequired,
  closeSideBar: PropTypes.func.isRequired,
  setFeed: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SideBar));
