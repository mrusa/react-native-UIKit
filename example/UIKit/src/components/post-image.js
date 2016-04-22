import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {AvatarHeader, ImageCustom, LikeBtn, ArticleText, Divider } from 'react-native-uikit';

const PostImage = (props) => (
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
  <ImageCustom
      src={'http://i1.2photo.ru/u/w/539022.jpg'}
      height={300}
      onPress={() => console.log('pressed')}
    />
    <View style={{paddingTop: 10, paddingHorizontal: 10, backgroundColor: '#fff'}}>
      <LikeBtn
        active={true}
        //color={primary}
        likes={232}
        onPress={() => console.log('liked')}
      />
      <ArticleText
        username={'John Doe'}
        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}
        //highLightColor={primary}
        onPress={() => console.log('link to profile')}
      />
      <Divider color={'#eee'}/>
    </View>
  </View>
);
export default PostImage;
