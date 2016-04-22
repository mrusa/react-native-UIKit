import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {AvatarHeader, ImageCustom, LikeBtn, ArticleText, Divider } from 'react-native-uikit';

const PostText = (props) => (
  <View>
    <AvatarHeader
      src={'https://s3.amazonaws.com/uifaces/faces/twitter/9lessons/128.jpg'}
      heading={'John Doe'}
      timestamp={1460227647478}
      circle={true}
      backgroundColor={'#fff'}
      height={40}
      gutter={10}
    />

    <View style={{paddingTop: 10, paddingHorizontal: 10, backgroundColor: '#fff'}}>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
      <Divider color={'#eee'}/>
    </View>
  </View>
);
export default PostText;
