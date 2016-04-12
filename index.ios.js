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

import {defaultColor, primary, lightGrey, secondary, info} from './components/variables'

import {
  Button, Heading, Divider, Avatar, Card, AvartarHeader, Close, AlertMessage, LikeBtn,
  Gallery, InputField, Time, DateItem, Calendar, ThumbSwiper, ModalCustom, GalleryTiles, LoginForm, Message,
  ReviewCell, MapSection, Search, GalleryOffset, FadeInUp
} from './components'

const ImageFull = ({src, height}) => (
  <Image source={{uri: src}} style={{resizeMode: 'cover', height: height}} />
);

const App = () => (
    <ScrollView style={styles.container}>
      <View style={{padding: 10, backgroundColor: '#fff'}}>
        <AvartarHeader
          src={'https://s3.amazonaws.com/uifaces/faces/twitter/mattchevy/128.jpg'}
          heading={'HYPEBEAST'}
          timestamp={1460227647478}
          circle={true}
        />
      </View>
      <ImageFull
        src={'http://i1.2photo.ru/u/w/539022.jpg'}
        height={300}
      />

      <View style={{padding: 10, backgroundColor: '#fff'}}>
        <AvartarHeader src={'https://s3.amazonaws.com/uifaces/faces/twitter/9lessons/128.jpg'}
          heading={'HYPEBEAST'}
          timestamp={1460227647478}
          circle={true}
        />
      </View>
      <ImageFull
        src={'http://i1.2photo.ru/u/w/539022.jpg'}
        height={300}
      />

      <GalleryOffset
        imagesArray={[
          'https://media-cdn.tripadvisor.com/media/photo-s/03/c4/95/72/carne-y-vino-restaurant.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-s/03/c4/95/72/carne-y-vino-restaurant.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-s/03/c4/95/72/carne-y-vino-restaurant.jpg',
          'https://media-cdn.tripadvisor.com/media/photo-s/03/c4/95/72/carne-y-vino-restaurant.jpg',
        ]}
        display={'row'}/>


    {/*<ModalCustom/>*/}
    <Gallery
      images={[
        'http://i1.2photo.ru/u/w/539022.jpg',
        'http://imgs.abduzeedo.com/files/paul0v2/under-night/01.jpg',
        'https://s-media-cache-ak0.pinimg.com/736x/5f/70/41/5f704159cdf6512cf21000ec4827fc03.jpg',
        'https://7f9c61237bd6e732e57e-5fa18836a2ae6b5e7c49abcc89b20237.ssl.cf1.rackcdn.com/4955281_shay-maria-and-ashley-schultz-are-sizzling_c5cb80fa_m.jpg?bg=CABBC0',
        'http://cdn.rsvlts.com/wp-content/uploads/2013/01/shay-maria-dsteezy-29.jpeg',
        'http://cdn.rsvlts.com/wp-content/uploads/2013/01/shay-maria-dsteezy-28.jpeg',
        'http://swagsyndicate.com/wp-content/uploads/2010/07/loud-obnoxious-announce-agenda-campaign-1.jpg',
        'https://heavyeditorial.files.wordpress.com/2014/03/319.jpg?quality=65&strip=all&w=640',
        'http://payload389.cargocollective.com/1/5/174502/10090906/cbnc4_670.jpg',
        'https://s-media-cache-ak0.pinimg.com/736x/c7/b5/a3/c7b5a33aa1b3225f8727545eb39bd674.jpg',
        'http://imfmag.com/wp-content/uploads/2012/08/7792592148_4191fe2b87_b.jpg',
        'http://40.media.tumblr.com/d3ce5dd86ba8d83273e041b0300055d3/tumblr_inline_nr4okgFmlL1rn5se3_1280.jpg'
       ]}
      heightGallery={500}
    />
    <Search
      placeHolder={'Search'}
      backgroundColor={lightGrey}
      innerBackground={'#FAFAFA'}
      radius={5}
    />

    <View style={{backgroundColor: '#fff'}}>
      <ReviewCell
        title={'Full Circle'}
        description={'Grocery . $$ . 24 miles'}
        src={'https://media-cdn.tripadvisor.com/media/photo-s/03/c4/95/72/carne-y-vino-restaurant.jpg'}
        onPress={() => console.log('pressed')}
      />
      <ReviewCell
        title={'Full Circle'}
        description={'Grocery . $$ . 24 miles'}
        src={'http://modernfoodarts.com/wp-content/uploads/2015/02/andels_Hotel_Berlin_-_Restaurant_delight_-_Copyright_Eisenbacher_062.jpg'}
        onPress={() => console.log('pressed')}
      />
    </View>

    <LoginForm/>
    <GalleryTiles/>
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

        <ThumbSwiper/>

        <AvartarHeader src={'https://facebook.github.io/react/img/logo_og.png'}
          heading={'HYPEBEAST'}
          timestamp={1460227647478}
          src={'https://facebook.github.io/react/img/logo_og.png'}
          circle={true}
        />

        <Text style={styles.mainTitle}>Title goes Here</Text>

        <Card
          src='http://questgarden.com/84/77/7/090712062416/images/Purple%20Mountain%20Magesties.jpg'
          title="This is the article description title here saying stuff"/>

        <Divider/>

        <View style={styles.shareContainer}>
          <Text>Like</Text>
          <Text>Comment</Text>
          <Text>Share</Text>
        </View>

      </View>

<View style={{backgroundColor: '#eee'}}>
      <Message
        active={true}
        user={'Jon Snow'}
        title={'Winter is Coming'}
        message={'Hey Rob, have you seen the weather report on tv ?'}
        timestamp={1460227617421}
      />
      <Message
        active={true}
        user={'Jon Snow'}
        title={'Winter is Coming'}
        message={'Hey Rob, have you seen the weather report on tv ?'}
        timestamp={1460227617421}
      />
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
        <LikeBtn active={true} color={primary} likes={232} onPress={() => alert('liked')}/>
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
