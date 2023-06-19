import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImageBackground, View, Text } from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import DefaultScreen from './DefaultScreen';
// import SideNavigator from './SideNavigator';


export default function WelcomeStackNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    // <NavigationContainer>
    <Stack.Navigator initialRouteName='Green'  
    screenOptions={{
      headerStyle: {
        backgroundColor: '#3f8861',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitle: (props) => ( // App Logo
        <ImageBackground
        style={{ width: 50, height: 50 }}
        source={{uri:"https://res.cloudinary.com/daq9ulbte/image/upload/v1686837304/b7ca9800-93d4-4de9-b0b8-dc56117f23a1.png"}}
        resizeMode='contain'
        />
    ),
    headerTitleStyle: { flex: 1 },
    }}>
    <Stack.Screen name='Prijava' component={LoginScreen} />
    <Stack.Screen name='Registracija' component={RegisterScreen} />
    <Stack.Screen name='Green' component={WelcomeScreen} options={{headerShown: false}} />
    <Stack.Screen name='Default' component={DefaultScreen} />
    </Stack.Navigator>
//   </NavigationContainer>
    );
}