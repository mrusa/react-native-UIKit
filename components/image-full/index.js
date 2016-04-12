import React, {
  Image,
  TouchableOpacity,
} from 'react-native';

const ImageFull = ({src, height, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <Image source={{uri: src}} style={{resizeMode: 'cover', height: height}} />
  </TouchableOpacity>
);

export default ImageFull;
