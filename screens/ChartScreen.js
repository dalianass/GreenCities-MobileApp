import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Dimensions, ImageBackground } from 'react-native';
import axios from 'axios';
import { myUrl } from '../helpers/urlHelper';
import Chart from "../components/Chart";

export default function ChartScreen() {
    const [ukupnoIzvestaja, setUkupnoIzvestaja] = useState(0);
    const [ukupnoResenihIzvestaja, setUkupnoResenihIzvestaja] = useState(0);

    useEffect(() => {
        nadjiUkupanBrojIzvestaja();
        nadjiBrojZavrsenihIzvestaja();
    },
    [ukupnoIzvestaja, ukupnoResenihIzvestaja]);

    const nadjiUkupanBrojIzvestaja = () =>{
        axios.get(myUrl + '/reports')
        .then(function (response) {
            let reports = response.data;
            setUkupnoIzvestaja(reports.length);
            console.log("izvestaja" + ukupnoIzvestaja);
        })
        .catch(function (error) {
            alert(error);
            
        });
    }

    const nadjiBrojZavrsenihIzvestaja = () =>{
        axios.get(myUrl + '/reports/broj-resenih')
        .then(function (response) {
            setUkupnoResenihIzvestaja(response.data);
            console.log("zavrsneih" + ukupnoResenihIzvestaja)

        })
        .catch(function (error) {
            alert(error);
            
        });
    }

    const data = [
        {
          name: "Deponija",
          population: ukupnoIzvestaja,
          color: "#555755",
          legendFontColor: "#045346",
          legendFontSize: 15
        },
        {
          name: "Uklonjeno",
          population: ukupnoResenihIzvestaja,
          color: "#589e6d",
          legendFontColor: "#045346",
          legendFontSize: 15
        }
      ];

  return (
<View style={styles.container}>
    <ImageBackground style={styles.backgroundImg} source={require("../assets/chart-poz.png")}>
        <Text style={styles.title}>Statistika o broju resenih deponija:</Text>
        <Chart data={data}/>
    </ImageBackground>
</View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        paddingVertical: 20
    },
    backgroundImg: {
        flex: 1,
        width:'100%',
        height:'100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize:24,
        fontWeight: 'bold',
        marginVertical: 30,
        color: '#045346'
    },
    textSmall: {
        marginVertical:100,
        fontSize: 15,
        color: '#eee',
        marginHorizontal: 40
    },
});
