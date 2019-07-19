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
import LinkCreator from './LinkCreator';

const styles = {
  sideList: {
    width: 250,
    marginTop: 10,
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

  fetchDisplayNamesFromServer = (language) => {
    axios.get(`http://backend-env.mmkwrgit9f.eu-west-2.elasticbeanstalk.com/allCategories?language=${language}`)
      .then(response => {
        this.setState({categories: response.data});
    });
  }

  componentDidMount() {
    const { language } = this.props;
    this.fetchDisplayNamesFromServer(language)
  }

  componentWillReceiveProps(nextProps) {
    const wasLanguageChanged = nextProps.language !== this.props.language;
    console.log(wasLanguageChanged)
    if (wasLanguageChanged) {
      console.log("Language was changed, gonna fetch")
      this.fetchDisplayNamesFromServer(nextProps.language)
    }
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
          {items}
        </List>
        <Divider />
        <div className='StdLinkGroup'>
          <LinkCreator linkName="Terms" link="localhost:3000/friends"/>
          <LinkCreator linkName="Privacy" link="localhost:3000/love"/>
          <LinkCreator linkName="FAQ" link="localhost:3000/talent"/>
          <LinkCreator linkName="Manage consent" link="localhost:3000/faith"/>
          <s className='StdLinkText'>FAITHBOOK &#169; 2019</s>
        </div>
        <Divider />
      </Drawer>
    );
  }
}

const mapStateToProps = state => ({
  isSideBarOpen: state.controls.isSideBarOpen,
  language: state.content.language,
});

const mapDispatchToProps = dispatch => ({
  closeSideBar: () => dispatch(closeSideBar())
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SideBar));
