import React, {useContext} from 'react';

import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import {Text, ImageBackground, View, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AuthContext } from '../context/AuthContext';
const CustomSideNavigator = props => {
    const {logout} = useContext(AuthContext);
    const {userInfo} = useContext(AuthContext);

  return (
    <View style={{flex: 1}}>
    <DrawerContentScrollView 
    {...props}
    contentContainerStyle={{backgroundColor: '#045346'}}>
        <ImageBackground source={require('../assets/background.png')} style={{padding: 20}}>
            <Image source={{uri: 'http://res.cloudinary.com/daq9ulbte/image/upload/v1687097401/26093d44-e41b-484d-acae-18fdcae74766.png'}}
                style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}/>
            <Text style={{color: '#fff', fontSize: 18}}>{userInfo.user.firstName + " " + userInfo.user.lastName}</Text>
            <Text style={{color: 'gray', fontSize: 14, textTransform: 'lowercase'}}>{userInfo.user.email}</Text>
         </ImageBackground>
        <View style={{flex:1, backgroundColor: '#fff', paddingVertical: 10}}>
            <DrawerItemList {...props}/>
        </View>
    </DrawerContentScrollView>
    <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {logout()}} style={{paddingVertical: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* <Entypo name="power-off" size={22} color='blue' /> */}
            <Feather name="power" size={22} color="gray" />
                <Text style={{fontSize: 15, marginLeft:5, color: 'gray'}}>Odjavi se</Text>
            </View>
        </TouchableOpacity>
    </View>

    </View>
  )
}

export default CustomSideNavigator;