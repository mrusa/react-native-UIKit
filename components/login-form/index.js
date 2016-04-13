import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  View
} from 'react-native';

import {defaultColor, primary, secondary, info} from '../variables'

import { Button,InputField, LoginFb, FieldError } from '../'

const LoginForm = ({backgroundColor, radius, color}) => (
  <View style={styles.form}>
    <InputField placeHolder={'email'} radius={radius}/>
    <InputField placeHolder={'password'} radius={radius}/>
    <FieldError errorMsg={'username or password incorrect'} error={true}/>
    <Button color={'#fff'} backgroundColor={backgroundColor} radius={radius}>Submit</Button>
    <LoginFb/>
  </View>
);

const styles = StyleSheet.create({
  form: {
    paddingHorizontal: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 50,
  },
});
LoginForm.defaultProps = {

}
export default LoginForm;
