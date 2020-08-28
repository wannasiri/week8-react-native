
import React,{Component} from 'react';
import { View, Text,  } from 'react-native';
export default class App extends Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',backgroundColor:'#D0B3E1',alignItems:"stretch"}}>
                <View style={{flex:1,backgroundColor:'#F9A484'}}>
                <Text style={{fontSize:100,textAlign:'center',color:"#fff"}}>Overview</Text>
                </View>
                <View style={{flex:1,backgroundColor:'#FDB4BF'}}>
                <Text style={{fontSize:100,textAlign:'center',color:"#fff"}}>Overview</Text>
                </View>
                <View style={{flex:1,backgroundColor:'#F9A484'}}>
                <Text style={{fontSize:100,textAlign:'center',color:"#fff"}}>Overview</Text>
                </View>
                

            </View>
          
        )
    }
}
