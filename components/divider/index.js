import React, {
  Component,
  StyleSheet,
  View,
} from 'react-native';

const Divider = ({color}) => (
  <View style={[styles.seperator, {borderColor: color}]}></View>
);

export default Divider;

var styles = StyleSheet.create({
  seperator: {
    borderTopWidth: 1,
    height: 1,
    marginVertical: 10,
  },

});
