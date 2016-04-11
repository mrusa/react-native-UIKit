
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  MapView,
} from 'react-native';

export default class MapSection extends Component {
  constructor(props){
    super(props);
    this.state = {
      region: {
        latitude: 40.712784,
        longitude: -74.005941,
        latitudeDelta: 10,
        longitudeDelta: 10,
      },
      annotations: [{
        latitude: 40.72052634,
        longitude: -73.97686958312988,
        title: 'New York',
        subtitle: 'This is cool!'
      }],
    }
  }
  render(){
    const region = {
      latitude: this.props.lat,
      longitude: this.props.lng,
      latitudeDelta: 10,
      longitudeDelta: 10,
    };
    const annotations = [{
      latitude: this.props.lat,
      longitude: this.props.lng,
      title: 'New York',
      subtitle: 'This is cool!'
    }];
    return(
      <MapView
        style={styles.map}
        region={region}
        annotations= {annotations}
      />
    );
  }
}
