import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { Button, InputField, FieldError } from '../';

const styles = StyleSheet.create({
  form: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 50,
  },
});

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onEmailChange(text) {
    this.setState({
      email: text,
    });
  }
  onPasswordChange(text) {
    this.setState({
      password: text,
    });
  }
  onSubmit() {
    this.props.onSubmit(this.state.email, this.state.password);
  }
  render() {
    const { inputRadius, error, errorMsg, btnBackgroundColor, btnColor, btnRadius } = this.props;
    return (
      <View style={styles.form}>
        <InputField
          placeHolder={'email'}
          radius={inputRadius}
          onChange={this.onEmailChange}
        />
        <InputField
          placeHolder={'password'}
          radius={inputRadius}
          onChange={this.onPasswordChange}
        />
        <FieldError
          errorMsg={errorMsg}
          error={error}
        />
        <Button
          color={btnColor}
          backgroundColor={btnBackgroundColor}
          onPress={this.onSubmit}
          radius={btnRadius}
        >
          Submit
        </Button>
      </View>
    );
  }
}

LoginForm.defaultProps = {
  error: false,
  errorMsg: 'something went wrong',
};

LoginForm.propTypes = {
  backgroundColor: React.PropTypes.string,
  radius: React.PropTypes.number,
  color: React.PropTypes.string,
  errorMsg: React.PropTypes.string,
  onSubmit: React.PropTypes.func,
  inputRadius: React.PropTypes.number,
  error: React.PropTypes.bool,
  btnBackgroundColor: React.PropTypes.string,
  btnColor: React.PropTypes.string,
  btnRadius: React.PropTypes.number,
};
