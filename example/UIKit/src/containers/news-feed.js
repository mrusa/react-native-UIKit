import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

import _ from 'lodash';

import PostImage from '../components/post-image'
import PostCard from '../components/post-card'
import PostText from '../components/post-text'

export default class NewsFeed extends Component {
  constructor(props){
    super(props);
    let dataSource = new ListView.DataSource({
      getRowData: (dataBlob, sid, rid) => dataBlob[sid][rid],
      //getSectionHeaderData: (dataBlob, sid) => dataBlob[sid],
      rowHasChanged: (row1, row2) => row1 !== row2,
      //sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });
    this.state = {
      dataSource: dataSource.cloneWithRows(_.range(6)),
    }
  }
  _renderPostItem(data){
    //const {} = data;
    if(true){
      return (
        <PostImage/>
      );
    }
    else if(false){
      return (
        <PostCard heading={'Lynsey Smith'}/>
      );
    }
    else {
      return (
        <PostText/>
      )
    }
  }
  render() {
    return (
      <View style={styles.container}>
         <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => this._renderPostItem(rowData)}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
