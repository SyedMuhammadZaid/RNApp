import React from 'react';
import {Text, View, Button} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
// import HelloWorldApp from './helloworld';
const App = () => {
  return (
    <View>
      <Text style={{fontSize:20, color:"white", margin:10}}>Hello react native</Text>
      <Button title='submit'></Button>
     
    </View>
  );
};
export default App;
