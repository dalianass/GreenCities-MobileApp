import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AppButton from '../components/AppButton';
import axios from 'axios';
import { myUrl } from '../helpers/urlHelper';
import { AuthContext } from '../context/AuthContext';

function ReportDetailScreen({route}) {

    const { report } = route.params;
    const [disabled, setDisabled] = useState(report.isFinished);

    const {userToken} = useContext(AuthContext);
    const {userInfo} = useContext(AuthContext);

    const axiosInstance = axios.create({
        baseURL: myUrl,
        headers: {
          Authorization: 'Bearer ' + userToken
        },
      });

    const updateReport = (desc, title, addr, isFinished) => {
        const data = {
            description: desc,
            title: title,
            address: addr,
            isFinished: isFinished
        };

        axiosInstance.put('/reports/' + report.id, data)
        .then(function (response) {
            if(response.status == 200) {
                alert("Uspesno azurirana prijava!");
                setDisabled(true);
            }
        })
        .catch(function (error) {
            const errorResponse = error.response;
            alert(errorResponse.data.errors[0].message);
        });
    }

    return (
        <View style={styles.container}>
            <Image style={styles.img} source={{uri: report.photo !="" ? report.photo : "http://res.cloudinary.com/daq9ulbte/image/upload/v1686839885/db482cc7-d9f0-433c-b478-0d37f26264d6.png"}}/>
            

            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{report.title}</Text>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    <Text style={styles.komentar}>Komentar: </Text>
                    <Text style={styles.opis}>{report.description}</Text>
                </View>
                <Text style={styles.komentar}>Adresa na kojoj se nalazi deponija:</Text>

                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    <Image source={require("../assets/ikonice/pin.png")}  style={styles.ikonica}/>
                    <Text style={styles.address}>{report.address}</Text>
                </View>

                {report.isFinished 
                ? 
                <View style={styles.wrap}>
                    <Image source={require("../assets/ikonice/verified.png")} style={styles.ikonica}/>
                    <Text style={styles.approved}>Ova deponija je uklonjena!</Text>
                </View> 
                :
                <View>
                    <View style={styles.wrap}>
                        <Image source={require("../assets/ikonice/cancel.png")} style={styles.ikonica}/>
                        <Text style={styles.approved}>Ova deponija nije uklonjena!</Text>
                    </View>
                    {userInfo.user.role[0].roleName === 'editor'
                    ?
                    <AppButton
                    title={"Kliknite ukoliko ste uklonili deponiju"} onPress={() =>
                        {
                            updateReport(report.description, report.title, report.address, true)}
                        }/> 
                    :
                    null} 
                </View> 
                }

            </View>
               

        </View>
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
        resizeMode: 'contain'
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
        fontSize:14,
        color: '#2dcafe',
        marginVertical: 7
    },
    opis: {
        fontSize:16,
        marginBottom: 7
    },
    ikonica: {
        width: 20,
        height:20,
        marginRight: 5,
        marginVertical:7
    },
    komentar: {
        fontSize:16,
        marginBottom: 7,
        color: 'gray'
    },
    wrap: {
        flexDirection: 'row'
    },
    approved: {
        color: '#c0c0c0',
        marginVertical:7
    }
})

export default ReportDetailScreen;