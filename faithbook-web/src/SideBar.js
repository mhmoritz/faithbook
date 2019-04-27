import React, { Component } from 'react';
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
  listItemTextStatic: {
    fontWeight: 600,
  },
  listItemTextDynamic: {
    fontWeight: 500,
  }
};

class SideBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [],
    };
    this.open = true;
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:5000/allCategories")
      .then(response => {
        this.setState({categories: response.data});
    });
  }

  render() {
    const { classes } = this.props;
    const items = this.state.categories.map(category => {
      return (
        <ListItem button>
          <Link to={`/${category.key}`}>
            <ListItemText
              classes={{primary:classes.listItemTextDynamic}}
              className={classes.sideListDynamicElement}
              primary={category.displayName}
            />
          </Link>
        </ListItem>
      )
    });
    return (
      <Drawer open={this.open} onClose={console.log("lol")}>
        <List className={classes.sideList}>
          <ListItem>
            <ListItemText
              classes={{primary:classes.listItemTextStatic}}
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

export default withStyles(styles)(SideBar);
