# react-native-UIKit


A collection of stateless (or minimally stateful) stylized and configurable UI components for rapid prototyping.

work in progress.. (alpha)

#### Getting Started
`npm i react-native-uikit -S`

import what you need

`import { Button, Card } from 'react-native-uikit';`

#### Documentation

### AlertMessage
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
![Minion](https://raw.githubusercontent.com/andyfenelon/react-native-UIKit/master/docs/img/button.png)
```javascript
<Button
  color={'#fff'}
  backgroundColor={'#0094EA'}
  radius={5}>
  Submit
</Button>
```

### Card
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

### Carousel
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

### Close
```javascript
<Close
  size={50}
  color={'#222'}
  onPress={() => console.log('closed')}
/>
```

### DateItem
```javascript
<DateItem
  timestamp={1460227647478}
  color={'#222'}
  marginLeft={10}
/>
```

### Divider
```javascript
<Divider
  color={'#eee'}
/>
```

### FieldError
```javascript
<FieldError
  errorMsg={'error something has gone wrong!'}
  error={true}
  color={'red'}
  marginBottom={40}
/>
```

### GalleryOffset
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

### GalleryTiles
```javascript
<GalleryTiles
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

### Heading
```javascript
<Heading
  size={50}
  weight={'bold'}
>HELLO THERE</Heading>
```

### ImageFullWidth
```javascript
<ImageFullWidth
  src={'https://octodex.github.com/images/minion.png'}
  height={100}
  onPress={() => console.log('pressed')}
/>
```

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

### LikeBtn
```javascript
<LikeBtn
  active={true}
  likes={322}
  //color={'#fa0008'}
  onPress={() => console.log('liked')}
/>
```

### ListBasic
```javascript
<ListBasic onPress={(i) => alert(id)} items={[
  {id: 0, title:'Label'},
  {id: 1, title:'Label'},
  {id: 2, title:'Label'},
  {id: 3, title:'Label'}
]}/>
```


### LoginFb
```javascript
<LoginFb
  onPress={() => console.log('login with fb')}
/>
```

### LoginForm
```javascript
<LoginForm
  loginFb={() => alert('login with facebook')}
  onSubmit={() => alert('email, password')}
  error={false}
  errorMsg={'username or password incorrect'}
/>
```

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

### Message
```javascript
<Message
  active={true}
  user={'Jon Snow'}
  title={'Winter is Coming'}
  message={'Hey Rob, have you seen the weather report on tv ?'}
  timestamp={1460227614421}
/>
```

### ProfileHeader
```javascript
<ProfileHeader
  title={'Elle Roberts'}
  summary={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip'}
  profileImg={'https://s3.amazonaws.com/uifaces/faces/twitter/evagiselle/128.jpg'}
  backgroundImg={'http://petapixel.com/assets/uploads/2014/05/ae5a74db2757e40b78ad13eb119a9224.jpg'}
/>
```

### RatingBox
```javascript
<RatingBox />
```

### ReviewCell
```javascript
<ReviewCell
  title={'Gaucho'}
  description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'}
  src={'https://lh5.googleusercontent.com/proxy/lvLgnhcoHke5BEhTG-bVydssje9jV_GytcBidVZh4ADXEuiybVwXN4mlIbgxxOKn2pF1uharMho8lAqGSXcMGKJMigr42UH_qZ1THp4bZplV7uyThhmwEtq38oAhKW7V5Y_6j46jAEkxkrewm9wrd_T4K2JBUw8=w271-h180'}
  onPress={() => console.log('pressed')}
/>
```


### Search
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


### ThumbSwiper
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

### Time
```javascript
<Time
  timestamp={1460227647478}
  color={'#222'}
/>
```
