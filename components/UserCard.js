import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, Dimensions} from 'react-native';

function UserCard({firstname, lastname, email, role, photo}) {

    return (
            <View style={styles.card}>
                <Image style={styles.img} source={{uri:photo}}/>
                <View style={styles.wrap}>
                <Text style={styles.ime}>{firstname}</Text>
                <Text style={styles.ime}>{lastname}</Text>
                    <Text style={styles.email}>{email}</Text>
                <Text style={styles.role}>{"Uloga: " + role}</Text>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius:15,
        backgroundColor: 'white',
        marginBottom: 10,
        marginTop: 10,
        overflow:'hidden',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 20
    },
    ime: {
        fontSize:22,
        fontWeight: 'bold',
        // marginBottom: 7,
        color: '#54AB98'
    },
    role: {
        fontSize:14,
        color: 'grey',
        fontStyle: 'italic',
    },    
    email: {
        fontSize:14,
        flexWrap: 'wrap'
    },
    img: {
        width: 90,
        height: 90,
        resizeMode: 'contain',
        marginHorizontal: 20,
    },
    wrap: {
        minWidth: Dimensions.get('window').width - 160
    }
})


// 
export default UserCard;