import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';
import {name as appName} from '../app.json';
import markdownImport from './fixtures/markdown.md';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>hey: {markdownImport}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent(appName, () => App);
