
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  MapView,
} from 'react-native';

const MapSection = ({region, annotations, height}) => (
  <MapView
    style={[styles.map, {height: height}]}
    region={region}
    annotations= {annotations}
  />
);

export default MapSection;

const styles = StyleSheet.create({
  map: {
    flex:1,
  }
});
