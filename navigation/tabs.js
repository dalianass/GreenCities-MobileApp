import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from '../screens/WelcomeScreen';
import AddReportScreen from '../screens/AddReportScreen';
import ReportsListScreen from '../screens/ReportsListScreen';
import Map from '../components/Map';
import { StyleSheet, Image, View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import ChartScreen from '../screens/ChartScreen';
import ReportListNavigator from './ReportListNavigator';
import LogoutScreen from '../screens/LogoutScreen';
import SideNavigator from './SideNavigator';
import React,{ useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import jwtDecode from 'jwt-decode';
import MyReportsScreen from '../screens/MyReportsScreen';
import UsersListScreen from '../screens/UsersListScreen';

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



const Tabs = ({navigation}) => {
    const {userToken} = useContext(AuthContext);
    const {userInfo} = useContext(AuthContext);
    const decodedToken = jwtDecode(userToken);
    const roleTrenutnogUsera = decodedToken.role[0].authority;

    return(
        <Tab.Navigator 
        
        screenOptions={{
            tabBarShowLabel: false,
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
            },
            headerStyle: {
              backgroundColor: '#3f8861',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitle: (props) => ( // App Logo
            <TouchableOpacity 
            onPress={()=>  {
                navigation.openDrawer()
            }}>
                <View style={{flexDirection: 'row', gap:7, alignItems:'center'}}>
                    <ImageBackground
                    style={{ width: 30, height: 30}}
                    source={require("../assets/ikonice/hamburger.png")}
                    resizeMode='contain'/>
                    {/* <Text style={{color: "#fff"}}>{userInfo.user.firstName} {userInfo.user.lastName}</Text> */}
                    <Text style={{color: "#fff"}}>Green</Text>

                </View>

            </TouchableOpacity>
            
          ),
          headerTitleStyle: { flex: 1 },
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
             { roleTrenutnogUsera ==='korisnik' 
            ?
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
            : null}

            <Tab.Screen name='Statistika' component={ChartScreen}
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
            
            {roleTrenutnogUsera ==='korisnik' 
            ? 
            <Tab.Screen name='Moji izvestaji' component={MyReportsScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}> 
                            <Image source={require('../assets/ikonice/list.png')}
                                resizeMode='contain'
                                style={{width: 25, height: 25, tintColor: focused ? '#045346' : '#c2c0bc'}}
                            />    
                            <Text style={{color: focused ? '#045346' : '#c2c0bc', fontSize: 12, marginBottom: 15}}>Moji izvestaji</Text>
                        </View>
                    )
                }}
            />
            : 
            <Tab.Screen name='Korisnici' component={UsersListScreen}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}> 
                        <Image source={require('../assets/ikonice/group.png')}
                            resizeMode='contain'
                            style={{width: 25, height: 25, tintColor: focused ? '#045346' : '#c2c0bc'}}
                        />    
                        <Text style={{color: focused ? '#045346' : '#c2c0bc', fontSize: 12, marginBottom: 15}}>Korisnici</Text>
                    </View>
                )
            }}
            />
        }
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