import React from 'react';
import {Text, View, Button, TextInput} from 'react-native';
import Header from './components/header';

const App = () => {
//  on click button1
  const val = ()=>{
      console.warn("button clicked")
  }

// on click button2
  const clicked_val = (value:string)=>{
    console.warn(value)
  }

  return (
    <View style={{padding:10}}>
    <Header />
    {/* text  */}
      <Text style={{fontSize:20, color:"white", margin:10}}>First Screen</Text>
    {/* input text */}
      <TextInput placeholder="Type here..."/>
    {/* button */}
      <Button title='on press' color={'gray'} onPress={val}></Button>
    {/* button that is sending a value on its on press */}
      <Button title='value' color={'blue'} onPress={()=>{clicked_val("hello you clicked")}}/>
    </View>
  );
};
export default App;
