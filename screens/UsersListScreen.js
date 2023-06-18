import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserCard from '../components/UserCard';
import { myUrl } from '../helpers/urlHelper';


function UsersListScreen({navigation}) {
    const [items, setItems] = useState([]);
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        callApi();
    },
    [items]);

    const callApi = () =>{
        axios.get(myUrl + '/users')
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
        <UserCard firstname={item.firstName}
        lastname={item.lastName}
        email = {item.email}
        role={item.role[0].roleName}
        photo={"http://res.cloudinary.com/daq9ulbte/image/upload/v1687096650/fd0c8b35-2083-485c-85ea-06a25737e678.png"}
        /> 
       )
   }


    return (
        <SafeAreaView style={styles.container}>
        {/* <View> */}
            {}
            <FlatList 
            showsVerticalScrollIndicator={false}
            data={items}
            style={styles.list}
            keyExtractor={(item, index) => item.id.toString()}
            renderItem={renderItem}
            />
        {/* </View> */}
        </SafeAreaView>
    );


}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height:'100%',
        borderWidth: 3,
    },
    list: {
        // width: '20%',
        // height: '40%'
    }
})
export default UsersListScreen;