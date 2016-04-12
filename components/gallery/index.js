
import React from 'react-native'

var {
  View,
  Image,
  AppRegistry,
  StyleSheet,
  Dimensions,
  Text,
  TouchableHighlight,
  ScrollView,
} = React;

const {
  width,
  height
} = Dimensions.get('window');

//import GalleryItem from './gallery-item';

// TODO set height as props
const GalleryItem = ({key, uri, heightGallery}) => (
  <View style={styles.thumb} key={key}>
    <Image style={[styles.img, {height: 300}]} source={{uri: uri}} />
  </View>
);
const createThumbRow = (uri, i) => <GalleryItem key={i} uri={uri} />;

const Gallery = ({images, heightGallery}) => (
  <ScrollView
    horizontal={true}
    decelerationRate={'fast'}
    directionalLockEnabled={true}
    pagingEnabled={true} // NOTE jumps to next
    showsHorizontalScrollIndicator={false}
    removeClippedSubviews={true} // NOTE experimental feature
    ref={(scrollView) => { _scrollView = scrollView; }}
    automaticallyAdjustContentInsets={false}
    onScroll={() => { console.log('onScroll!'); }}
    scrollEventThrottle={200}
    style={styles.scrollView}
    heightGallery={heightGallery}>
    {images.map(createThumbRow)}
  </ScrollView>
);

export default Gallery;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
    //height: 300,
    //paddingLeft: 10
  },
  horizontalScrollView: {
    //height: 120,
  },
  text: {
    fontSize: 20,
    color: '#888888',
    left: 80,
    top: 20,
    height: 40,
  },
  thumb: {
    // marginRight: 10,
    //paddingHorizontal: 10,
    //padding: 10,
    //borderRadius: 3,
  },
  title: {
    fontSize:20,
    marginVertical: 10,
    fontWeight: 'bold'
  },
  buttonContents: {
    flexDirection: 'row',
    width: 64,
    height: 64,
  },
  img: {
    resizeMode: 'cover',
    height: 200,
    // width: width-40,
    width: width
  }
})
