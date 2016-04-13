import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';

import {gutter} from '../variables'

export default class InputField extends Component {
  constructor(){
    super()
    this.state = {
      text: ''
    }
  }
  render(){
    const {placeHolder} = this.props;
    return(
      <TextInput
         style={styles.input}
         onChangeText={(text) => this.setState({text})}
         value={this.state.text}
         placeholder={placeHolder}
         placeholderTextColor={'#9197A3'}
       />
    )
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: '#D8D8D8',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 3,
    backgroundColor: '#FAFAFA',
    marginBottom: gutter
  }
});
