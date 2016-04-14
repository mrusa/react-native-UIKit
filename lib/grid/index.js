import React, {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ListView,
  Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window');

const Thumb = ({data}, i) => (
  <Image
    style={{width: width/3.05, height: width/3.05, marginBottom: width/3*0.025  }}
    source={{uri: data}}
  />
);

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const Grid = ({images, headerContent, footerContent}) => (
  <ListView
    renderHeader={() => <View style={{width: width}}>{headerContent}</View>}
    renderFooter={() => <View style={{width: width}}>{footerContent}</View>}
    contentContainerStyle={styles.container}
    dataSource={ds.cloneWithRows(images)}
    renderRow={(rowData) => <Thumb data={rowData}/>}
    pageSize={1}
  />
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})

Grid.defaultProps = {
  images: []
}
Grid.propTypes = {
  images: React.PropTypes.array.isRequired,
}
export default Grid;
