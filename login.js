
import React from 'react';
import { View, Text } from 'react-native';
const login=(props)=>{
  return(
    <View>
      <Text>Login Screen</Text>
      <Text>{props.data2}</Text>
    </View>
  )
}
export default login;