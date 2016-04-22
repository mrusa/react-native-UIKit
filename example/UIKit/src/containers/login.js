import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import { ImageCustom, LoginForm } from 'react-native-uikit'

export default class Login extends Component {
  render(){
    return(
      <ImageCustom
        src={'https://s-media-cache-ak0.pinimg.com/736x/9c/11/d8/9c11d813826489f82b3f4c02a06ea815.jpg'}
        height={300}
        overlayColor={'#222'}
        overlayOpacity={0.8}
        fullHeight={true}
      >
      <View style={{flex:1, justifyContent:'center', paddingHorizontal:50}}>
        <LoginForm
          loginFb={() => console.log('login with facebook')}
          onSubmit={(email, password) => console.log(email, password)}
          error={false}
          errorMsg={'username or password incorrect'}
        />
        <TouchableHighlight onPress={this.props.skip}>
          <Text style={{textAlign: 'center', color: '#fff'}}>Skip this step</Text>
        </TouchableHighlight>
      </View>
      </ImageCustom>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
