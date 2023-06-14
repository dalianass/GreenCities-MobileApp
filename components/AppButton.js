/* #012F2C
#045346
#8DA56C
#D2E0DB
#E2C18B*/

import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

function AppButton({title, onPress, height, color="#045346", disabled=false}) {
    return (
        <TouchableOpacity disabled={disabled}
        style={[styles.button, 
                {backgroundColor: color}, 
                {height: height},
                {opacity: disabled ? 0.5 : 1 }
        ]} 
        onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#045346',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        marginTop:5,
        marginBottom:5,
    },
    text: {
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: 'white'
    }
})

export default AppButton;

