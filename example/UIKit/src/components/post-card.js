import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

/// import { AvatarHeader, Card } from 'react-native-uikit';
import { AvatarHeader, Card } from '../../lib';

const PostCard = ({avatar, content}) => (
  <View>
    <AvatarHeader src={'https://s3.amazonaws.com/uifaces/faces/twitter/evagiselle/128.jpg'}
      heading={avatar.username}
      timestamp={avatar.timestamp}
      circle={true}
      backgroundColor={'#fff'}
      height={40}
      gutter={10}
    />
    <Card
      onPress={() => console.log('card pressed')}
      src={content.src}
      title={content.title}
      link={content.text}
      radius={5}
      marginBottom={30}
    />
  </View>
);
export default PostCard;
