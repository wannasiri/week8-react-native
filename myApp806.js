
import React,{Component} from 'react';
import { View, Text, Button } from 'react-native';



class Veera extends Component{
  constructor(){
    super()
    this.state={
      data:"Veera"
    }}
    testState(){
      this.setState({data:"Come Hither"})
    }
    render(){
      return(
        <View>
        <Text style={{fontSize:100,textAlign:'center'}}>{this.state.data}</Text>
        <Button 
        title="Update"
        onPress={()=>{this.testState({})}}
        
        />
      </View>
      )
    }
      
  }
export default Veera;