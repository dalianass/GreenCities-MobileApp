import React, {useState} from 'react';
import MapView, { Callout, Marker, Circle } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import ReportDetailScreen from '../screens/ReportDetailScreen';

function MapMarker({pin, navigation, rep}) {

    return (
        <Marker coordinate={pin}
            pinColor="#045346">
            <Callout>
                <TouchableOpacity  onPress={() => navigation.navigate("ReportDetails", {report: rep})}>
                    <Text>Ovde se nalazi deponija.</Text>
                </TouchableOpacity>

            {/* <ReportDetailScreen route={route}/> */}
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