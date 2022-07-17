import React, { Component } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from '../screens/feed';

import Ionicons from 'react-native-vector-icons/Ionicon';





const Tab = createBottommaterialTabNavigator()

const bottomTabNavigator=()=>{
  return (
    <NavigationContainer>
      <Tab.Navigator
       labeled={false}
       barStyle={{ backgroundColor: '#694fad',height:'10%',borderTopLeftRadius:30,borderTopRightRadius:30,overflow: "hidden",position:"absoulute"}}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Feed') {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === 'CreatePost') {
              iconName = focused ? 'create' : 'create-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })} 
        tabBarOptions={{
          activeTintColor:'tomato'
          
        }}
        
        >
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="CreatePost"
          component={CreatePost}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );

}


export default bottomTabNavigator