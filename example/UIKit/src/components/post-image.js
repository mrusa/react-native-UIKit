import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {AvatarHeader, ImageCustom, LikeBtn, ArticleText, Divider } from 'react-native-uikit';

const PostImage = ({avatar, content}) => (
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
  <ImageCustom
      src={content.src}
      height={300}
      onPress={() => console.log('pressed')}
    />
    <View style={{paddingTop: 10, paddingHorizontal: 10, backgroundColor: '#fff'}}>
      <LikeBtn
        active={true}
        //color={primary}
        likes={content.likes}
        onPress={() => console.log('liked')}
      />
      <ArticleText
        username={avatar.username}
        text={content.text}
        //highLightColor={primary}
        onPress={() => console.log('link to profile')}
      />
      <Divider color={'#eee'}/>
    </View>
  </View>
);
export default PostImage;
