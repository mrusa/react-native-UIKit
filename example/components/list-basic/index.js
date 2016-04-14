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

const Row = ({rowData, backgroundColor, color, onPress, gutter, i, fontSize}) => (
  <TouchableOpacity style={{backgroundColor: backgroundColor}} key={i} onPress={onPress.bind(this, rowData.id)}>
    <View style={[styles.row, {marginLeft:gutter, paddingVertical: gutter}]}>
      <Text style={[styles.text, {color: color, fontSize: fontSize}]}>{rowData.title}</Text>
      <Image source={require('./assets/more.png')} style={[styles.more,{height: 12, width: 7, marginRight: gutter}]}/>
    </View>
  </TouchableOpacity>
);

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const ListBasic = (props) => (
  <ListView
    dataSource={ds.cloneWithRows(props.items)}
    renderRow={(rowData) => <Row rowData={rowData} {...props}/>}
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
