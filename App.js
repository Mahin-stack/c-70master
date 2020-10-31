import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';

export default class App extends React.Component{
  render(){
  return (
    <View>
      <AppContainer/>
    </View>
  );
}
}
const TabNavigator= createBottomTabNavigator({
  Write: WriteStoryScreen,
  Read:ReadStoryScreen,
},
{
  defaultNavigationOptions: ({navigation})=>({
  tabBarIcon: ({})=>{
                     // variable navigation
    const routeName = navigation.state.routeName
    if(routeName=== 'WriteStory'){
      return(
        <Image
        source={require('./assets/write.png')}
        style={{width:50, height: 50}}
        />
      )
    }
    else if(routeName=== 'ReadStory'){
      return(
        <Image
        source={require('./assets/read.png')}
      style={{width: 50, height: 50}}
        />
        )
    }
  }
  })
  })

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
