import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
// import{MaterialCommunityIcons} from '@expo/vector-icons';

function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            {/* {icon && <MaterialCommunityIcons name={icon} size={20} color='#333' style={styles.icon}/>} */}
            <TextInput style={styles.textInput} {...otherProps}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        borderRadius:25,
        // flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        width: '100%',
        // height:'20%',
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10
    },
    textInput: {
        color: '#0c0c0c',
        width:'100%',
        // height:'80%'
        // fontSize:'18px',
        // fontFamily: Platform.OS ==='Android' ? 'Roboto' : 'Avenir'
    }
})

export default AppTextInput;