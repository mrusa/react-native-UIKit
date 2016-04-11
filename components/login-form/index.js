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

import {
  Button,InputField, LoginFb, FieldError
} from '../'


const LoginForm = () => (
  <View style={styles.form}>
    <InputField placeHolder={'email'}/>
    <InputField placeHolder={'password'}/>
    <FieldError errorMsg={'username or password incorrect'}/>
    <Button color={'#fff'} backgroundColor={secondary} radius={5}>Submit</Button>
    <LoginFb/>
  </View>
);

export default LoginForm;


var styles = StyleSheet.create({
  form: {
    paddingHorizontal: 10,
    flexDirection: 'column',
    //height: 200,
    justifyContent: 'space-between',
    //alignItems: 'center',
    //backgroundColor: 'red',
    marginTop: 30,
    marginBottom: 50,
  },
});
