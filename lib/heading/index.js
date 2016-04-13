'use strict'
import React, {
  StyleSheet,
  Text,
} from 'react-native';

const Heading = ({size, weight, children}) => (
  <Text style={[styles.title, {fontSize: size, fontWeight: weight}, ]}>{children}</Text>
)

Heading.propTypes = {
  weight: React.PropTypes.string,
  size: React.PropTypes.number
}

Heading.defaultProps = {
  weight: '600',
  size: 17
}

var styles = StyleSheet.create({
  title: {
    marginLeft: 10,
  }
})

export default Heading;
