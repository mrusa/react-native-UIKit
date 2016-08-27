import React, { Component,  } from 'react';
import  {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ListView,
  Dimensions
} from 'react-native';


import _ from 'lodash'

const {height, width} = Dimensions.get('window');

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const Grid = ({images, headerContent, footerContent, onPress, itemsPerRow, spacing}) => {

  const rounded = _.floor(_.divide(images.length, itemsPerRow))
  const outputRounded = _.take(images, rounded*itemsPerRow);
  const data = _.chunk(outputRounded, itemsPerRow); // [[],[],[]]

 function paddingFix(i, row){
   if(i === 0){
     return {
        marginRight:spacing,
     }
   } else if(i === row) {
      return {
        marginLeft: spacing
      }
   }
   else {
     return {
       marginHorizontal: spacing,
     }
   }
 }
  return(
  <ListView
      enableEmptySections={true}
      renderHeader={() => <View style={{width: width}}>{headerContent}</View>}
      renderFooter={() => <View style={{width: width}}>{footerContent}</View>}
      contentContainerStyle={styles.container}
      dataSource={ds.cloneWithRows(data)}
      renderRow={(rowData, i) => <View key={i} style={{flex:1, flexDirection: 'row', justifyContent: 'space-between'}}>
              {rowData.map((item,ii) => (
                <TouchableOpacity key={ii} onPress={(id) => onPress(item.id)} style={{flex:1, }}>
                <Image
                  style={[{flex:1, height: width/(itemsPerRow), marginVertical:2 }, paddingFix(ii,itemsPerRow-1)]}
                  source={{uri: item.src}}
                />
              </TouchableOpacity>
              ))}
            </View>}
      pageSize={10}
    />
);}

const styles = StyleSheet.create({
  container: {

  }
})

Grid.defaultProps = {
  images: [],
  spacing:2,
  rows: 3
}
Grid.propTypes = {
  images: React.PropTypes.array.isRequired,
  spacing: React.PropTypes.number,
  rows: React.PropTypes.number,
}
export default Grid;
