import React, {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';

//import {Divider} from '../'

const {height, width} = Dimensions.get('window');

const ProfileHeader = () => (
  <View style={styles.container}>
    <Image
      source={{uri: 'http://petapixel.com/assets/uploads/2014/05/ae5a74db2757e40b78ad13eb119a9224.jpg'}}
      style={styles.backgroundImg}>
    </Image>
    <Text style={styles.title}>John Doe</Text>
    <Text style={styles.summary}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>
    <View style={styles.shadow}></View>
    <Image
      source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/esthercrawford/128.jpg'}}
      style={styles.profileImg}/>
  </View>
);

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingBottom: 20,
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
