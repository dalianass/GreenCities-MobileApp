import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, View, Image, Text, ImageBackground} from 'react-native';
import { AuthContext } from '../context/AuthContext';
import AppButton from '../components/AppButton';

function LogoutScreen() {
    const {logout} = useContext(AuthContext);

    return (
            <View style={styles.container}>
                    <AppButton title="LOGOUT" onPress={() =>  {
                                logout();
                            }}
                    />
            </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        width: '100%',
        alignItems: 'center',
    },
    backgroundImg: {
        flex: 1,
        width:'100%',
        height:'100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    logo: {
        width:120,
        height: 120,
        alignSelf: 'center',
        marginTop:50,
        marginBottom:30,
        resizeMode: 'contain'
    },
    title: {
        fontSize:24,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#045346'
    },
    errorMsg: {
        color: 'red',
        // backgroundColor: '#f78a8a',
        paddingHorizontal: 15
    }
})
export default LogoutScreen;