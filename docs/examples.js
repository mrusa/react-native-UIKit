// AlertMessage
// ================
<AlertMessage
  backgroundColor={'#222'}
  color={'#fff'}
  message={'This is the alert message here'}
  onPress={() => console.log('pressed')}
/>

// ArticleText
// ===========
<ArticleText
  username={'username'}
  text={'body of text for article'}
  highLightColor={'red'}
  onPress={() => console.log('pressed')}
/>

// Avatar
// ================
<Avatar
  src={'https://s3.amazonaws.com/uifaces/faces/twitter/evagiselle/128.jpg'}
  size={40}
  circle={true}
  onPress={() => console.log('pressed')}
/>

// AvatarHeader
// ================
<AvatarHeader src={'https://s3.amazonaws.com/uifaces/faces/twitter/evagiselle/128.jpg'}
  heading={'John Smith'}
  timestamp={1460227647478}
  circle={true}
  backgroundColor={'#fff'}
  height={40}
  gutter={10}
/>

// Button
// ==========
<Button
  color={'#fff'}
  backgroundColor={'#0094EA'}
  radius={5}>
  Submit
</Button>

// Card
// ================
<Card
  onPress={() => console.log('card pressed')}
  src={'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg'}
  title={'Card Title'}
  gutter={10}
  link={'www.example.com'}
  radius={5}
  marginBottom={30}
/>

// Carousel
// ================
<Carousel
  images={[
    'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg',
    'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg',
    'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg',
    'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg',
    'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg',
    'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg',
    'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg',
  ]}
  height={400}
/>

// Close
// ======
<Close
  size={50}
  color={'#222'}
  onPress={() => console.log('closed')}
/>

// DateItem
// ========
<DateItem
  timestamp={1460227647478}
  color={'#222'}
  marginLeft={10}
/>

// Divider
// ========
<Divider
  color={'#eee'}
/>

// FieldError
// ========
<FieldError
  errorMsg={'error something has gone wrong!'}
  error={true}
  color={'red'}
  marginBottom={40}
/>

// GalleryOffset
// ==============
<GalleryOffset
  imagesArray={[
    'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg',
    'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg',
    'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg',
    'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg',
    'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg',
    'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg',
    'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg',
  ]}
  display={'column'}
/>

// GalleryTiles
// ========================
<GalleryTiles
  images={[
    'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg',
    'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg',
    'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg',
    'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg',
    'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg',
    'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg',
    'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg',
  ]}
  />


// Heading (possibly to be depreciated)
// ========
<Heading
  size={50}
  weight={'bold'}
>HELLO THERE</Heading>

// ImageFullWidth
// ================
<ImageFullWidth
  src={'https://octodex.github.com/images/minion.png'}
  height={100}
  onPress={() => console.log('pressed')}
/>
// InputField
// ========
<InputField
  placeHolder={'i am the placeholder txt'}
  gutter={10}
  color={'#222'}
  backgroundColor={'#eee'}
  radius={5}
/>

// LikeBtn
// ========
<LikeBtn
  active={true}
  likes={322}
  color={'#fa0008'}
  onPress={() => console.log('liked')}
/>

// ListBasic
// ========================
<ListBasic onPress={(i) => alert(id)} items={[
  {id: 0, title:'This is row 1 here hello'},
  {id: 1, title:'And I am row 2, hello there'},
  {id: 2, title:'And I am row 3, hello there'}
]}/>

// LoginFb btn
// ========
<LoginFb
  onPress={() => console.log('login with fb')}
/>

// LoginForm
// ================
<LoginForm
  loginFb={() => alert('login with facebook')}
  onSubmit={() => alert('email, password')}
  error={false}
  errorMsg={'username or password incorrect'}
/>

// MapSection
// ========================
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

// Message
// =========
<Message
  active={true}
  user={'joe Blogs'}
  title={'message title'}
  message={'main body of the message here'}
  timestamp={1460227614421}
/>

// ProfileHeader
// =============
<ProfileHeader
  title={'John Smith'}
  summary={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip'}
  profileImg={'https://s3.amazonaws.com/uifaces/faces/twitter/evagiselle/128.jpg'}
  backgroundImg={'http://petapixel.com/assets/uploads/2014/05/ae5a74db2757e40b78ad13eb119a9224.jpg'}
/>

// RatingBox
// =======
<RatingBox />

// ReviewCell
// ==========
<ReviewCell
  title={'Gaucho'}
  description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'}
  src={'https://lh5.googleusercontent.com/proxy/lvLgnhcoHke5BEhTG-bVydssje9jV_GytcBidVZh4ADXEuiybVwXN4mlIbgxxOKn2pF1uharMho8lAqGSXcMGKJMigr42UH_qZ1THp4bZplV7uyThhmwEtq38oAhKW7V5Y_6j46jAEkxkrewm9wrd_T4K2JBUw8=w271-h180'}
  onPress={() => console.log('pressed')}
/>

// Search
// ======
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

// ThumbSwiper
// =========
<ThumbSwiper
  images={[
    'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg',
    'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg',
    'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg',
    'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg',
    'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg',
    'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg',
    'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg',
  ]}
  onPress={() => console.log('pressed')}
/>

// Time
// =======
<Time
  timestamp={1460227647478}
  color={'#222'}
/>







// article full example
// ========================
<View>
  <AvatarHeader src={'https://s3.amazonaws.com/uifaces/faces/twitter/evagiselle/128.jpg'}
    heading={'John Smith'}
    timestamp={1460227647478}
    circle={true}
    backgroundColor={'#fff'}
    height={40}
    gutter={10}
  />
  <ImageFull
    src={'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg'}
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
      username={'joe blogs'}
      text={'this is the article text'}
      //highLightColor={primary}
      onPress={() => console.log('link to profile')}
    />
    <Divider color={'#eee'}/>
  </View>
</View>

// card example
// =============
<View>
  <AvatarHeader src={'https://s3.amazonaws.com/uifaces/faces/twitter/evagiselle/128.jpg'}
    heading={'Heading Here'}
    timestamp={1460227614421}
    circle={true}
    backgroundColor={'#fff'}
    height={40}
    gutter={10}

    />
  <Card
    onPress={() => console.log('card pressed')}
    src={'http://2.bp.blogspot.com/-QnUrv6hrusQ/UTuCbLI45xI/AAAAAAAAvEo/REbD2Sp3r84/s1600/benoit-paille1.jpg'}
    title={'Title Here'}
    gutter={10}
    link={'www.example.com'}
    radius={5}
    />
</View>


// ==============
<ProfileHeader
  title={'John Smith'}
  summary={'i am john smith i am a sdf sd dsf sdf sdf sd sd sd s sdf fsdf '}
  profileImg={'https://s3.amazonaws.com/uifaces/faces/twitter/evagiselle/128.jpg'}
  backgroundImg={'http://41.media.tumblr.com/7fcdee1b773bda7859eee69d2eb1e0f8/tumblr_nfvzenuIqW1tof0p4o1_1280.jpg'}
/>
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
