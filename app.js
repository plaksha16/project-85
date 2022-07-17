import * as React from 'react';
import {createSwitchNavigator,createAppContainer} from "react-navigation"
import Dashboard from './screens/dashboard';
import Loading from './screens/loading';
import Login from './screens/login';


const AppSwitchNavigator=createSwitchNavigator({
Loading:Loading,
Login:Login,
Dashboard:Dashboard
})

const AppNavigator=createAppContainer(AppSwitchNavigator)

export default function App() {
  return (
    
    <AppNavigator/>
  )
}


