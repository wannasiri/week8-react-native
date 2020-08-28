
import React,{Component} from 'react';
import { View, Text } from 'react-native';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      name:"Hell Bat",
      name2:"Kisses"
    }
  }
  render(){
    let title="Come Hither"
    return(
      <View>
        <Text>{title}</Text>
    <Text>{this.state.name} and {this.state.name2}</Text>
      </View>
    )
  }
}
export default App;