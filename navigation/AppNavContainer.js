import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator, ImageBackground, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import WelcomeStackNavigator from './WelcomeStackNavigator';
import Tabs from './tabs';
import SideNavigator from './SideNavigator';


export default function AppNavContainer() {
  const {isLoading, userToken} = useContext(AuthContext);

  if(isLoading) {
    return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'}/>
    </View>
    );
  }

  return (
    <NavigationContainer>
        {userToken !== null ? <SideNavigator/> : <WelcomeStackNavigator/>  }
        {/* <SideNavigator/> */}
    </NavigationContainer>
    );
}