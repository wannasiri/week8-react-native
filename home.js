
import React from 'react';
import { View, Text, Button } from 'react-native';
const Home=(props)=>{
    
  return(
    <View>
      <Text style={{fontSize:30}}>Homr page</Text>
  <Text>{props.data}</Text>
  <Button title="Press Me"/>
    </View>
  )
}
export default Home;