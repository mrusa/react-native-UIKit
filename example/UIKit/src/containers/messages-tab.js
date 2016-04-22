import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

import _ from 'lodash';

import { MessageList, Search } from 'react-native-uikit'

export default class MessagesTab extends Component {
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
  render() {
    return (
      <View style={styles.container}>
        <Search/>
          <MessageList
            //backgroundColor={'red'}
            //headerContent={<Text style={{textAlign:'center', fontSize: 20, padding: 10, backgroundColor: '#eee', marginBottom: 3}}>HEADER CONTENT</Text>}
            items={[
              {id:0, active:false, user: 'Jon Snow', title: 'Winter is Coming', message: 'Hey Rob, have you seen the weather report on tv ?', timestamp: 1460223614421},
              {id:1, active:true, user: 'Ric Lowe', title: 'Guess what I found?', message: 'Hey Rob, checkout this story ?', timestamp: 1460221614421},
              {id:2, active:true ,user: 'Jon Snow', title: 'title 3', message: 'Hey Rob, have you seen the weather report on tv ?', timestamp: 1460227614421},
              {id:0, active:false, user: 'Jon Snow', title: 'Winter is Coming', message: 'Hey Rob, have you seen the weather report on tv ?', timestamp: 1460223614421},
              {id:1, active:true, user: 'Ric Lowe', title: 'Guess what I found?', message: 'Hey Rob, checkout this story ?', timestamp: 1460221614421},
              {id:2, active:true ,user: 'Jon Snow', title: 'title 3', message: 'Hey Rob, have you seen the weather report on tv ?', timestamp: 1460227614421},
              {id:0, active:false, user: 'Jon Snow', title: 'Winter is Coming', message: 'Hey Rob, have you seen the weather report on tv ?', timestamp: 1460223614421},
              {id:1, active:true, user: 'Ric Lowe', title: 'Guess what I found?', message: 'Hey Rob, checkout this story ?', timestamp: 1460221614421},
              {id:2, active:true ,user: 'Jon Snow', title: 'title 3', message: 'Hey Rob, have you seen the weather report on tv ?', timestamp: 1460227614421},
              {id:0, active:false, user: 'Jon Snow', title: 'Winter is Coming', message: 'Hey Rob, have you seen the weather report on tv ?', timestamp: 1460223614421},
              {id:1, active:true, user: 'Ric Lowe', title: 'Guess what I found?', message: 'Hey Rob, checkout this story ?', timestamp: 1460221614421},
              {id:2, active:true ,user: 'Jon Snow', title: 'title 3', message: 'Hey Rob, have you seen the weather report on tv ?', timestamp: 1460227614421},
              {id:0, active:false, user: 'Jon Snow', title: 'Winter is Coming', message: 'Hey Rob, have you seen the weather report on tv ?', timestamp: 1460223614421},
              {id:1, active:true, user: 'Ric Lowe', title: 'Guess what I found?', message: 'Hey Rob, checkout this story ?', timestamp: 1460221614421},
              {id:2, active:true ,user: 'Jon Snow', title: 'title 3', message: 'Hey Rob, have you seen the weather report on tv ?', timestamp: 1460227614421},
              {id:0, active:false, user: 'Jon Snow', title: 'Winter is Coming', message: 'Hey Rob, have you seen the weather report on tv ?', timestamp: 1460223614421},
              {id:1, active:true, user: 'Ric Lowe', title: 'Guess what I found?', message: 'Hey Rob, checkout this story ?', timestamp: 1460221614421},
              {id:2, active:true ,user: 'Jon Snow', title: 'title 3', message: 'Hey Rob, have you seen the weather report on tv ?', timestamp: 1460227614421},
            ]}
            footerContent={<Text style={{textAlign:'center', fontSize: 20, padding: 10, backgroundColor: '#eee'}}>FOOTER CONTENT</Text>}
            onPress={(id) => console.log(id)}
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
