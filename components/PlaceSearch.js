import React, {useState} from 'react';
import Placesearch from 'react-native-placesearch';
import {View, StyleSheet} from 'react-native';


function PlaceSearch({onSelectedAddressCallBack}) {
    const [inputValue, setInputValue] = useState('');
    return (
        <View style={styles.pozadina}>
            <Placesearch 
            apikey="AIzaSyADRwyIdclthwhYK71wenGMfNLCJQi9b5s" 
            SelectedAddress={(data)=>onSelectedAddressCallBack(data)} 
            onClose={(data)=>alert(data)}
            country ="RS" 
            coordinate={true} 
            removeImg = {true} 
            MainContainer = {{backgroundColor: '#045346'}} 
            placeHolder = {'Unesite lokaciju deponije'} 
            />
        </View>
    );
}

// novi api key AIzaSyADRwyIdclthwhYK71wenGMfNLCJQi9b5s

const styles = StyleSheet.create({
    pozadina: {
        backgroundColor: 'red',
        // marginTop: '10%',
        flex: 1,
        width: '100%',
        // borderBottomColor: "red",
        // borderBottomWidth: 5
    }
})
export default PlaceSearch;