'use strict';

import React, {
  Image,
  TouchableOpacity,
} from 'react-native';

const ImageFullWidth = ({src, height, onPress, children}) => (
  <TouchableOpacity onPress={onPress}>
    <Image source={{uri: src}} style={{resizeMode: 'cover', height: height}}>
      {children}
    </Image>
  </TouchableOpacity>
);

ImageFullWidth.defaultProps = {
  height: 300
}
ImageFullWidth.propTypes = {
  src: React.PropTypes.string,
  height: React.PropTypes.number,
  onPress: React.PropTypes.func,
}
export default ImageFullWidth;
