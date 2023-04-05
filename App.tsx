import React from 'react';
import {Text, View, Button, TextInput} from 'react-native';

const App = () => {

  const add = ()=>{
      return  2 + 2;
  }

  return (
    <View>
      <Text style={{fontSize:20, color:"white", margin:10}}>translate</Text>
      <TextInput placeholder="Type here to translate!"/>
      <Button title='translate'></Button>
      <Text style={{fontSize:20}}>{add()}</Text>
     
    </View>
  );
};
export default App;
