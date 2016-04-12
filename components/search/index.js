import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  View
} from 'react-native';

import {primary, lightGrey, gutter} from '../variables'

export default class Search extends Component {
  constructor(){
    super()
    this.state = {
      text: ''
    }
  }
  render(){
    const {placeHolder, backgroundColor, innerBackground, radius} = this.props;
    return(
      <View style={[styles.holder, {backgroundColor: backgroundColor}]}>
        <TextInput
           style={[styles.input, {backgroundColor:innerBackground, borderRadius: radius}]}
           onChangeText={(text) => this.setState({text})}
           value={this.state.text}
           placeholder={placeHolder}
           placeholderTextColor={'#9197A3'}
         />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  holder: {
    //flex: 1,
    //backgroundColor: backgroundColor,
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: '#D8D8D8',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 3,
    //backgroundColor: innerBackground,
    //marginBottom: gutter
  }
});
