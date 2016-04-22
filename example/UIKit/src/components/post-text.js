import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {AvatarHeader, ImageCustom, LikeBtn, ArticleText, Divider } from 'react-native-uikit';

const PostText = ({avatar, content}) => (
  <View>
    <AvatarHeader
      src={avatar.src}
      heading={avatar.username}
      timestamp={avatar.timestamp}
      circle={true}
      backgroundColor={'#fff'}
      height={40}
      gutter={10}
    />
    <View style={{paddingTop: 10, paddingHorizontal: 10, backgroundColor: '#fff'}}>
      <Text>{content.text}</Text>
      <Divider color={'#eee'}/>
    </View>
  </View>
);
export default PostText;
