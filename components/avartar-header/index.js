import React, {
  Component,
  StyleSheet,
  View,
} from 'react-native';


import {Heading, Avatar, DateItem } from '../'

const AvartarHeader = ({src, timestamp, heading, circle}) => (
  <View style={styles.header}>
    <Avatar
      circle={circle}
      size={40}
      src={src}
    />
    <View style={styles.titleContainer}>
      <Heading size={15} weight={'600'}>HYPEBEAST</Heading>
      <DateItem timestamp={timestamp}/>
    </View>
  </View>
);

var styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    //justifyContent: 'space-between',
    flex:1,
    //backgroundColor: 'blue',
  },
  titleContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 40
  //  paddingBottom: 10,
  }
});
export default AvartarHeader;
