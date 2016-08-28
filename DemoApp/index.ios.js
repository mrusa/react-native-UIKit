/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';

import Login from './src/containers/login';
import Root from './src/containers/root';

class DemoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin: true,
    };
    this.login = this.login.bind(this);
  }
  login() {
    this.setState({
      loggedin: true,
    });
  }
  render() {
    return (
      <View style={{ flex:1 }}>
        {this.state.loggedin
          ?
          <Root />
          :
          <Login skip={this.login} />
        }
      </View>
    );
  }

}

AppRegistry.registerComponent('DemoApp', () => DemoApp);
