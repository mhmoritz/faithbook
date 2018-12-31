import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Vers',
  };


  constructor(props){
    super(props);
    this.state = {
      vers: ""
    };
  }


  getVers() {
    return fetch('https://bible-api.com/john%203:16')
      .then((response) => response.json())
      .then((responseJson) => this.setState({
        vers: responseJson.text
      }))
      .catch((error) => {
        console.error(error);
      });
    }


  render() {

    this.getVers();

    return (
      <ScrollView style={styles.container}>

        <Text>{this.state.vers}</Text>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
