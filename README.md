# react-native-UIKit


A collection of stateless (or minimally stateful) stylized and configurable UI components for rapid prototyping.

work in progress..

#### Getting Started
`npm i react-native-uikit -S`

import what you need

`import { Button, Card } from 'react-native-uikit';`

#### Components

**AlertMessage,  ArticleText, Avatar, AvatarHeader, Button, Card, Carousel, Close, DateItem, Divider, FieldError, Grid, GalleryOffset, Heading, ImageFullWidth, InputField, LikeBtn, ListBasic, LoginFb, LoginForm, MapSection, Message, ProfileHeader, RatingBox, ReviewCell, Search, ThumbSwiper, Time**

### Example
___
##### Components can be combined to create larger entities
![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/full-post.jpg)

`import {AvatarHeader, ImageFullWidth, LikeBtn, ArticleText, Divider } from 'react-native-uikit';`


```javascript
<View style={{flex:1, paddingTop: 20}}>

  <View>
    <AvatarHeader
      src={'https://s3.amazonaws.com/uifaces/faces/twitter/9lessons/128.jpg'}
      heading={'John Doe'}
      timestamp={1460227647478}
      circle={true}
      backgroundColor={'#fff'}
      height={40}
      gutter={10}
    />
    <ImageFullWidth
      src={'http://i1.2photo.ru/u/w/539022.jpg'}
      height={300}
      onPress={() => console.log('pressed')}
    />
    <View style={{paddingTop: 10, paddingHorizontal: 10, backgroundColor: '#fff'}}>
      <LikeBtn
        active={true}
        //color={primary}
        likes={232}
        onPress={() => console.log('liked')}
      />
      <ArticleText
        username={'John Doe'}
        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}
        //highLightColor={primary}
        onPress={() => console.log('link to profile')}
      />
      <Divider color={'#eee'}/>
    </View>
  </View>

</View>
```



## Documentation
___


### AlertMessage
![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/alertmessage.jpg)
```javascript
<AlertMessage
  message={'This is the alert message here'}
  onPress={() => console.log('pressed')}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| backgroundColor   | String | box background color |
| color   | String | text color |
| message   | String | message text |
| onPress   | Func | called on press of close button  |

### ArticleText
![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/articletext.jpg)
```javascript
<ArticleText
  username={'username'}
  text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
  onPress={() => console.log('pressed')}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| username   | String | username  |
| text   | String | body of text for article |
| highLightColor   | String | text color for username |
| onPress   | Func | called on press   |

### Avatar
![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/avatar.jpg)
```javascript
<Avatar
  src={'https://s3.amazonaws.com/uifaces/faces/twitter/evagiselle/128.jpg'}
  size={40}
  circle={true}
  onPress={() => console.log('pressed')}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| src   | String | src for avartar img  |
| size   | Number | height & width of img |
| circle   | Bool | is circular |
| onPress   | Func | called on press   |

### AvatarHeader
![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/avartar-header.jpg)
```javascript
<AvatarHeader src={'https://s3.amazonaws.com/uifaces/faces/twitter/evagiselle/128.jpg'}
  heading={'Lynsey Smith'}
  timestamp={1460227647478}
  circle={true}
  backgroundColor={'#fff'}
  height={40}
  gutter={10}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| heading   | String | title / username  |
| timestamp  | Number | Unix Timestamp (milliseconds)  |
| backgroundColor   | String | section background color |
| gutter  | Number | spacing around  |
| onPress   | Func | called on press   |

### Button
![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/button.jpg)
```javascript
<Button
  color={'#fff'}
  backgroundColor={'#0094EA'}
  radius={5}>
  Submit
</Button>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| backgroundColor   | String | box background color |
| color   | String | text color |
| radius   | Number | border radius size |
| onPress   | Func | called on press |

### Card
![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/card.jpg)
```javascript
<Card
  onPress={() => console.log('card pressed')}
  src={'https://s-media-cache-ak0.pinimg.com/736x/5f/70/41/5f704159cdf6512cf21000ec4827fc03.jpg'}
  title={'Card title - Some quick example text to build on the card title and make up the bulk of the card'}
  gutter={10}
  link={'www.example.com'}
  radius={5}
  marginBottom={30}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| backgroundColor   | String | box background color |
| color   | String | text color |
| src  | String | img src |
| gutter  | Number | side padding |
| radius   | Number | border radius size |
| onPress   | Func | called on press  |


### Carousel
![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/carousel.jpg)
```javascript
<Carousel
  images={[
    'http://2.bp.blogspot.com/-QnUrv6hrusQ/UTuCbLI45xI/AAAAAAAAvEo/REbD2Sp3r84/s1600/benoit-paille1.jpg',
    'http://justsomething.co/wp-content/uploads/2013/09/black-and-white-photography-benoit-courti-1.jpg',
    'http://i.imgur.com/YaQDc.jpg?1',
    'http://farm4.staticflickr.com/3284/3032859171_9a71ea30c1_z.jpg',
    'http://livefastmag.com/wp-content/uploads/2011/10/1499c4834a64469dd570a47a08d503d2.jpg',
    'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg',
  ]}
  height={300}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| images   | Array | array of images |
| height   | Number | height of carousel |

### Close
![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/close.jpg)
```javascript
<Close
  size={50}
  color={'#222'}
  onPress={() => console.log('closed')}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| size   | Number | width / height |
| color   | String | color of button |
| onPress   | Func | called on press  |

### DateItem
![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/date-item.jpg)
```javascript
<DateItem
  timestamp={1460227647478}
  color={'#222'}
  marginLeft={10}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| timestamp  | Number | Unix Timestamp (milliseconds)  |
| color   | String | color of text |
| marginLeft  | Number | margin left |

### Divider
![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/divider.jpg)
```javascript
<Divider
  color={'#eee'}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| color   | String | color of divider |

### FieldError
```javascript
<FieldError
  errorMsg={'error something has gone wrong!'}
  error={true}
  color={'red'}
  marginBottom={40}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| errorMsg   | String | error message |
| error   | Bool | display message or not |
| color   | String | color of text |
| marginBottom   | Number | marginBottom |

### Grid
![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/gallery-tiles.jpg)
```javascript
<Grid
  images={[
    'http://2.bp.blogspot.com/-QnUrv6hrusQ/UTuCbLI45xI/AAAAAAAAvEo/REbD2Sp3r84/s1600/benoit-paille1.jpg',
    'http://justsomething.co/wp-content/uploads/2013/09/black-and-white-photography-benoit-courti-1.jpg',
    'http://i.imgur.com/YaQDc.jpg?1',
    'http://farm4.staticflickr.com/3284/3032859171_9a71ea30c1_z.jpg',
    'http://livefastmag.com/wp-content/uploads/2011/10/1499c4834a64469dd570a47a08d503d2.jpg',
    'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg',
    'http://2.bp.blogspot.com/-QnUrv6hrusQ/UTuCbLI45xI/AAAAAAAAvEo/REbD2Sp3r84/s1600/benoit-paille1.jpg',
    'http://justsomething.co/wp-content/uploads/2013/09/black-and-white-photography-benoit-courti-1.jpg',
    'http://i.imgur.com/YaQDc.jpg?1',
  ]}
  />
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| images   | Array | images array |

### GalleryOffset
![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/gallery-offset-row.jpg)
```javascript
<GalleryOffset
  imagesArray={[
    'http://2.bp.blogspot.com/-QnUrv6hrusQ/UTuCbLI45xI/AAAAAAAAvEo/REbD2Sp3r84/s1600/benoit-paille1.jpg',
    'http://justsomething.co/wp-content/uploads/2013/09/black-and-white-photography-benoit-courti-1.jpg',
    'http://i.imgur.com/YaQDc.jpg?1',
    'http://farm4.staticflickr.com/3284/3032859171_9a71ea30c1_z.jpg',
    'http://livefastmag.com/wp-content/uploads/2011/10/1499c4834a64469dd570a47a08d503d2.jpg',
    'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg',
  ]}
  display={'column'}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| images   | Array | images array |


### Heading
```javascript
<Heading
  size={50}
  weight={'bold'}
>HELLO THERE</Heading>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| size  | Number | text size |
| weight  | String | font Weight |

### ImageFullWidth
```javascript
<ImageFullWidth
  src={'https://octodex.github.com/images/minion.png'}
  height={100}
  onPress={() => console.log('pressed')}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| src  | String | img src |
| height  | Number | img height |

### InputField
```javascript
<InputField
  placeHolder={'i am the placeholder txt'}
  gutter={10}
  color={'#222'}
  backgroundColor={'#eee'}
  radius={5}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| placeHolder  | String | input placeholder |
| gutter  | Number | padding |
| color  | String | text color |
| backgroundColor | String | background color |
| radius  | Number | border radius |

### LikeBtn
```javascript
<LikeBtn
  active={true}
  likes={322}
  //color={'#fa0008'}
  onPress={() => console.log('liked')}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| active  | Bool | is active |
| likes  | Number | number of likes |
| color  | String | text color |
| onPress | Func | called onPress |



### ListBasic
![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/list-basic.jpg)
```javascript
<ListBasic onPress={(i) => console.log(id)} items={[
  {id: 0, title:'Label'},
  {id: 1, title:'Label'},
  {id: 2, title:'Label'},
  {id: 3, title:'Label'}
]}/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| items  | Array | list items |
| onPress | Func | called onPress |


### LoginFb
![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/fb-login.jpg)
```javascript
<LoginFb
  onPress={() => console.log('login with fb')}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| onPress | Func | called onPress |

### LoginForm
![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/login-form.jpg)
```javascript
<LoginForm
  loginFb={() => console.log('login with facebook')}
  onSubmit={() => console.log('email, password')}
  error={false}
  errorMsg={'username or password incorrect'}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| loginFb | Func | called onPress fb login |
| onSubmit | Func | called onPress login |
| error | Bool | display error message |
| errorMsg | String | error message |

### MapSection
```javascript
<MapSection
  height={300}
  fullHeight={false}
  region={{
    latitude: 40.712784,
    longitude: -74.005941,
    latitudeDelta: 10,
    longitudeDelta: 10,}
  }
  annotations={[{
    latitude: 40.712784,
    longitude: -74.005941,
    title: 'New York',
    subtitle: 'This is cool!'}]
  }
  />
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| height | Number | map height |
| fullHeight | Bool | display full height |
| region | Obj | region on map |
| annotations | Array | markers on map |


### Message
![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/messages.jpg)
```javascript
<Message
  active={true}
  user={'Jon Snow'}
  title={'Winter is Coming'}
  message={'Hey Rob, have you seen the weather report on tv ?'}
  timestamp={1460227614421}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| active | Bool | is message read |
| user | String | sender name |
| title | String | message title |
| annotations | Array | markers on map |
| timestamp  | Number | Unix Timestamp (milliseconds)  |

### ProfileHeader
![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/profile-header.jpg)
```javascript
<ProfileHeader
  title={'Elle Roberts'}
  summary={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip'}
  profileImg={'https://s3.amazonaws.com/uifaces/faces/twitter/evagiselle/128.jpg'}
  backgroundImg={'http://petapixel.com/assets/uploads/2014/05/ae5a74db2757e40b78ad13eb119a9224.jpg'}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| title | String | username |
| summary | String | profile description |
| profileImg | String | profile thumb src |
| backgroundImg  | String | background img src  |

### RatingBox
```javascript
<RatingBox />
```

### ReviewCell
![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/review.jpg)
```javascript
<ReviewCell
  title={'Gaucho'}
  description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'}
  src={'https://lh5.googleusercontent.com/proxy/lvLgnhcoHke5BEhTG-bVydssje9jV_GytcBidVZh4ADXEuiybVwXN4mlIbgxxOKn2pF1uharMho8lAqGSXcMGKJMigr42UH_qZ1THp4bZplV7uyThhmwEtq38oAhKW7V5Y_6j46jAEkxkrewm9wrd_T4K2JBUw8=w271-h180'}
  onPress={() => console.log('pressed')}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| title | String | item title |
| description | String | item description |
| src | String | item thumb src |
| onPress | Func | called on press |

### Search
![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/search.jpg)
```javascript
<Search
  placeHolder={'Search for cool stuff..'}
  //backgroundColor={'red'}
  //innerBackground={'#eee'}
  //borderColor={'#222'}
  //border={false}
  radius={5}
  //iconColor={'red'}
  onSubmitEditing={() => console.log('submited')}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| placeHolder | String | placeholder text |
| placeHolder | String | placeholder text |
| placeHolder | String | placeholder text |
| placeHolder | String | placeholder text |

### ThumbSwiper
![](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/thumb-swiper.jpg)
```javascript
<ThumbSwiper
  images={[
    'http://2.bp.blogspot.com/-QnUrv6hrusQ/UTuCbLI45xI/AAAAAAAAvEo/REbD2Sp3r84/s1600/benoit-paille1.jpg',
    'http://justsomething.co/wp-content/uploads/2013/09/black-and-white-photography-benoit-courti-1.jpg',
    'http://i.imgur.com/YaQDc.jpg?1',
    'http://farm4.staticflickr.com/3284/3032859171_9a71ea30c1_z.jpg',
    'http://livefastmag.com/wp-content/uploads/2011/10/1499c4834a64469dd570a47a08d503d2.jpg',
    'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg',
  ]}
  onPress={() => console.log('pressed')}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| images | Array| images |

### Time
```javascript
<Time
  timestamp={1460227647478}
  color={'#222'}
/>
```
| Prop | Type | Description |
| :------| :-----------| :-----------|
| color | String | text color |
| timestamp  | Number | Unix Timestamp (milliseconds)  |
