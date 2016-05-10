import React, {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

const Close = ({size, color, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={[styles.close, {fontSize: size, color: color}]}>×</Text>
  </TouchableOpacity>
);

var styles = StyleSheet.create({
  close: {
    fontWeight: 'bold',
    margin: 0,
    padding: 0,
    color: '#fff'
  }
})

Close.defaultProps = {
  size: 25,
  color: '#222'
}
Close.propTypes = {
  size: React.PropTypes.number,
  color: React.PropTypes.string,
  onPress: React.PropTypes.func,
}
export default Close;
