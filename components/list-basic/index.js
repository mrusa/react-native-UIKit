'use strict'
import React, {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ListView
} from 'react-native';

import {gutter} from '../variables'

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const ListBasic = ({items, backgroundColor, color, onPress, gutter}) => (
  <ListView
    dataSource={ds.cloneWithRows(items)}
    renderRow={(rowData, i) => {
      return (
        <TouchableOpacity style={{backgroundColor: backgroundColor}} key={i} onPress={onPress}>
          <View style={[styles.row, {marginLeft:gutter, paddingVertical: gutter}]}>
            <Text style={{color: color}}>{rowData}</Text>
            <Image source={require('./assets/more.png')} style={[styles.more,{height: 12, width: 7}]}/>
          </View>
        </TouchableOpacity>
      );
    }}
  />
);
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderColor: '#eee',
    borderBottomWidth: 1,
  }
})
ListBasic.defaultProps = {
  gutter: gutter,
  backgroundColor: '#fff'
}
ListBasic.propTypes = {

}
export default ListBasic;
