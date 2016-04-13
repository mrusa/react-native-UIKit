'use strict';

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

const styles = StyleSheet.create({
  map: {
    flex:1,
  }
});
MapSection.defaultProps = {
  height: 400
}
MapSection.propTypes = {
  region: React.PropTypes.object,
  annotations: React.PropTypes.array,
  height: React.PropTypes.number,
}

export default MapSection;
