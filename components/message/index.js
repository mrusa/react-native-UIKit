import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import {info, grey, lightGrey} from '../variables'
import {Time} from '../'

function isActive(active){
  if(active){
    return {
      backgroundColor: info
    }
  }
  else {
    return {
      backgroundColor: lightGrey
    }
  }
}

const Message = ({user, title, timestamp, message, active}) => (
  <TouchableOpacity style={styles.row}>
    <View style={[isActive(active), styles.dot]}></View>
    <View style={styles.message}>
      <View style={styles.header}>
        <Text style={styles.user}>{user}</Text>
        <Time color={grey} timestamp={timestamp}/>
        <Image source={require('./assets/more.png')} style={[styles.more,{height: 12, width: 7}]}/>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.bodyText}>{message}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 0,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 2,
    marginBottom: 2,
    borderColor: '#C8C7CC',
    borderBottomWidth: 1,
  },
  message: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 8,
  },
  header: {
    flex: 1,
    //backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  more: {
    marginLeft: 10,
    marginTop: 2,
  },
  user: {
    fontWeight: 'bold',
    flex: 1,
    marginBottom: 2,
  },
  title: {
    fontWeight: '500',
    marginBottom: 2,
  },
  bodyText: {
    color: grey,

  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginTop: 5,
    alignSelf: 'flex-start'
  }
})

export default Message;
