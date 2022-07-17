import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator'
import profile from '../screens/profile'
import bottomTabNavigator from './TabNavigator';
import Profile from '../screens/profile';



const Drawer=createDrawerNavigator();


const DrawerNavigator=()=>{
    return(
        <DrawerNavigator>

<Drawer.Screen name='Home' Component={bottomTabNavigator}/>
            <Drawer.Screen name="Profile"  Component={Profile}/>

        </DrawerNavigator>
    )
}

export default DrawerNavigator;