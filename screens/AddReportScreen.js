import React, { useState } from 'react';
import {View, StyleSheet, Text} from 'react-native'
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import PlaceSearch from '../components/PlaceSearch';
import axios from 'axios';
import { myUrl } from '../helpers/urlHelper';

function AddReportScreen(props) {
    const [address, setAddress] = useState("Probna adresa NOVO");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [latitude, setLatitude] = useState("20.56615");
    const [longitude, setLongitude] = useState("1.65454");

    const callApi = (title, address, desc, lat, lng) => {
        const data = {
            title: title,
            address: address,
            description: desc,
            photo: "background.png",
            createdBy: {
                id: 4
            },
            latitude: lat,
            longitude: lng
        };
        axios.post(myUrl + '/reports', data)
        .then(function (response) {
            if(response.status == 201) {
                alert("Uspesno ste kreirali izvestaj.");
            }
        })
        .catch(function (error) {
            alert(error.message);
        });
    }

    return (
       <View style={styles.container}>
            <Text style={styles.text}>Kreirajte izvestaj o deponiji</Text>
           <PlaceSearch onSelectedAddressCallBack= {(data) => 
            {
                setLatitude(data.coordinate.lat);
                setLongitude(data.coordinate.lng);
                setAddress(data.description);
                alert("Uspesno pokupljene koordinate sa ovog mesta.");
            }
            }
           onChangeText={text => console.log("Radi")}/>

           <AppTextInput placeholder="Unesite naslov objave"
            onChangeText={text => setTitle(text)}
            autoCorrect={false} />  

            <AppTextInput placeholder="Unesite komentar"
            onChangeText={text => setDescription(text)}
            autoCorrect={false} />   
            <AppButton title="Prijavi deponiju" onPress={() => callApi(title, address, description, latitude, longitude)}/>
       </View>      
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20
    },
    text: {
        // marginTop: 20,
        fontSize: 20
    }
})

export default AddReportScreen;