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
  _onChange(text){
    this.setState({
      text: text
    })
    this.props.onChange(this.state.text)
  }
  render(){
    const {placeHolder, gutter, color, backgroundColor, radius, onChange } = this.props;
    return(
      <TextInput
         style={[styles.input, {marginBottom: gutter, backgroundColor: backgroundColor, borderRadius: radius}]}
         onChangeText={(text) => this._onChange(text)}
         value={this.state.text}
         placeholder={placeHolder}
         placeholderTextColor={color}
       />
    )
  }
}
InputField.defaultProps = {
  gutter: gutter,
  color: '#9197A3',
  backgroundColor: '#FAFAFA',
  radius: 4,
}
InputField.propTypes = {
  placeHolder: React.PropTypes.string,
  color: React.PropTypes.string,
  backgroundColor: React.PropTypes.string,
  gutter: React.PropTypes.number,
  radius: React.PropTypes.number,
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: '#D8D8D8',
    borderWidth: 1,
    paddingHorizontal: 10,
  }
});
