import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import axios from 'axios';
import Card from '../components/Card';
import { myUrl } from '../helpers/urlHelper';

function ReportsListScreen({navigation}) {
    const [items, setItems] = useState([]);
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        callApi();
    },
    [items]);

    const callApi = () =>{
        axios.get(myUrl + '/reports')
        .then(function (response) {
            let reports = response.data;
            setItems(reports);
            // setLoading(false);
        })
        .catch(function (error) {
            alert(error);
            
        });
    }

    const renderItem = ({item, index}) => {
        // console.log(item);
       return (
        <Card title={item.title}
        address={item.address}
        description = {item.description}
        photo={item.photo !="" ? item.photo : "http://res.cloudinary.com/daq9ulbte/image/upload/v1686839885/db482cc7-d9f0-433c-b478-0d37f26264d6.png"}
        onPress={() => navigation.navigate("ReportDetails", {report: item})}
        /> 
       )
   }
    return (
        <View style={styles.container}>
            {}
            <FlatList 
            showsVerticalScrollIndicator={false}
            data={items}
            style={styles.list}
            keyExtractor={(item, index) => item.id.toString()}
            renderItem={renderItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height:'100%',
        borderWidth: 3
    },
    list: {
        // width: '20%',
        // height: '40%'
    }
})
export default ReportsListScreen;