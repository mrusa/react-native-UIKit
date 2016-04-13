import React, {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import _ from 'lodash'

import { primary, gutter } from '../variables'
const {height, width} = Dimensions.get('window');

const ArticleText = ({username, text, description, highLightColor, onPress}) => (
  <View style={styles.row}>
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.user, {color: highLightColor}]}>{username}</Text>
    </TouchableOpacity>
    <Text style={styles.mainTxt}>{_.truncate(text, {'length': 100, 'separator': /,? +/})}</Text>
  </View>
);

const styles = StyleSheet.create({
  row: {
    marginVertical: gutter,
  },
  user: {
    marginRight: gutter,
    marginBottom: 5,
    fontWeight: '600'
  },
  mainTxt: {

  }
})

ArticleText.defaultProps = {
  highLightColor: primary
}

ArticleText.propTypes = {
  username: React.PropTypes.string,
  text: React.PropTypes.string,
  description: React.PropTypes.string,
  highLightColor: React.PropTypes.string,
  onPress: React.PropTypes.func,
}

export default ArticleText;
