import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import AppButton from '../components/AppButton'

function Card({title, address, photo, description, onPress}) {

    return (
        <View>
            <TouchableOpacity style={styles.card} onPress={onPress}>
                <Image style={styles.img} source={{uri:photo}}/>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.desc}>{description.substring(0, 20) + '...'}</Text>
                <Text style={styles.address}>{address.substring(0, 35) + '...'}</Text>
                <AppButton height="5%" title={'Detaljnije...'} onPress={onPress}/>
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
        alignItems: 'center'
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
        paddingHorizontal: 10,
    },    
    desc: {
        fontSize:16,
    },
    img: {
        width: '100%',
        height: 200,
        resizeMode: 'contain'
    }
})

export default Card;