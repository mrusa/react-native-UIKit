/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  View,
} from 'react-native';

import Login from './src/containers/login'
import Root from './src/containers/root'

class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedin: false
    }
    this._login = this._login.bind(this)
  }
  _login(){
    this.setState({
      loggedin: true
    })
  }
  render(){
    let auth = this.state.loggedin;
    return(
      <View style={{flex:1}}>{auth ? <Root/> : <Login skip={this._login}/>}</View>
    )
  }

}

AppRegistry.registerComponent('UIKit', () => LoginScreen);
