import React, {
  Component,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ListView,
  Dimensions
} from 'react-native';

var {height, width} = Dimensions.get('window');

const Thumb = ({data}) => (
  <Image
    style={{width: width/3.05, height: width/3.05, marginBottom: width/3*0.025  }}
    source={{uri: data.src}}
  />
);

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
var data = [
    {'name': 'row 1', 'age': 3, 'src':'http://dummyimage.com/200x200/eee/fff'},
    {'name': 'row 2', 'age': 33, 'src':'http://dummyimage.com/200x200/eee/fff'},
    {'name': 'row 3', 'age': 22, 'src':'http://dummyimage.com/200x200/eee/fff'},
    {'name': 'row 3', 'age': 22, 'src':'http://dummyimage.com/200x200/eee/fff'},
    {'name': 'row 3', 'age': 22, 'src':'http://dummyimage.com/200x200/eee/fff'},
    {'name': 'row 1', 'age': 3, 'src':'http://dummyimage.com/200x200/eee/fff'},
    {'name': 'row 2', 'age': 33, 'src':'http://dummyimage.com/200x200/eee/fff'},
    {'name': 'row 3', 'age': 22, 'src':'http://dummyimage.com/200x200/eee/fff'},
    {'name': 'row 3', 'age': 22, 'src':'http://dummyimage.com/200x200/eee/fff'},
];

const GalleryTiles = () => (
  <ListView
    contentContainerStyle={{justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap'}}
    dataSource={ds.cloneWithRows(data)}
    renderRow={(rowData) => <Thumb data={rowData}/>}
    pageSize={1}
  />
);
/*
class GalleryTiles extends Component {
  constructor(props){
    super(props)
    this.state = {
      dataSource: ds.cloneWithRows(data),
    }
  }
  render() {
  //  const { data } = this.props.route;
    return (
        <ListView
          contentContainerStyle={{justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap'}}
          dataSource={ds.cloneWithRows(data)}
          renderRow={(rowData) => <Thumb data={rowData}/>}
          pageSize={1}
        />
    );
  }
}
*/
export default GalleryTiles;
