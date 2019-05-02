import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';
import {name as appName} from '../app.json';

export default class App extends Component {
  state = {
    loading: false,
    text: null,
  };

  async componentDidMount() {
    console.log('loading component');
    this.setState({loading: true});
    import('./fixtures/dyn').then(a => {
      setTimeout(() => {
        this.setState({loading: false, text: a.default});
      }, 1000);
    });
  }

  render() {
    const {loading, text} = this.state;
    return (
      <View style={styles.container}>
        <Text>
          loading: {String(loading)} text: {text || ''}
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
