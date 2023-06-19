import * as React from 'react';
import MapView, { Circle } from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import MapMarker from "./MapMarker";
import axios from 'axios';
import { myUrl } from '../helpers/urlHelper';
import { AuthContext } from '../context/AuthContext';

export default function Map({navigation}) {
    const [pin, setPin] = useState(
       { 
        latitude: 43.14060358261857,
        longitude: 20.51722517246595
      }
    );
    const [items, setItems] = useState([]);
    useEffect(() => {
      callApi();
  },
  []);

  const {userToken} = useContext(AuthContext);

  const axiosInstance = axios.create({
      baseURL: myUrl,
      headers: {
        Authorization: 'Bearer ' + userToken
      },
    });

  const callApi = () =>{
    axiosInstance.get('/reports')
      .then(function (response) {
          let reports = response.data;
          setItems(reports);
          // alert("Izvestaji uspesno pokupljeni sa API-ja.");
      })
      .catch(function (error) {
          alert(error);
      });
  };

  const markers = items.map((item)=><MapMarker pin={{latitude: item.latitude, longitude: item.longitude}} report={item} rep={item}/>);
  return (
    <View style={styles.container}>
      <MapView style={styles.map}  
      initialRegion={{
      latitude: 43.14060358261857,
      longitude: 20.51722517246595,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
       provider="google">
         {/* <MapMarker pin={pin}/> */}
        {markers}
         {/* <MapMarker pin={{ 
        latitude:items[0].latitude,
        longitude: items[0].longitude
        }}/> */}
        {/* <Circle center={pin} radius={1000}>
        </Circle> */}
    </MapView>
    </View>
  );

  function foobar() {
    let user = {
      firstName: "Kemal",
      lastName: "Sokolovic"
    };
    let {firstName, lastName} = user;
    let user2 = {...user, lastName: "Something"};
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});