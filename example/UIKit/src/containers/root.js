import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';

import NavigationBar from 'react-native-navbar';

import NewsFeed from './news-feed'
import ArticlesTab from './articles-tab'
import MessagesTab from './messages-tab'
import Profile from './profile'

const base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';

export default class Root extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab: 'newsFeed',
    }
  }
  render() {
    const rightButtonConfig = {
      title: 'Next',
      handler: () => console.log('hello!'),
    };

    const titleConfig = {
      title: 'UIKit',
    };

    return (
      <View style={styles.container}>
        <NavigationBar
          //tintColor={'#222'}
          title={titleConfig}
          rightButton={rightButtonConfig} />

        <TabBarIOS
           tintColor="white"
           barTintColor="#222">
           <TabBarIOS.Item
             title="Blue Tab"
             icon={{uri: base64Icon, scale: 3}}
             selected={this.state.selectedTab === 'newsFeed'}
             onPress={() => {
               this.setState({
                 selectedTab: 'newsFeed',
               });
             }}>
            <NewsFeed/>
          </TabBarIOS.Item>

          <TabBarIOS.Item
            systemIcon="history"
            badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab'
              });
            }}>
            <MessagesTab/>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            systemIcon="more"
            // icon={require('./flux.png')}
            title="More"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}>
            <Profile/>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            systemIcon="more"
            // icon={require('./flux.png')}
            title="More"
            selected={this.state.selectedTab === 'articlesTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'articlesTab',
              });
            }}>
            <ArticlesTab/>
          </TabBarIOS.Item>
        </TabBarIOS>

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
