'use strict';
import React, {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const { width,  height } = Dimensions.get('window');

const Thumb = ({key, uri, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <Image key={key} style={styles.img} source={{uri: uri}} />
  </TouchableOpacity>
);

let _scrollView: ScrollView;

const ThumbSwiper = ({images, onPress}) => (
  <ScrollView
    horizontal={true}
    decelerationRate={'fast'}
    directionalLockEnabled={true}
    //pagingEnabled={true} // NOTE jumps to next
    directionalLockEnabled={true}
    showsHorizontalScrollIndicator={false}
    removeClippedSubviews={true} // NOTE experimental feature
    ref={(scrollView) => { _scrollView = scrollView; }}
    automaticallyAdjustContentInsets={false}
    onScroll={() => { console.log('onScroll!'); }}
    scrollEventThrottle={200}
    contentContainerStyle={styles.scrollView}>
    {images.map((uri, i) => <Thumb key={i} onPress={onPress} uri={uri}/>)}
  </ScrollView>
);

ThumbSwiper.propTypes = {
  images: React.PropTypes.array,
  onPress: React.PropTypes.func,
}

export default ThumbSwiper;

const styles = StyleSheet.create({
  scrollView: {
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    color: '#888888',
    left: 80,
    top: 20,
    height: 40,
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
    width: width/3.05,
    height: width/3.05,
    marginRight: width/3*0.025,
    marginBottom: width/3*0.025
  }
})
