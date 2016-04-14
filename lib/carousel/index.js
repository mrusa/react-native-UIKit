import React, {
  StyleSheet,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const { width} = Dimensions.get('window');

const Carousel = ({images, height, onPress}) => (
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
    //style={styles.scrollView}
    height={height}>
    {images.map((uri, i) => {
      return (
        <TouchableOpacity onPress={onPress} key={i}>
          <Image style={[styles.img, {height: height}]} source={{uri: uri}} />
        </TouchableOpacity>
      );
    })}
  </ScrollView>
);

const styles = StyleSheet.create({
  img: {
    resizeMode: 'cover',
    width: width
  }
})
Carousel.defaultProps = {
  images: [],
  height: 300,
}
Carousel.propTypes = {
  images: React.PropTypes.array.isRequired,
  height: React.PropTypes.number,
  onPress:  React.PropTypes.func,
}
export default Carousel;
