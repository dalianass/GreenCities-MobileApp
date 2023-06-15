import React from 'react';
import { ImageBackground, Image, StyleSheet, View, Text } from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen({navigation}) {
    return (
        <View style={styles.background}>
            <ImageBackground style={styles.backgroundImg} source={require("../assets/final.png")}>
                <Image style={styles.logo} source={require("../assets/logo.png")}/>
                <Text style={styles.text}>Čuvajmo okolinu.</Text>
                <Text style={styles.textSmall}>Pomozi lociranje deponija prijavom.</Text>

                <View style={styles.buttonsContainer}>
                    <AppButton title="Prijava" onPress={()=> navigation.navigate("Prijava")}/>
                    <AppButton title="Registracija" onPress={()=> navigation.navigate("Registracija")} color="#012F2C"/>
                </View>
            </ImageBackground>
        </View>
        );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width:'100%',
        height:'100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    backgroundImg: {
        flex: 1,
        width:'100%',
        height:'100%',
        paddingTop: 30,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        color: '#eee',
        marginHorizontal: 40
    },
    textSmall: {
        marginVertical:20,
        fontSize: 20,
        color: '#eee',
        marginHorizontal: 40
    },
    buttonsContainer: {
        padding: 20,
        width: '100%',
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    logo: {
        width:120,
        height: 120,
        marginVertical:30,
        resizeMode: 'contain'
    },

    loginButton: {
       width: '100%',
       height: 70,
       backgroundColor: '#8DA56C' 
    },

    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#E2C18B' 
     }
})

export default WelcomeScreen;