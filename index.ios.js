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

import {defaultColor, primary, secondary, info} from './components/variables'

import {
  Button, Heading, Divider, Avatar, Card, MediaBlock, Close, AlertMessage, LikeBtn,
  Gallery, InputField, Time, DateItem, Calendar, ThumbSwiper, ModalCustom, GalleryTiles, LoginForm, Message,
  ReviewCell
} from './components'




const App = () => (
    <ScrollView style={styles.container}>

    {/*<ModalCustom/>*/}
    <Gallery/>

    <View style={{backgroundColor: '#fff'}}>
      <ReviewCell
        title={'Full Circle'}
        description={'Grocery . $$ . 24 miles'}
        onPress={() => console.log('pressed')}
      />
      <ReviewCell
        title={'Full Circle'}
        description={'Grocery . $$ . 24 miles'}
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
        <MediaBlock src={'https://facebook.github.io/react/img/logo_og.png'}
          heading={'HYPEBEAST'}
          timestamp={1460227647478}
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

      <View style={styles.block}>
        <Time timestamp={1460227647478}/>
        <DateItem timestamp={1460227647478}/>
        <InputField />
        <LikeBtn liked={false} likes={232} toggle={() => alert('liked')}/>
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
