'use strict'
import React, { Component } from 'react';
import  {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ListView,
  Dimensions
} from 'react-native';

import { Message } from '../'

import {gutter} from '../variables'
const {height, width} = Dimensions.get('window');

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const MessageList = ({items, headerContent, footerContent, backgroundColor, timestamp, onPress}) => (
  <ListView
    enableEmptySections={true}
    contentContainerStyle={{backgroundColor: backgroundColor}}
    renderHeader={() => <View style={{width: width}}>{headerContent}</View>}
    renderFooter={() => <View style={{width: width}}>{footerContent}</View>}
    dataSource={ds.cloneWithRows(items)}
    renderRow={(rowData) => <Message
        user={rowData.user}
        active={rowData.active}
        title={rowData.title}
        message={rowData.message}
        timestamp={timestamp}
        onPress={(id) => onPress(rowData.id)}
    />}
  />
);


MessageList.defaultProps = {
  backgroundColor: '#E9EAEF',
}
MessageList.propTypes = {
  gutter: React.PropTypes.number,
  backgroundColor: React.PropTypes.string,
  fontSize: React.PropTypes.number,
  onPress: React.PropTypes.func,
}
export default MessageList;
