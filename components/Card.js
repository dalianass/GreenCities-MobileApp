import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import AppButton from './AppButton';
import{MaterialCommunityIcons} from '@expo/vector-icons';

function Card({title, address, photo, description, onPress, isFinished=null}) {

    return (
        <View>

            <TouchableOpacity style={styles.card} onPress={onPress}>
                <Image style={styles.img} source={{uri:photo}}/>
                <View style={styles.wrap}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                {isFinished == true ?
                <View style={styles.wrap}>
                    <Image source={require("../assets/ikonice/verified.png")} style={styles.ikonica}/>
                    <Text style={styles.approved}>Ova deponija je uklonjena!</Text>
                </View> 
                : 
                <View>
                    <View style={styles.wrap}>
                        {/* <MaterialCommunityIcons name="grease-pencil" size={20} color='#333' style={styles.icon}/> */}
                        <Image source={require("../assets/ikonice/pencil1.png")} style={styles.ikonica}/>
                        <Text style={styles.desc}>{description.substring(0, 20) + '...'}</Text>
                    </View>


                    <View style={styles.wrap}>
                        <Image source={require("../assets/ikonice/cancel.png")} style={styles.ikonicaCanc}/>
                        <Text style={styles.approved}>Ova deponija nije uklonjena.</Text>
                    </View> 
                    <View style={styles.wrap}>
                        {/* <MaterialCommunityIcons name="google-maps" size={20} color='#333' style={styles.icon}/> */}
                        <Image source={require("../assets/ikonice/place.png")}  style={styles.ikonica}/>

                        <Text style={styles.address}>{address.substring(0, 40) + '...'}</Text>
                    </View>

                </View>
                }

                <AppButton  title={"Detaljnije..."} onPress={onPress}/>
                

            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius:15,
        backgroundColor: 'white',
        // marginBottom: 20,
        marginTop: 10,
        overflow:'hidden',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
        // paddingVertical:20
    },
    ikonica: {
        width: 20,
        height:20,
        marginHorizontal: 7,
        marginVertical: 1
    },
    ikonicaCanc: {
        width: 19,
        height:19,
        marginHorizontal: 7,
        marginVertical: 1
    },
    
    detailsContainer: {
        padding: 20,
        alignItems: 'center'
    },
    title: {
        fontSize:24,
        fontWeight: 'bold',
        marginBottom: 7,
        color: '#045346'
    },
    address: {
        fontSize:12,
        color: 'grey',
        fontStyle: 'italic',
    },    
    desc: {
        fontSize:16,
    },
    img: {
        width: '100%',
        height: 200,
        resizeMode: 'contain'
    },
    wrap: {
        flexDirection: 'row'
    },
    approved: {
        color: '#c0c0c0'
    }
})

export default Card;