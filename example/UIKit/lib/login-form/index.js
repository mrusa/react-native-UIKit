import React, { Component } from 'react';
import  {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  View
} from 'react-native';

import {defaultColor, primary, secondary, info} from '../variables'

import { Button,InputField, LoginFb, FieldError } from '../'

export default class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this._onEmailChange = this._onEmailChange.bind(this)
    this._onPasswordChange = this._onPasswordChange.bind(this)
    this._onSubmit = this._onSubmit.bind(this)
  }
  _onEmailChange(text){
    this.setState({
      email: text
    })
  }
  _onPasswordChange(text){
    this.setState({
      password: text
    })
  }
  _onSubmit(){
    this.props.onSubmit(this.state.email, this.state.password)
  }
  render(){
    const {backgroundColor, inputRadius, color, error, onSubmit, loginFb, errorMsg, btnBackgroundColor, btnColor, btnRadius} = this.props;
    return (
      <View style={styles.form}>
        <InputField
          placeHolder={'email'}
          radius={inputRadius}
          onChange={this._onEmailChange}
        />
        <InputField
          placeHolder={'password'}
          radius={inputRadius}
          onChange={this._onPasswordChange}
        />
        <FieldError
          errorMsg={errorMsg}
          error={error}
        />
        <Button
          color={btnColor}
          backgroundColor={btnBackgroundColor}
          onPress={this._onSubmit}
          radius={btnRadius}>Submit
        </Button>
        <LoginFb onPress={loginFb}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    //flex:1,
    //paddingHorizontal: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 50,
  },
});
LoginForm.defaultProps = {
  error: false,
  errorMsg: 'something went wrong'
}
LoginForm.propTypes = {
  backgroundColor: React.PropTypes.string,
  radius: React.PropTypes.number,
  color: React.PropTypes.string,
  errorMsg: React.PropTypes.string,
}
export default LoginForm;
