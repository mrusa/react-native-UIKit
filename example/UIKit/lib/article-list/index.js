'use strict'
import React, {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ListView,
  Dimensions
} from 'react-native';

import {primary, gutter} from '../variables'
const {height, width} = Dimensions.get('window');

import {DateItem} from '../'

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const ArticleList = ({
  items, headerContent, cellHeight,titleSize,titleColor,categoryColor, categoryWeight, categorySize,
  footerContent, backgroundColor, dateColor, headerWeight, onPress, gutter, i, fontSize
}) => (
  <ListView
    renderHeader={() => <View style={{width: width}}>{headerContent}</View>}
    renderFooter={() => <View style={{width: width}}>{footerContent}</View>}
    dataSource={ds.cloneWithRows(items)}
    renderRow={(rowData, i) => <TouchableOpacity
      style={{backgroundColor: backgroundColor}}
      key={i}
      onPress={(id) => onPress(rowData.id)}>
      <View style={[styles.row, {flexDirection:'row', paddingVertical: gutter, paddingHorizontal:gutter}]}>
        <View style={{flex:2}}>
          <Image source={{uri: rowData.src}}
            style={[styles.img,{marginRight: gutter, height:cellHeight}]}
          />
        </View>
        <View style={{flex:3, justifyContent: 'space-between', flexDirection:'column', height: cellHeight}}>
          <View>
            <Text style={{color: categoryColor, fontWeight: categoryWeight, marginBottom: 3, fontSize: categorySize}}>{rowData.category}</Text>
            <Text style={[styles.text, {color: titleColor, fontSize:titleSize}]}>{_.truncate(rowData.title, {'length': 70, 'separator': /,? +/})}</Text>
          </View>
          <DateItem color={dateColor} timestamp={rowData.timestamp}/>
        </View>

      </View>
    </TouchableOpacity>}
  />
);
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //alignItems: 'center',
    borderColor: '#eee',
    borderBottomWidth: 1,
  },
  img: {
    //width:150,
    //height: 100,
  },
  text: {
    fontWeight: '500',
  }
})
ArticleList.defaultProps = {
  gutter: gutter,
  backgroundColor: '#fff',
  categoryColor: primary,
  categorySize: 14,
  categoryWeight: 'bold',
  titleSize: 16,
  titleColor: '#222',
  headerWeight: 'bold',
  cellHeight: 100,
  dateColor: '#666',
}
ArticleList.propTypes = {
  gutter: React.PropTypes.number,
  backgroundColor: React.PropTypes.string,
  fontSize: React.PropTypes.number,
  height: React.PropTypes.number,
}
export default ArticleList;
