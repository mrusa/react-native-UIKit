'use strict';

import React, {
  Image,
  TouchableOpacity,
} from 'react-native';

const ImageFull = ({src, height, onPress, children}) => (
  <TouchableOpacity onPress={onPress}>
    <Image source={{uri: src}} style={{resizeMode: 'cover', height: height}}>
      {children}
    </Image>
  </TouchableOpacity>
);

ImageFull.defaultProps = {
  height: 300
}
ImageFull.propTypes = {
  src: React.PropTypes.string,
  height: React.PropTypes.number,
  onPress: React.PropTypes.func,
}
export default ImageFull;
