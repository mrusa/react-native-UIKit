import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import {info, grey} from '../variables'
import {Time} from '../'

const base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAANvAAADbwHCDHiHAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAADZQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARy+jrgAAABF0Uk5TAAECEj9DSElKS0xNd5qe+PlSX0SAAAAAT0lEQVQ4y63Txw0AIBADQXKO/TdLBWAk3313JB7ISv2e9foN+h7mCdxEIgiIKCCSgMiLF0VA1B/RKICeKGTPZEefhXokeyA7HA6cHhzv7Q6z0wYnJ7jqZAAAAABJRU5ErkJggg==';

const Message = ({message, read}) => (
  <TouchableOpacity style={styles.row}>
    <View style={styles.dot}></View>
    <View style={styles.message}>
      <View style={styles.header}>
        <Text style={styles.user}>Jon Snow</Text>
        <Time color={grey} timestamp={1460227617421}/>
        <Image source={require('./assets/more.png')} style={[styles.more,{height: 12, width: 7}]}/>
      </View>
      <Text style={styles.title}>Winter is Coming</Text>
      <Text style={styles.bodyText}>Hey Rob, have you seen the weather report on tv ?</Text>
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
    backgroundColor: info,
    width: 10,
    height: 10,
    borderRadius: 5,
    marginTop: 5,
    alignSelf: 'flex-start'
  }
})

export default Message;
