import React, {
  Component,
  defaultProps,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  View,
  Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window');

import {gutter} from '../variables'

const GalleryOffset = ({imagesArray, display}) => {

  const images = imagesArray;
  // row
  if(display === 'row'){
    return (
      <View style={styles.row}>
        <Image source={{uri: images[0]}} style={styles.full}/>
        <View style={styles.lowerSection}>
          <Image source={{uri: images[1]}} style={styles.half}/>
          <Image source={{uri: images[2]}} style={styles.half}/>
        </View>
      </View>
    );
  }
  // column
  else {
    return (
      <View style={styles.column}>
        <Image source={{uri: images[0]}} style={styles.mainHalf}/>
        <View style={styles.lowerSectionColumn}>
          <Image source={{uri: images[1]}} style={styles.half}/>
          <Image source={{uri: images[2]}} style={styles.half}/>
        </View>
      </View>
    );
  }

}

//const spacing = 0.025;
//const gutter = width/2*spacing;
//const {gutter} = this.props;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: width/2*0.025
  },
  column: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width/2*0.025
  },
  lowerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lowerSectionColumn: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: width/2.025-(width/2*0.025),
    height: width-(width/2*0.025),
  },
  full: {
    width: width - (width/2*0.025)*2,
    height: width/2.05,
    marginBottom: width/2*0.025
  },
  mainHalf: {
    height: width-(width/2*0.025)*2,
    marginBottom: width/2*0.025,
    width: width/2.025-(width/2*0.025),
  },
  half: {
    width: width/2.025-(width/2*0.025),
    height: width/2.025-(width/2*0.025),
    marginBottom: width/2*0.025
  }
})

GalleryOffset.defaultProps = {
  display: 'column',
  spacing: 0.025,
  gutter: 10
}
export default GalleryOffset;
