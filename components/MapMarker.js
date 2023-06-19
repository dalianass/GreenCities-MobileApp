import React, {useState} from 'react';
import MapView, { Callout, Marker, Circle } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import ReportDetailScreen from '../screens/ReportDetailScreen';

function MapMarker({pin, navigation, rep}) {

    return (
        <Marker coordinate={pin}
            pinColor="#045346">
            <Callout>
                <Text style={styles.title}>{rep.title}</Text>
                <Text style={styles.address}>Adresa:</Text>
                <Text style={styles.address}>{rep.address}</Text>
            </Callout>
        </Marker>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        width: '100%',
        flex: 1,
        alignItems:'center'
    },
    ikonica: {
        width: 20,
        height:20,
        marginHorizontal: 7,
        marginVertical: 1
    },
    img: {
        width: '100%',
        height: '50%',
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        fontSize:24,
        fontWeight: 'bold',
        marginBottom: 7,
        color: '#045346'
    },
    address: {
        fontSize:12,
        color: 'blue'
    },
    opis: {
        fontSize:18,
        marginBottom: 7
    }
})
export default MapMarker;