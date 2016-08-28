import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ListView,
  Dimensions,
} from 'react-native';

import { gutter } from '../variables';

const { width } = Dimensions.get('window');

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#eee',
    borderBottomWidth: 1,
  },
});

const ListBasic = ({ items, headerContent, footerContent, backgroundColor, color, onPress, gutter, fontSize }) => (
  <ListView
    renderHeader={() => <View style={{ width }}>{headerContent}</View>}
    renderFooter={() => <View style={{ width }}>{footerContent}</View>}
    dataSource={ds.cloneWithRows(items)}
    renderRow={(rowData, i) =>
      <TouchableOpacity
        style={{ backgroundColor }}
        key={i}
        onPress={() => onPress(rowData.id)}
      >
        <View
          style={[styles.row, {
            marginLeft: gutter,
            paddingVertical: gutter
          }]}
        >
          <Text style={[styles.text, { color, fontSize }]}>
            {rowData.title}
          </Text>
          <Image
            source={ require('./assets/more.png') }
            style={[styles.more, {
              height: 12,
              width: 7,
              marginRight: gutter,
            }]}
          />
        </View>
      </TouchableOpacity>}
  />
);

ListBasic.defaultProps = {
  gutter: gutter + 3,
  backgroundColor: '#fff',
  fontSize: 17,
};

ListBasic.propTypes = {
  gutter: React.PropTypes.number,
  backgroundColor: React.PropTypes.string,
  fontSize: React.PropTypes.number,
  headerContent: React.PropTypes.element,
  footerContent: React.PropTypes.element,
  items: React.PropTypes.array,
  onPress: React.PropTypes.func,
  color: React.PropTypes.string,
};

export default ListBasic;
