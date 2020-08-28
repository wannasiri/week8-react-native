
import React,{Component} from 'react';
import { View, Text,StyleSheet  } from 'react-native';
export default class App extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.v1}>
                <Text style={styles.t1}>Overview</Text>
                </View>
                <View style={styles.v2}>
                <Text style={styles.t1}>Overview</Text>
                </View>
                <View style={styles.v3}>
                <Text style={styles.t1}>Overview</Text>
                </View>
                

            </View>
          
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#D0B3E1',
        alignItems:"stretch"
    },
    v1:{
       flex:1,
       backgroundColor:'#F9A484' 
    },
    t1:{
        fontSize:100,
        textAlign:'center',
        color:"#fff"
    },
    v2:{
        flex:1,
        backgroundColor:'#FDB4BF'
    },
    v3:{
        flex:1,
        backgroundColor:'#B9E3AE'
    }


    
})