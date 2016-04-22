import React, {
  StyleSheet,
  Image,
  ScrollView,
  View,
  Dimensions
} from 'react-native';

const { width} = Dimensions.get('window');

const Carousel = ({images, height, onPress, gutter, offset}) => (
  <ScrollView
    horizontal={true}
    decelerationRate={'fast'}
    directionalLockEnabled={true}
    pagingEnabled={true} // NOTE jumps to next
    showsHorizontalScrollIndicator={false}
    removeClippedSubviews={true} // NOTE experimental feature
    ref={(scrollView) => { _scrollView = scrollView; }}
    automaticallyAdjustContentInsets={false}
    //onScroll={() => { console.log('onScroll!'); }}
    scrollEventThrottle={200}
    //contentContainerStyle={{paddingHorizontal: offset ? gutter : 0}}
    height={height}>
    {images.map((item, i) => {
      return (
          <Image
            key={i}
            style={[styles.img, {height: height, width: width}]}
            source={{uri: item.src}}
          />
      );
    })}
  </ScrollView>
);

const styles = StyleSheet.create({
  img: {
    resizeMode: 'cover',
  }
})
Carousel.defaultProps = {
  images: [],
  height: 300,
  gutter: 0,
  offset: false
}
Carousel.propTypes = {
  images: React.PropTypes.array.isRequired,
  height: React.PropTypes.number,
  onPress:  React.PropTypes.func,
  gutter: React.PropTypes.number,
}
export default Carousel;
