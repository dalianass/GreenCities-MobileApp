import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// function ReportDetailScreen({report}) {
    function ReportDetailScreen() {

    // return (
    //     <View style={styles.container}>
    //         <Image style={styles.img} source={require("../assets/background.png")}/>
    //         <View style={styles.detailsContainer}>
    //             <Text style={styles.title}>{report.title}</Text>
    //             <Text style={styles.opis}>{report.description}
    //             </Text>
    //             <Text style={styles.address}>{report.address}</Text>
    //         </View>
    //     </View>
    // );
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require("../assets/background.png")}/>
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>dsfda</Text>
                <Text style={styles.opis}>kjncsajkz
                </Text>
                <Text style={styles.address}>kjnsj</Text>
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