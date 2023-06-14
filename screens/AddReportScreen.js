import React, { useState } from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native'
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import PlaceSearch from '../components/PlaceSearch';
import axios from 'axios';
import { myUrl } from '../helpers/urlHelper';
import AppImageUpload from '../components/AppImageUpload';

function AddReportScreen(props) {
    const [address, setAddress] = useState("Probna adresa NOVO");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [latitude, setLatitude] = useState("20.56615");
    const [longitude, setLongitude] = useState("1.65454");
    const [image, setImage] = useState("");

    const callApi = (title, address, desc, photo, lat, lng) => {
        const data = {
            title: title,
            address: address,
            description: desc,
            photo: photo,
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
            <ScrollView style={styles.scroll}  showsVerticalScrollIndicator={false}>
                <Text style={styles.text}>Kreirajte izvestaj o deponiji</Text>

                <AppTextInput placeholder="Unesite naslov objave"
                    onChangeText={text => setTitle(text)}
                    autoCorrect={false} />  

                <AppTextInput placeholder="Unesite komentar"
                onChangeText={text => setDescription(text)}
                autoCorrect={false} />   

                <AppImageUpload sendUrlToParentComponent={(data) => setImage(data)}/>

                <PlaceSearch onSelectedAddressCallBack= {(data) => 
                {
                    setLatitude(data.coordinate.lat);
                    setLongitude(data.coordinate.lng);
                    setAddress(data.description);
                    alert("Uspesno pokupljene koordinate sa ovog mesta.");
                }}
                    onChangeText={text => console.log("Radi")}/>

                
                <AppButton title="Prijavi deponiju" onPress={() => callApi(title, address, description, image, latitude, longitude)}/>
        </ScrollView>
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
    },
    scroll: {
        width: '95%',
        height:'90%'
    }
})

export default AddReportScreen;