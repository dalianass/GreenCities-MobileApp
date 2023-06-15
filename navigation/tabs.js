import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from '../screens/WelcomeScreen';
import AddReportScreen from '../screens/AddReportScreen';
import ReportsListScreen from '../screens/ReportsListScreen';
import Map from '../components/Map';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import ChartScreen from '../screens/ChartScreen';
import ReportListNavigator from '../screens/ReportListNavigator';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity style={{
        top: -25,
        justifyContent: 'center',
        ...styles.shadow
    }}
    onPress={onPress}>
        <View style={{width: 55, height: 55, borderRadius: 35, backgroundColor:'lightgray'}}>
            {children}
        </View>
    </TouchableOpacity>
);



const Tabs = () => {
    return(
        <Tab.Navigator screenOptions={{ headerShown: false }}
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'relative',
                    bottom: '75',
                    left: '20',
                    right: '20',
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow
                }
            }}>

            <Tab.Screen name='Home' component={ReportListNavigator}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}> 
                            <Image source={require('../assets/ikonice/home.png')}
                                resizeMode='contain'
                                style={{width: 25, height: 25, tintColor: focused ? '#045346' : '#c2c0bc'}}
                            />    
                            <Text style={{color: focused ? '#045346' : '#c2c0bc', fontSize: 12, marginBottom: 15}}>Home</Text>
                        </View>
                    )
                }}
            />

            <Tab.Screen name='Mapa' component={Map}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}> 
                            <Image source={require('../assets/ikonice/map.png')}
                                resizeMode='contain'
                                style={{width: 25, height: 25, tintColor: focused ? '#045346' : '#c2c0bc'}}
                            />    
                            <Text style={{color: focused ? '#045346' : '#c2c0bc', fontSize: 12, marginBottom: 15}}>Mapa</Text>
                        </View>
                    )
                }}
            />
            
            <Tab.Screen name='Add' component={AddReportScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                            <Image source={require('../assets/ikonice/add.png')}
                                resizeMode='contain'
                                style={{width: 25, height: 25, tintColor: focused ? '#045346' : 'white'}}
                            />    
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props} />
                    )
                }}
            />
            <Tab.Screen name='Lista2' component={ChartScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}> 
                            <Image source={require('../assets/ikonice/statistika.png')}
                                resizeMode='contain'
                                style={{width: 25, height: 25, tintColor: focused ? '#045346' : '#c2c0bc'}}
                            />    
                            <Text style={{color: focused ? '#045346' : '#c2c0bc', fontSize: 12, marginBottom: 15}}>Statistika</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen name='Lista3' component={ReportsListScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}> 
                            <Image source={require('../assets/ikonice/home.png')}
                                resizeMode='contain'
                                style={{width: 25, height: 25, tintColor: focused ? '#045346' : '#c2c0bc'}}
                            />    
                            <Text style={{color: focused ? '#045346' : '#c2c0bc', fontSize: 12, marginBottom: 15}}>Home</Text>
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }

});

export default Tabs;