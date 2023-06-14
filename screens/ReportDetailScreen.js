import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AppButton from '../components/AppButton';
import axios from 'axios';
import { myUrl } from '../helpers/urlHelper';

function ReportDetailScreen({route}) {

    const { report } = route.params
    const [disabled, setDisabled] = useState(report.isFinished);


    const updateReport = (desc, title, addr, isFinished) => {
        const data = {
            description: desc,
            title: title,
            address: addr,
            isFinished: isFinished
        };

        axios.put(myUrl + '/reports/' + report.id, data)
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
            <Image style={styles.img} source={require("../assets/background.png")}/>
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{report.title}</Text>
                <Text style={styles.opis}>{report.description}
                </Text>
                <Text style={styles.address}>{report.address}</Text>
                <AppButton disabled={disabled}
                title={"Kliknite ukoliko ste uklonili deponiju"} onPress={() =>
                    {
                        updateReport(report.description, report.title, report.address, true)}
                    }/>  
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

export default ReportDetailScreen;