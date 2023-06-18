import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ChartScreen from '../screens/ChartScreen';
import ReportDetailScreen from '../screens/ReportDetailScreen';
import Tabs from './tabs';
import CustomSideNavigator from './CustomSideNavigator';
import { Entypo } from '@expo/vector-icons';
import UsersListScreen from '../screens/UsersListScreen';


const Drawer = createDrawerNavigator()

export default function SideNavigator() {

  return (
    // <Drawer.Navigator screenOptions={{headerShown: false}}>
    <Drawer.Navigator 
    drawerContent={props => <CustomSideNavigator {...props} />} 
    screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#045346' ,
        drawerActiveTintColor: '#fff',
        drawerLabelStyle: {
            marginLeft: -25,
            fontSize: 15
            
            }}}>
      <Drawer.Screen name="Pocetna" component={Tabs} 
        options={{drawerIcon: ({color}) => (
            <Entypo name="plus" size={22} color={color} />
        )}}
      />
      <Drawer.Screen name="Statistika" component={ChartScreen} 
             options={{drawerIcon: ({color}) => (
                <Entypo name="plus" size={22} color={color} />
    
            )
            
            }}
      />
        <Drawer.Screen name="Users" component={UsersListScreen} 
            options={{drawerIcon: ({color}) => (
            <Entypo name="plus" size={22} color={color} />

        )
        
        }}
    />
    </Drawer.Navigator>
  )
}