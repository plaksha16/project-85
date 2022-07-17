import React from 'react';
import { createStackNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator'
import PostCard from '../screens/postCard';




const stack = createStackNavigator();


const stackNavigator=()=>{
    return(
        
            <Stack.Navigator
            initialRouteName="Home"
            ScreenOption={{
            headerShown:false
            }
            }
            >
<Stack.Screen name="Home" component={TabNavigator}/>
<Stack.screen name="PostScreen" component={PostScreen}/>

            </Stack.Navigator>
               
        )

   
}

export default StackNavigator;