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

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const Grid = ({images, headerContent, footerContent, onPress}) => (
  <ListView
    renderHeader={() => <View style={{width: width}}>{headerContent}</View>}
    renderFooter={() => <View style={{width: width}}>{footerContent}</View>}
    contentContainerStyle={styles.container}
    dataSource={ds.cloneWithRows(images)}
    renderRow={(rowData, i) => <TouchableOpacity key={i} onPress={(id) => onPress(rowData.id)}>
      <Image
        style={{width: width/3.05, height: width/3.05, marginBottom: width/3*0.025  }}
        source={{uri: rowData.src}}
      />
    </TouchableOpacity>}
    pageSize={10}
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
