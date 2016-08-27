/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 import React, { Component } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   View
 } from 'react-native';

 import Login from './src/containers/login'
 import Root from './src/containers/root'

 class DemoApp extends Component {
   constructor(props){
     super(props);
     this.state = {
       // TODO Change back to false
       // loggedin: false
       loggedin: true
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

AppRegistry.registerComponent('DemoApp', () => DemoApp);
