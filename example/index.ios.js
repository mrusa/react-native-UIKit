'use strict'
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  LayoutAnimation,
  ScrollView
} from 'react-native';

import {galleryImages, restaurantData, userPosts, messages, cardData, users} from './data.js'

import {defaultColor, primary, lightGrey, secondary, info,} from './components/variables'

import {
  MessageList, Button, RatingBox, LoginFb, Heading, Divider, Avatar, Card, AvatarHeader, Close, AlertMessage, LikeBtn,
  Carousel, InputField, Time, DateItem, Calendar, ThumbSwiper, ModalCustom, Grid, LoginForm, Message,
  ReviewCell, MapSection, Search, GalleryOffset, FadeInUp, ImageFullWidth, ProfileHeader, ArticleText, ListBasic
} from './components'



export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: ''
    }
    this._search = this._search.bind(this)
  }
  _search(text){
    this.setState({
      search:text
    })
  }
  render(){
    return(
      <ScrollView style={styles.container}>

        <Grid
          headerContent={<Text style={{textAlign:'center', fontSize: 20, padding: 10, backgroundColor: '#eee', marginBottom: 3}}>HEADER CONTENT</Text>}
          images={[
            {id:0, src:'http://2.bp.blogspot.com/-QnUrv6hrusQ/UTuCbLI45xI/AAAAAAAAvEo/REbD2Sp3r84/s1600/benoit-paille1.jpg'},
            {id:1, src:'http://justsomething.co/wp-content/uploads/2013/09/black-and-white-photography-benoit-courti-1.jpg'},
            {id:2, src:'http://i.imgur.com/YaQDc.jpg?1'},
            {id:3, src:'http://farm4.staticflickr.com/3284/3032859171_9a71ea30c1_z.jpg'},
            {id:4, src:'http://livefastmag.com/wp-content/uploads/2011/10/1499c4834a64469dd570a47a08d503d2.jpg'},
            {id:5, src:'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg'},
            {id:6, src:'http://2.bp.blogspot.com/-QnUrv6hrusQ/UTuCbLI45xI/AAAAAAAAvEo/REbD2Sp3r84/s1600/benoit-paille1.jpg'},
            {id:7, src:'http://justsomething.co/wp-content/uploads/2013/09/black-and-white-photography-benoit-courti-1.jpg'},
            {id:8, src:'http://i.imgur.com/YaQDc.jpg?1'},
          ]}
          footerContent={<Text style={{textAlign:'center', fontSize: 20, padding: 10, backgroundColor: '#eee'}}>FOOTER CONTENT</Text>}
          onPress={(id) => console.log(id)}
        />


        <MessageList
          //backgroundColor={'red'}
          headerContent={<Text style={{textAlign:'center', fontSize: 20, padding: 10, backgroundColor: '#eee', marginBottom: 3}}>HEADER CONTENT</Text>}
          items={[
            {id:0, active:false, user: 'Jon Snow', title: 'Winter is Coming', message: 'Hey Rob, have you seen the weather report on tv ?', timestamp: 1460223614421},
            {id:1, active:true, user: 'Ric Lowe', title: 'Guess what I found?', message: 'Hey Rob, checkout this story ?', timestamp: 1460221614421},
            {id:2, active:true ,user: 'Jon Snow', title: 'title 3', message: 'Hey Rob, have you seen the weather report on tv ?', timestamp: 1460227614421},
          ]}
          footerContent={<Text style={{textAlign:'center', fontSize: 20, padding: 10, backgroundColor: '#eee'}}>FOOTER CONTENT</Text>}
          onPress={(id) => console.log(id)}
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
          onPress={(id) => console.log(id)}
        />


        <ProfileHeader
          circle={true}
          blurRadius={10}
          title={'Elle Roberts'}
          summary={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip'}
          profileImg={'https://s3.amazonaws.com/uifaces/faces/twitter/evagiselle/128.jpg'}
          backgroundImg={'http://petapixel.com/assets/uploads/2014/05/ae5a74db2757e40b78ad13eb119a9224.jpg'}
        />


        <Search
          //placeHolder={'Search'}
          // backgroundColor={'red'}
          //innerBackground={'blue'}
          //radius={5}
          // borderColor={'green'}
          // border={false}
          onChangeText={(text) => this._search(text)}
        />




            {cardData.map((item, i) => (
              <View key={i} style={{backgroundColor: '#fff', paddingBottom: 30}}>
                <AvatarHeader src={item.avartar}
                  heading={item.user}
                  timestamp={item.timestamp}
                  circle={true}
                  backgroundColor={'#fff'}
                  height={40}
                  gutter={10}

                  />
                <Card
                  key={i}
                  //shadow={false}
                  onPress={() => console.log('card pressed')}
                  src={item.src}
                  title={item.title}
                  //gutter={10}
                  link={item.link}
                  radius={5}
                  />
              </View>
            ))}



      {userPosts.map((item, i) => (
          <View key={i} style={{}}>
            <AvatarHeader src={item.avartar}
              heading={item.username}
              timestamp={item.timestamp}
              circle={true}
              backgroundColor={'#fff'}
              height={40}
              gutter={10}
            />
          <ImageFullWidth
              src={item.src}
              height={300}
              onPress={() => console.log('pressed')}
            />

          <View style={{paddingTop: 10, paddingHorizontal: 10, backgroundColor: '#fff'}}>
            <LikeBtn
              active={true}
              color={primary}
              likes={232}
              onPress={() => console.log('liked')}
            />
            <ArticleText
              username={item.username}
              text={item.text}
              highLightColor={primary}
              onPress={() => console.log('link to profile')}
            />
            <Divider color={'#eee'}/>
          </View>

          </View>
        ))}

            <ListBasic onPress={(i) => alert(id)} items={[
                  {id: 0, title:'This is row 1 here hello'},
                  {id: 1, title:'And I am row 2, hello there'},
                  {id: 2, title:'And I am row 3, hello there'}
                ]}/>

        <ProfileHeader
          title={users[0].title}
          summary={users[0].summary}
          profileImg={users[0].profileImg}
          backgroundImg={users[0].backgroundImg}
        />




        <GalleryOffset
          imagesArray={galleryImages}
          display={'row'}/>


      {/*<ModalCustom/>*/}
      <Carousel
        images={galleryImages}
        heightGallery={400}
      />
      <Search
        placeHolder={'Search'}
        backgroundColor={lightGrey}
        innerBackground={'#FAFAFA'}
        radius={5}
      />

      <View style={{backgroundColor: '#fff'}}>
        {restaurantData.map((item, i) => (
          <ReviewCell
            key={i}
            title={item.title}
            description={item.description}
            src={item.src}
            onPress={() => console.log('pressed')}
          />
        ))}
      </View>

      <LoginForm/>

  {/*
        <Calendar
          scrollEnabled={true}              // False disables swiping. Default: True
          showControls={true}               // False hides prev/next buttons. Default: False
          titleFormat={'MMMM YYYY'}         // Format for displaying current month. Default: 'MMMM YYYY'
          dayHeadings={['S', 'M', 'T', 'W', 'T', 'F', 'S']}               // Default: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
          prevButtonText={'Prev'}           // Text for previous button. Default: 'Prev'
          nextButtonText={'Next'}           // Text for next button. Default: 'Next'
          onDateSelect={(date) => this.onDateSelect(date)} // Callback after date selection
          onTouchPrev={this.onTouchPrev}    // Callback for prev touch event
          onTouchNext={this.onTouchNext}    // Callback for next touch event
          onSwipePrev={this.onSwipePrev}    // Callback for back swipe event
          onSwipeNext={this.onSwipeNext}    // Callback for forward swipe event
          eventDates={['2015-07-01']}       // Optional array of moment() parseable dates that will show an event indicator
          startDate={'2016-04-01'}          // The first month that will display. Default: current month
          selectedDate={'2015-08-15'}       // Day to be selected
          customStyle={{day: {fontSize: 15, textAlign: 'center'}}} // Customize any pre-defined styles
         />

  */}
        <View style={styles.block}>

          <ThumbSwiper
            images={galleryImages}
            onPress={(i) => console.log(i)}
          />

          <AvatarHeader
            src={'https://facebook.github.io/react/img/logo_og.png'}
            heading={'HYPEBEAST'}
            timestamp={1460227647478}
            src={'https://facebook.github.io/react/img/logo_og.png'}
            circle={true}
            height={40}
          />

          <Text style={styles.mainTitle}>Title goes Here</Text>



          <Divider color={'#eee'}/>

          <View style={styles.shareContainer}>
            <Text>Like</Text>
            <Text>Comment</Text>
            <Text>Share</Text>
          </View>

        </View>

        <View style={{backgroundColor: '#eee'}}>

          {messages.map((item, i) => (
            <Message
              key={i}
              active={item.active}
              user={item.user}
              title={item.title}
              message={item.message}
              timestamp={item.timestamp}
            />
          ))}

        </View>

        <MapSection
          height={300}
          region={{
            latitude: 40.712784,
            longitude: -74.005941,
            latitudeDelta: 10,
            longitudeDelta: 10,}
          }
          annotations={[{
            latitude: 40.712784,
            longitude: -74.005941,
            title: 'New York',
            subtitle: 'This is cool!'}]
          }
          />

        <View style={styles.block}>
          <Time timestamp={1460227647478}/>
          <DateItem timestamp={1460227647478}/>
          <InputField />
          <LikeBtn active={true} color={primary} likes={232} onPress={() => console.log('liked')}/>
          <Button
            color={'#fff'}
            backgroundColor={primary}
            radius={5}>
            Submit
          </Button>
          <Close/>

          <AlertMessage message={'this is the alert message'} backgroundColor={'#1c7'} color={'#fff'}/>
        </View>

      </ScrollView>
    );
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  // header
  mainTitle: {
    fontSize:20,
    marginVertical: 10,
    fontWeight: '400'
  },

  titleContainer: {
    flexDirection: 'column'
  },
  date: {
    marginLeft: 10,
    marginTop: 5,
  },
  thumb: {
    width:50,
    height:50,
    //flex:1,
  },
  // card
  block: {
    padding: 12,
    backgroundColor: '#fff',
    shadowColor: '#D8D8D8',
    shadowRadius: 2,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    marginBottom: 40
  },

  // seperator: line
  seperator: {
    borderTopWidth: 1,
    borderColor: '#D8D8D8',
    height: 1,
    flex:1,
    marginVertical: 15,
  },
  // lowerSection
  shareContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  }
});

AppRegistry.registerComponent('Experiments', () => App);
