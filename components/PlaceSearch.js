import React, {useState} from 'react';
import Placesearch from 'react-native-placesearch';
import {View, StyleSheet} from 'react-native';


function PlaceSearch({onSelectedAddressCallBack}) {
    const [inputValue, setInputValue] = useState('');
    return (
        <View style={styles.pozadina}>
            <Placesearch style={styles.pozadina}
            apikey="AIzaSyADRwyIdclthwhYK71wenGMfNLCJQi9b5s" 
            SelectedAddress={(data)=>onSelectedAddressCallBack(data)} 
            onClose={(data)=> console.log("Zatvaramo") }
            country ="RS" 
            coordinate={true} 
            removeImg = {true}
            zIndex = {0} 
            // MainContainer = {{backgroundColor: '#045346'}} 
            ContainerBackgroundColor="#eee" // optional
            InputContainer = {{backgroundColor: 'transparent'}} //optional
            MainContainer = {{backgroundColor: 'transparent'}} 
            placeHolder = {'Unesite lokaciju deponije'} 
            />
        </View>
    );
}

// novi api key AIzaSyADRwyIdclthwhYK71wenGMfNLCJQi9b5s

const styles = StyleSheet.create({
    pozadina: {
        // backgroundColor: 'red',
        // marginTop: '10%',
        flex: 2,
        width: '100%',
        // borderBottomColor: "red",
        // borderBottomWidth: 5
    },
    place: {
        zIndex: 9999
    }
})
export default PlaceSearch;