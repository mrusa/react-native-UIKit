'use strict';
import React, {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window');

const ProfileHeader = ({title, summary, profileImg, backgroundImg }) => (
  <View style={styles.container}>
    <Image
      source={{uri: backgroundImg}}
      style={styles.backgroundImg}>
    </Image>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.summary}>{summary}</Text>
    <View style={styles.shadow}></View>
    <Image
      source={{uri: profileImg}}
      style={styles.profileImg}/>
  </View>
);

const styles = StyleSheet.create({
  container: {
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
ProfileHeader.defaultProps = {

}
ProfileHeader.propTypes = {
  title: React.PropTypes.string,
  summary: React.PropTypes.string,
  profileImg: React.PropTypes.string,
  backgroundImg: React.PropTypes.string,
}
export default ProfileHeader;
