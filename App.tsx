import React,{useState} from 'react';
import {Text, View, Button, TextInput} from 'react-native';
import Header from './components/header';

const App = () => {
// use state
  const [name,setname] = useState('syed zaid');
  const [num,setnum] = useState(1);

//  on click button1
  const val = ()=>{
     console.warn('you clicked')
  }

// on click button2
  const clicked_val = (value:string)=>{
    console.warn(value)
  }

// button for state changed.
  const namechange = ()=>{
    setname('syed muhammad zaid');
  }
// button for number updated. 
  const numchange = ()=>{
    setnum(num+1);
  }

  return (
    <View style={{padding:10}}>
    <Header />
    {/* text  */}
      <Text style={{fontSize:20, color:"white", margin:10}}>First Screen</Text>
      <Text style={{fontSize:20}}>{name}</Text>
      <Text style={{fontSize:20}}>{num}</Text>
    {/* input text */}
      <TextInput placeholder="Type here..."/>
    {/* button */}
      <Button title='on press' color={'gray'} onPress={val}></Button>
    {/* button that is sending a value on its on press */}
      <Button title='value' color={'blue'} onPress={()=>{clicked_val("hello you clicked")}}/>
    {/* updating the state */}
    <Button title='Full name' onPress={namechange}></Button>
    <Button title='number updated' onPress={numchange}></Button>
      
    </View>
  );
};
export default App;
