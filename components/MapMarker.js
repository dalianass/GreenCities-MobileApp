import React, {useState} from 'react';
import MapView, { Callout, Marker, Circle } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

function MapMarker({pin}) {

    return (
        <Marker coordinate={pin}
            pinColor="#045346">
            <Callout>
                <Text>Ovde se nalazi deponija.</Text>
            </Callout>
        </Marker>
    );
}
const styles = StyleSheet.create({
    
})
export default MapMarker;