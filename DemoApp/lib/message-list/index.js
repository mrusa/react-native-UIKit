import React from 'react';
import {
  View,
  ListView,
  Dimensions,
} from 'react-native';

import { Message } from '../';

const { width } = Dimensions.get('window');
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

const MessageList = ({
  items, headerContent, footerContent,
  backgroundColor, timestamp, onPress,
}) => (
  <ListView
    enableEmptySections={true}
    contentContainerStyle={{ backgroundColor }}
    renderHeader={() => <View style={{ width }}>{headerContent}</View>}
    renderFooter={() => <View style={{ width }}>{footerContent}</View>}
    dataSource={ds.cloneWithRows(items)}
    renderRow={(rowData) => <Message
      user={rowData.user}
      active={rowData.active}
      title={rowData.title}
      message={rowData.message}
      timestamp={timestamp}
      onPress={() => onPress(rowData.id)}
    />}
  />
);

MessageList.defaultProps = {
  backgroundColor: '#E9EAEF',
};

MessageList.propTypes = {
  gutter: React.PropTypes.number,
  backgroundColor: React.PropTypes.string,
  fontSize: React.PropTypes.number,
  onPress: React.PropTypes.func,
  items: React.PropTypes.array,
  timestamp: React.PropTypes.number,
  headerContent: React.PropTypes.element,
  footerContent: React.PropTypes.element,
};

export default MessageList;
