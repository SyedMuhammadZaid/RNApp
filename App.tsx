import React from 'react';
import {Text, View} from 'react-native';
import HelloWorldApp from './helloworld';
const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hello, world! its zaid</Text>
      <HelloWorldApp />
    </View>
  );
};
export default App;
