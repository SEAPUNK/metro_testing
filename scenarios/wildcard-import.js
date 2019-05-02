import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image} from 'react-native';
import {name as appName} from '../app.json';
const images = requireAll('./scenarios/fixtures/images', './scenarios/fixtures/images');

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          <Image source={images['$1']} />
          <Image source={images['$2']} />
          <Image source={images['$3']} />
        </Text>
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
