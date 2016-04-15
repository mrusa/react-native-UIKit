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
  }
  render(){
    const {placeHolder, gutter, color, backgroundColor, radius, onChange, autoCapitalize, autoCorrect } = this.props;
    return(
      <TextInput
         style={[styles.input, {marginBottom: gutter, backgroundColor: backgroundColor, borderRadius: radius}]}
         onChangeText={(text) => {this._onChange(text); onChange(text) }}
         value={this.state.text}
         placeholder={placeHolder}
         placeholderTextColor={color}
         autoCapitalize={autoCapitalize}
         autoCorrect={autoCorrect}
       />
    )
  }
}
InputField.defaultProps = {
  gutter: gutter,
  color: '#9197A3',
  backgroundColor: '#FAFAFA',
  radius: 4,
  autoCapitalize: 'none',
  autoCorrect: false,
}
InputField.propTypes = {
  placeHolder: React.PropTypes.string,
  color: React.PropTypes.string,
  backgroundColor: React.PropTypes.string,
  gutter: React.PropTypes.number,
  radius: React.PropTypes.number,
  autoCapitalize: React.PropTypes.string,
  autoCorrect: React.PropTypes.bool,

}
const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: '#D8D8D8',
    borderWidth: 1,
    paddingHorizontal: 10,
  }
});
