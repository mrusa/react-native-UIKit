
import React, { Component } from 'react';
import  {
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  StatusBar
} from 'react-native';

import NavigationBar from 'react-native-navbar';

import NewsFeed from './news-feed';
import ArticlesTab from './articles-tab';
import MessagesTab from './messages-tab';
import Profile from './profile';
import AllComponents from './all-components';

const base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';

const messages = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAG7AAABuwE67OPiAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAVNQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA34LqhQAAAHB0Uk5TAAEDBQgJCgsOERIUFRYXHB4hJygrLjA5PUBDREhJS01PUltfYGJkZWZnbW5ydHZ3eHp9foCJjI2PkJGSk5SVlpeYmp+gpaepqqusrbGytLe4vMHFy8zO0NHT1NXX2Nnb3d7g4eXn6u/w8fP1+fr9/iBpASwAAAHESURBVFjD7ZZnU8JAEIYPpAgiCho7KpZYwRYVAcESQVGxoIJiw4og5f9/MpuENk5y3OE4jsP7aWfnnmfmcsuwCP1IGDbAEyY4xZRxc6hIlXCbzD8XKfNiEQWhInX2xfsXGwh8BxaKzAZHGF8GOFYQBKDwkb/cOnABoeCh4MgFi8DxTcFfFTD9imHqEDBxtdGNM1gBrz78PFaQUBcksAKXusCFFejY2J1iYqyuOYlNQV0CE5dKKybFmbACTn2UOawgqS5IYgWb6gI/VmCL5pXxfNRWxytYuxRjbU7ivxX4oNghFwRLq9EEFLnDbTH+MW3VGcvcruKmepwDblw4Za+d1u0KP/KBXfPscG6rpvWuKfFLeSwv3dx4XdOUF2BDGL9m3rZKZ/WeQqWZlXqdV1i84DWUb9s+5BaWzwi0b8RG35u8DyhuqgsO67eHmQfkCKqZnMQfGIleVlx6PQi1yJ+1sKwhG41ToGaR5VziM6Oks/UA2HDPk8Q/dpPyWvHiK1mJPzMTD7et+o28WvJfx0AF/5xEFJku86+9NDxaLfEXHVQ8isj8no6OR5fSn48b0eYE+LSDmkdO4fd/b0cNZHDNqUe/ni+rzlTP4cWlVQAAAABJRU5ErkJggg==';
const news = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAG7AAABuwE67OPiAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAACFQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3XBkVwAAAAp0Uk5TAAEaH2Wns7/m8PZU7q8AAABZSURBVEjHY2AYBWCwCg+gnwLcrhsMCsAOpZMC7IFEXwWDKxwQ7IFUQNCRdFAwGg4oTqO7Apom+xWEFCxj6FqFFyxhiMKvoJDBEq/8cgUG5gg88m2ODKMAAgDSxVncwQhqHgAAAABJRU5ErkJggg==';
const profile = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAH6AAAB+gEXikRvAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAQtQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA17MN4QAAAFh0Uk5TAAECBQkLDA0OEBUYGiAjJSYoKi0vMjg6PkFLTlVWWl9iaGxveXyEhpWWnqKlpqeora6vsLG1usLDxsfJzM3O1NXY2tzd3uLj5ujq7e/w8fLz9fb4+fz9/m7JgK8AAAGgSURBVBgZtcEJNwJhFAbglyikkm1QIUuW7EtokTUkWeP9/7+E4zjOjJk7c7/meB7g/8Sn5wsb5fJGYX46DnMjxQ5/dYojMJPcfKfD+2YSBhK3dLlNQG3ogh4uhqDUU6GnSg90ZiiYgU6JghJU0hSloZGnKA+NNYrWoHFM0TE0GhQ1oNGkqAmNR4oeodGmqA2NS4ouoXFC0Qk09inah0aZojIUMvSRQbBT+jhFsBv6uEGwK/q4QrAqfVQRbIE+FhAs2qaoHYVC5oGChwxUInV6qkegtEJPK9Cy6MmCVm+THpq9UFulh1XoxZ/o8hSHgWW6LMNEX4N/NPpgxHqjw5sFQ3k65GFsnTbrMDdHmzmYW6LNEsxt0WYLxgZbtGkNwkx/7owOZ7l+qMVmd1/o8rI7G4PG1MErBa8HUwgyWaKv0iT8TBwy0OEEJGN7VNkbg5fh7Q8qfWwPwyV7TwP3WTgNFGmoOACb1DWNXafwa/yOXbgbxw+rxa60LHwbfWaXnkfxJVJj12oRAAWGUADSHYbQSWORoSxih6Hs4Og8lCOE9QnnxX9VGgkyFQAAAABJRU5ErkJggg==';
const bars = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAbeAAAG3gG6t8riAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAIRQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvSgy4QAAACt0Uk5TAAMFBggLDhAVGystMzg6O0JESVFUWV1gcIGHio6ZnZ+w1tvg6u7x9PX4+wIY4ZgAAAB/SURBVBgZ7cEHAoJADATAjYIFO1ZExXa2/P9/viDJPWBnQERkknpvqgUhuanj3kdkqa41IsOPOn5jhKbnq+kyB1EmKUyCDE1SUzoiVKlrhkilrgVCTVLT64QMUpgERJmqtjO1E4QGb3V8R4is1LVBpPdQx7NEqNgeTLsSRESWP5FzP3mQfaekAAAAAElFTkSuQmCC';

const primary = '#3E364D'

export default class Root extends Component {
  constructor(props){
    super(props);
    this.state = {
      // selectedTab: 'newsFeed',
      selectedTab: 'allTab',
    }
    StatusBar.setBarStyle('light-content');
  }
  render() {
    const rightButtonConfig = {
      title: 'Next',
      handler: () => console.log('hello!'),
      tintColor: '#fff'
    };

    const titleConfig = {
      title: 'UIKit',
      tintColor: '#fff'
    };

    return (
      <View style={styles.container}>
        <NavigationBar
          tintColor={primary}
          title={titleConfig}
          rightButton={rightButtonConfig}
        />

        <TabBarIOS
          translucent={false}
           tintColor={primary}
           barTintColor="#fff">
           <TabBarIOS.Item
             title="News Feed"
             icon={{uri: news, scale: 3}}
             selected={this.state.selectedTab === 'newsFeed'}
             onPress={() => {
               this.setState({
                 selectedTab: 'newsFeed',
               });
             }}>
            <NewsFeed/>
          </TabBarIOS.Item>

          <TabBarIOS.Item
            icon={{uri: messages, scale: 3}}
            badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
            selected={this.state.selectedTab === 'redTab'}
            title="Messages"
            onPress={() => {
              this.setState({
                selectedTab: 'redTab'
              });
            }}>
            <MessagesTab/>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            icon={{uri: profile, scale: 3}}
            title="Profile"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}>
            <Profile/>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            icon={{uri: bars, scale: 3}}
            title="Articles"
            selected={this.state.selectedTab === 'articlesTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'articlesTab',
              });
            }}>
            <ArticlesTab/>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            icon={{uri: bars, scale: 3}}
            title="All Components"
            selected={this.state.selectedTab === 'allTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'allTab',
              });
            }}>
            <AllComponents/>
          </TabBarIOS.Item>
        </TabBarIOS>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
