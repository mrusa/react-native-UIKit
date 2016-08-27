import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import { AlertMessage, ArticleText, ArticleList, Avatar, AvatarHeader, Button,
  ButtonOutline, Card, Carousel, Close, DateItem, Divider, FieldError, Grid, GalleryOffset,
  Heading, ImageCustom, InputField, LikeBtn, ListBasic, LoginForm, Message, ProfileHeader,
  MessageList, RatingBox, ReviewCell, ThumbSwiper, Time
} from '../../lib'

const AllComponents = () => (
  <ScrollView style={{flex:1}}>
    <AlertMessage
      message={'This is the alert message here'}
      onPress={() => console.log('pressed')}
    />
    <ArticleText
      username={'username'}
      text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
      onPress={() => console.log('pressed')}
    />

    <ArticleList
      headerContent={<Text style={{textAlign:'center', fontSize: 20, padding: 10, backgroundColor: '#eee', marginBottom: 3}}>HEADER CONTENT</Text>}
      items={[
        {id:0, category:'Misc', timestamp: 1463338637801, title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', src:'https://placehold.it/200/798466'},
        {id:1, category:'Misc', timestamp: 1463338637801, title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', src:'https://placehold.it/200/311112'},
        {id:2, category:'Misc', timestamp: 1463338637801, title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', src:'https://placehold.it/200/D4BB69'},
        {id:3, category:'Misc', timestamp: 1463338637801, title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', src:'https://placehold.it/200/ABB2B8'},
        {id:4, category:'Misc', timestamp: 1463338637801, title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', src:'https://placehold.it/200/798466'},
        {id:5, category:'Misc', timestamp: 1463338637801, title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', src:'https://placehold.it/200/919888'},
      ]}
      footerContent={<Text style={{textAlign:'center', fontSize: 20, padding: 10, backgroundColor: '#eee'}}>FOOTER CONTENT</Text>}
      onPress={(id) => console.log(id)}
    />

    <Avatar
      src={'https://s3.amazonaws.com/uifaces/faces/twitter/evagiselle/128.jpg'}
      size={40}
      circle={true}
      onPress={() => console.log('pressed')}
    />

    <View>
    <AvatarHeader src={'https://s3.amazonaws.com/uifaces/faces/twitter/evagiselle/128.jpg'}
      heading={'Lynsey Smith'}
      timestamp={1460227647478}
      circle={true}
      backgroundColor={'#fff'}
      height={40}
      gutter={10}
    />
    </View>

    <Button
      color={'#fff'}
      backgroundColor={'#0094EA'}
      radius={5}>
      Submit
    </Button>

    <ButtonOutline
      color={'#222'}
      borderWidth={4}
      fontWeight={'bold'}
      fontSize={19}
      radius={1}>
      Submit
    </ButtonOutline>

    <Card
      onPress={() => console.log('card pressed')}
      src={'https://s-media-cache-ak0.pinimg.com/736x/5f/70/41/5f704159cdf6512cf21000ec4827fc03.jpg'}
      title={'Card title - Some quick example text to build on the card title and make up the bulk of the card'}
      link={'www.example.com'}
      radius={5}
      marginBottom={30}
    />

    <View>
    <Carousel
      images={[
        {id:0, src:'https://placehold.it/600/311112'},
        {id:1, src:'https://placehold.it/600/59C480'},
        {id:2, src:'https://placehold.it/600/546C80'},
        {id:3, src:'https://placehold.it/600/D58554'},
        {id:4, src:'https://placehold.it/600/F0CD9B'},
        {id:5, src:'https://placehold.it/600/311112'},
      ]}
      height={300}
    />
    </View>

    <Close
      size={50}
      color={'#222'}
      onPress={() => console.log('closed')}
    />

    <DateItem
      timestamp={1460227647478}
      color={'#222'}
      marginLeft={10}
    />

    <Divider
      color={'#eee'}
    />

    <FieldError
      errorMsg={'error something has gone wrong!'}
      error={true}
      color={'red'}
      marginBottom={40}
    />

    <View>
    <Grid
      headerContent={<Text style={{textAlign:'center', fontSize: 20, padding: 10, backgroundColor: '#eee', marginBottom: 3}}>HEADER CONTENT</Text>}
      images={[
        {id:0, src:'https://placehold.it/200/798466'},
        {id:1, src:'https://placehold.it/200/311112'},
        {id:2, src:'https://placehold.it/200/ABB2B8'},
        {id:3, src:'https://placehold.it/200/D4BB69'},
        {id:4, src:'https://placehold.it/200/798466'},
        {id:5, src:'https://placehold.it/200/919888'},
        {id:6, src:'https://placehold.it/200/ABB2B8'},
        {id:7, src:'https://placehold.it/200/919888'},
        {id:8, src:'https://placehold.it/200/A9C781'},
        {id:9, src:'https://placehold.it/200/311112'},
      ]}
      footerContent={<Text style={{textAlign:'center', fontSize: 20, padding: 10, backgroundColor: '#eee'}}>FOOTER CONTENT</Text>}
      onPress={(id) => console.log(id)}
      itemsPerRow={3}
      spacing={2}
    />
    </View>

    <GalleryOffset
      imagesArray={[
        'http://2.bp.blogspot.com/-QnUrv6hrusQ/UTuCbLI45xI/AAAAAAAAvEo/REbD2Sp3r84/s1600/benoit-paille1.jpg',
        'http://justsomething.co/wp-content/uploads/2013/09/black-and-white-photography-benoit-courti-1.jpg',
        'http://i.imgur.com/YaQDc.jpg?1',
        'http://farm4.staticflickr.com/3284/3032859171_9a71ea30c1_z.jpg',
        'http://livefastmag.com/wp-content/uploads/2011/10/1499c4834a64469dd570a47a08d503d2.jpg',
        'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg',
      ]}
      display={'row'}
    />


    <ImageCustom
      src={'https://s-media-cache-ak0.pinimg.com/736x/9c/11/d8/9c11d813826489f82b3f4c02a06ea815.jpg'}
      height={300}
      overlayColor={'#222'}
      overlayOpacity={0.8}
      fullHeight={true}
    >
    <View style={{flex:1, justifyContent:'center'}}>
      <Text style={{color:'#fff', backgroundColor:'transparent',fontSize:90, fontWeight: '100', textAlign:'center'}}>YES HELLO</Text>
    </View>
    </ImageCustom>

    <InputField
      placeHolder={'i am the placeholder txt'}
      gutter={10}
      color={'#222'}
      backgroundColor={'#eee'}
      radius={5}
    />

    <LikeBtn
      active={true}
      likes={322}
      //color={'#fa0008'}
      onPress={() => console.log('liked')}
    />

    <ListBasic
      headerContent={<Text style={{textAlign:'center', fontSize: 20, padding: 10, backgroundColor: '#eee', marginBottom: 3}}>HEADER CONTENT</Text>}
      items={[
        {id: 0, title:'Label'},
        {id: 1, title:'Label'},
        {id: 2, title:'Label'},
        {id: 3, title:'Label'}
      ]}
      footerContent={<Text style={{textAlign:'center', fontSize: 20, padding: 10, backgroundColor: '#eee'}}>FOOTER CONTENT</Text>}
      onPress={(i) => console.log(id)}
    />

    <LoginForm
      loginFb={() => console.log('login with facebook')}
      onSubmit={(email, password) => console.log(email, password)}
      error={false}
      errorMsg={'username or password incorrect'}
    />

    <Message
      active={true}
      user={'Jon Snow'}
      title={'Winter is Coming'}
      message={'Hey Rob, have you seen the weather report on tv ?'}
      timestamp={1460227614421}
    />

    <MessageList
      headerContent={<Text style={{textAlign:'center', fontSize: 20, padding: 10, backgroundColor: '#eee', marginBottom: 3}}>HEADER CONTENT</Text>}
      items={[
        {id:0, active:false, user: 'Jon Snow', title: 'Winter is Coming', message: 'Hey Rob, have you seen the weather report on tv ?', timestamp: 1460223614421},
        {id:1, active:true, user: 'Ric Lowe', title: 'Guess what I found?', message: 'Hey Rob, checkout this story ?', timestamp: 1460221614421},
        {id:2, active:true ,user: 'Jon Snow', title: 'title 3', message: 'Hey Rob, have you seen the weather report on tv ?', timestamp: 1460227614421},
      ]}
      footerContent={<Text style={{textAlign:'center', fontSize: 20, padding: 10, backgroundColor: '#eee'}}>FOOTER CONTENT</Text>}
      onPress={(id) => console.log(id)}
    />

    <ProfileHeader
      profileImg={'https://s3.amazonaws.com/uifaces/faces/twitter/evagiselle/128.jpg'}
      backgroundImg={'http://petapixel.com/assets/uploads/2014/05/ae5a74db2757e40b78ad13eb119a9224.jpg'}
    />

    <RatingBox rating={4} outOf={5}/>

    <View>
    <ReviewCell
      title={'Gaucho'}
      description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'}
      src={'https://lh5.googleusercontent.com/proxy/lvLgnhcoHke5BEhTG-bVydssje9jV_GytcBidVZh4ADXEuiybVwXN4mlIbgxxOKn2pF1uharMho8lAqGSXcMGKJMigr42UH_qZ1THp4bZplV7uyThhmwEtq38oAhKW7V5Y_6j46jAEkxkrewm9wrd_T4K2JBUw8=w271-h180'}
      onPress={() => console.log('pressed')}
      rating={4}
      outOf={5}
    />
    </View>

    <View>
    <ThumbSwiper
      images={[
        {id:0, src:'https://placehold.it/200/798466'},
        {id:1, src:'https://placehold.it/200/311112'},
        {id:2, src:'https://placehold.it/200/ABB2B8'},
        {id:3, src:'https://placehold.it/200/D4BB69'},
        {id:4, src:'https://placehold.it/200/798466'},
        {id:5, src:'https://placehold.it/200/919888'},
        {id:6, src:'https://placehold.it/200/ABB2B8'},
        {id:7, src:'https://placehold.it/200/919888'},
        {id:8, src:'https://placehold.it/200/A9C781'},
        {id:9, src:'https://placehold.it/200/311112'},
      ]}
      onPress={(id) => console.log(id)}
    />
    </View>

    <Time
      timestamp={1460227647478}
      color={'#222'}
    />
  </ScrollView>
)

export default AllComponents;
