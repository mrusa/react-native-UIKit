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

import {galleryImages, restaurantData, userPosts, messages, cardData} from './data.js'

import {defaultColor, primary, lightGrey, secondary, info} from './components/variables'

import {
  Button, Heading, Divider, Avatar, Card, AvartarHeader, Close, AlertMessage, LikeBtn,
  Gallery, InputField, Time, DateItem, Calendar, ThumbSwiper, ModalCustom, GalleryTiles, LoginForm, Message,
  ReviewCell, MapSection, Search, GalleryOffset, FadeInUp, ImageFull
} from './components'



const App = () => (
    <ScrollView style={styles.container}>


    {userPosts.map((item, i) => (
      <View key={i} style={{}}>
        <AvartarHeader src={item.avartar}
          heading={item.user}
          timestamp={item.timestamp}
          circle={true}
          backgroundColor={'#fff'}
          height={40}
          gutter={10}
        />
        <ImageFull
          src={item.src}
          height={300}
          onPress={() => console.log('pressed')}
        />

      <View style={{paddingTop: 10, paddingHorizontal: 10, backgroundColor: '#fff'}}>
        <LikeBtn active={true} color={primary} likes={232} onPress={() => console.log('liked')}/>
        <Divider color={'#eee'}/>
      </View>

      </View>
    ))}

    {cardData.map((item, i) => (
      <View key={i} style={{backgroundColor: '#fff', paddingBottom: 30}}>
        <AvartarHeader src={item.avartar}
          heading={item.user}
          timestamp={item.timestamp}
          circle={true}
          backgroundColor={'#fff'}
          height={40}
          gutter={10}
          />
        <Card
          key={i}
          onPress={() => console.log('card pressed')}
          src={item.src}
          title={item.title}
          gutter={10}
          />
      </View>
    ))}


      <GalleryOffset
        imagesArray={galleryImages}
        display={'row'}/>


    {/*<ModalCustom/>*/}
    <Gallery
      images={galleryImages}
      heightGallery={500}
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
    <GalleryTiles
      images={galleryImages}
      />
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

        <AvartarHeader
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
        <Button color={'#fff'} backgroundColor={primary} radius={5}>Submit</Button>
        <Close/>
        <AlertMessage/>
      </View>

    </ScrollView>
);

var styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    backgroundColor: '#D3D5DA',
    marginTop: 20,
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
