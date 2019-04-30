import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeSideBar } from './actions';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
  sideList: {
    width: 250,
    marginTop: 85,
  },
  sideListDynamicElement: {
    marginLeft: 25,
  },
  listItemText: {
    fontWeight: 500,
    fontSize: 15,
  },
  link: {
    textDecoration: 'none',
  },
};

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:5000/allCategories")
      .then(response => {
        this.setState({categories: response.data});
    });
  }

  render() {
    const { classes } = this.props;
    const items = this.state.categories.map((category, cnt) => {
      return (
        <Link to={`/${category.key}`} className={classes.link} key={cnt}>
          <ListItem button>
            <ListItemText
              classes={{primary:classes.listItemText}}
              className={classes.sideListDynamicElement}
              primary={category.displayName}
            />
          </ListItem>
        </Link>
      )
    });
    return (
      <Drawer open={this.props.isSideBarOpen} onClose={this.props.closeSideBar}>
        <List className={classes.sideList} onClick={this.props.closeSideBar}>
          <ListItem>
            <ListItemText
              classes={{primary:classes.listItemText}}
              primary={"Categories"}
            />
          </ListItem>
          <Divider />
          {items}
        </List>
      </Drawer>
    );
  }
}

const mapStateToProps = state => ({
  isSideBarOpen: state.controls.isSideBarOpen,
});

const mapDispatchToProps = dispatch => ({
  closeSideBar: () => dispatch(closeSideBar())
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SideBar));
