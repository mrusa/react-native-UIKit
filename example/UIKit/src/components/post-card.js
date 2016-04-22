import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { AvatarHeader, Card } from 'react-native-uikit';

const PostCard = ({heading}) => (
  <View>
    <AvatarHeader src={'https://s3.amazonaws.com/uifaces/faces/twitter/evagiselle/128.jpg'}
      heading={heading}
      timestamp={1460227647478}
      circle={true}
      backgroundColor={'#fff'}
      height={40}
      gutter={10}
    />
    <Card
      onPress={() => console.log('card pressed')}
      src={'https://s-media-cache-ak0.pinimg.com/736x/5f/70/41/5f704159cdf6512cf21000ec4827fc03.jpg'}
      title={'Card title - Some quick example text to build on the card title and make up the bulk of the card'}
      link={'www.example.com'}
      radius={5}
      marginBottom={30}
    />
  </View>
);
export default PostCard;
