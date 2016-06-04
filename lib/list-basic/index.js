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

import {gutter} from '../variables'
const {height, width} = Dimensions.get('window');

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const ListBasic = ({items, headerContent, footerContent, backgroundColor, color, onPress, gutter, i, fontSize}) => (
  <ListView
    renderHeader={() => <View style={{width: width}}>{headerContent}</View>}
    renderFooter={() => <View style={{width: width}}>{footerContent}</View>}
    dataSource={ds.cloneWithRows(items)}
    renderRow={(rowData, i) => <TouchableOpacity
      style={{backgroundColor: backgroundColor}}
      key={i}
      onPress={(id) => onPress(rowData.id)}>
      <View style={[styles.row, {marginLeft:gutter, paddingVertical: gutter}]}>
        <Text style={[styles.text, {color: color, fontSize: fontSize}]}>{rowData.title}</Text>
        <Image source={require('./assets/more.png')} style={[styles.more,{height: 12, width: 7, marginRight: gutter}]}/>
      </View>
    </TouchableOpacity>}
  />
);
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#eee',
    borderBottomWidth: 1,
  },
  text: {
    //fontWeight: '500',
  }
})
ListBasic.defaultProps = {
  gutter: gutter+3,
  backgroundColor: '#fff',
  fontSize: 17,
}
ListBasic.propTypes = {
  gutter: React.PropTypes.number,
  backgroundColor: React.PropTypes.string,
  fontSize: React.PropTypes.number,
}
export default ListBasic;
