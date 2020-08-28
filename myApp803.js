import React, { Component } from 'react';
import { View,Text} from 'react-native';
 class cat extends Component{
   constructor(props){
     super(props)
     this.state={
       title:"come VeeDa",
       title2:"VeeDa"
     }
   }
 render(){
    return(
    <View>
      <Text>{this.state.title}</Text>
      <Text>{this.state.title2}</Text>
    </View>
  )
 }
 
}
export default cat;