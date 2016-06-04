'use strict';
import React, { Component } from 'react';
import  {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window');

const ProfileHeader = ({profileImg, backgroundImg, circle, blurRadius }) => (
  <View style={styles.container}>
    <Image
      blurRadius={blurRadius}
      source={{uri: backgroundImg}}
      style={styles.backgroundImg}>
    </Image>
    <View style={[styles.shadow, {borderRadius: circle ? 50 : 0}]}></View>
    <Image
      source={{uri: profileImg}}
      style={[styles.profileImg, {borderRadius: circle ? 50 : 0}]}/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    //borderBottomWidth: 1,
    //borderColor: '#eee',
    paddingBottom: 30,
  },
  backgroundImg: {
    resizeMode: 'cover',
    height: 150
  },
  profileImg: {
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 4,
    width: 100,
    height: 100,
    position: 'absolute',
    alignSelf: 'center',
    top: 75,
    left: width/2-50,
  },
  shadow: {
    position: 'absolute',
    alignSelf: 'center',
    top: 75,
    left: width/2-50,
    borderRadius: 4,
    width: 100,
    height: 100,
    shadowColor: '#D8D8D8',
    shadowRadius: 2,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 30,
    marginTop: 35,
    marginBottom: 10,
    fontWeight: '300'
  },
  summary: {
    paddingHorizontal: 10
  }
})
ProfileHeader.defaultProps = {
  circle: false,
  blurRadius: 0
}
ProfileHeader.propTypes = {
  title: React.PropTypes.string,
  summary: React.PropTypes.string,
  profileImg: React.PropTypes.string,
  backgroundImg: React.PropTypes.string,
  circle: React.PropTypes.bool,
  blurRadius: React.PropTypes.number,
}
export default ProfileHeader;
