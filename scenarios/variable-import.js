import React, {Component} from 'react';
import {AppRegistry, View, StyleSheet, Image} from 'react-native';
import {name as appName} from '../app.json';

const imgNm = Math.ceil(Math.random() * 3);
const img = require(`./fixtures/images/${imgNm}.png`);

export default class App extends Component {
  render() {
    const {loading, text} = this.state;
    return (
      <View style={styles.container}>
        <Image source={img} />
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
