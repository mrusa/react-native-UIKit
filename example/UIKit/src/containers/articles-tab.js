import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Search, ArticleList, Carousel } from 'react-native-uikit'

export default class ArticlesTab extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }
  _renderCarousel(){
    return(
      <Carousel
        images={[
          {id:0, src:'http://2.bp.blogspot.com/-QnUrv6hrusQ/UTuCbLI45xI/AAAAAAAAvEo/REbD2Sp3r84/s1600/benoit-paille1.jpg'},
          {id:1, src:'http://justsomething.co/wp-content/uploads/2013/09/black-and-white-photography-benoit-courti-1.jpg'},
          {id:2, src:'http://i.imgur.com/YaQDc.jpg?1'},
          {id:3, src:'http://farm4.staticflickr.com/3284/3032859171_9a71ea30c1_z.jpg'},
          {id:4, src:'http://livefastmag.com/wp-content/uploads/2011/10/1499c4834a64469dd570a47a08d503d2.jpg'},
          {id:5, src:'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg'},
        ]}
        height={300}
      />
    );
  }
  render() {
    return (
      <View style={styles.container}>

          <ArticleList
            headerContent={this._renderCarousel()}
            items={[
              {id:0, category:'Misc', title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', src:'http://2.bp.blogspot.com/-QnUrv6hrusQ/UTuCbLI45xI/AAAAAAAAvEo/REbD2Sp3r84/s1600/benoit-paille1.jpg'},
              {id:1, category:'Misc', title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', src:'http://justsomething.co/wp-content/uploads/2013/09/black-and-white-photography-benoit-courti-1.jpg'},
              {id:2, category:'Misc', title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', src:'http://i.imgur.com/YaQDc.jpg?1'},
              {id:3, category:'Misc', title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', src:'http://farm4.staticflickr.com/3284/3032859171_9a71ea30c1_z.jpg'},
              {id:4, category:'Misc', title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', src:'http://livefastmag.com/wp-content/uploads/2011/10/1499c4834a64469dd570a47a08d503d2.jpg'},
              {id:5, category:'Misc', title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', src:'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg'},
            ]}
            footerContent={<Text style={{textAlign:'center', fontSize: 20, padding: 10, backgroundColor: '#eee'}}>FOOTER CONTENT</Text>}
            onPress={(id) => console.log(id)}
            //cellHeight={100}
            //categoryWeight={'bold'}
            //categoryColor={'red'}
            //categorySize={16}
            //titleSize={16}
            //titleColor={'red'}
            //dateColor={'#666'}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: '#F5FCFF',
  },

});
