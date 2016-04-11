
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';



import Rating from './rating'

export default class RatingBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 3
    };
  }
  handleRatingSelected(rating) {
    this.setState({
      rating: rating
    });
  }
  render() {
    return (
      <View>
      <Rating value={this.state.rating} max="5" onRatingSelected={this.handleRatingSelected.bind(this)} />
      </View>
    );
  }
}
