import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image, Text, ImageBackground} from 'react-native';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import axios from 'axios';
import { myUrl } from '../helpers/urlHelper';

function LoginScreen({navigation}) {
    // function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [formData, setFormData] = useState({
        isValidUser: true,
        isValidPassword: true
    });

    // useEffect(() => {
    //     callApi();
    // },
    // []);

    //**********************************************************

    const callApi = (email, pass) =>{
        if(email.length && pass.length > 6) {
            const data = {
                email: email,
                userPassword: pass
            };

            axios.post(myUrl + '/authenticate', data)
                .then(function (response) {
                    if (response.status == 200) {
                        alert("Uspesno ste se ulogovali!");
                        return true;
                    }
                })
                .catch(function (error) {
                    const errorResponse = error.response;

                    // alert(errorResponse.data.errors[0].message);
                    // alert(JSON.stringify(errorResponse));
                    alert("Greska pri pokusaju logovanja.");
                    return false;
                });

        }
        else {
            alert("Niste ispravno uneli email i lozinku.");
            return true;
        }
    }
    //**********************************************************





    // var errorResponse='';
    //
    // const callApi = () =>{
    //     axios.post(api + '/authenticate')
    //     .then(function (response) {
    //         let reports = response.data;
    //         alert("RADI login");
    //     })
    //     .catch(function (error) {
    //         errorResponse = error.response.errors[0].message;
    //         alert(errorResponse.data.errors[0].message);
    //     });
    // }

    const handleValidUser = (val) => {
        if(val.trim().length >=4) {
            setFormData({...formData, isValidUser: true});
        } else {
            setFormData({...formData, isValidUser: false})
        }
    }

    const handleValidPassword = (val) => {
        if(val.trim().length >=8) {
            setFormData({...formData, isValidPassword: true});
        } else {
            setFormData({...formData, isValidPassword: false})
        }
    }

    return (
            <View style={styles.container}>
                <ImageBackground style={styles.backgroundImg} source={require("../assets/2.png")}>
                    <Image style={styles.logo} source={require("../assets/logo.png")}/>
                    <Text style={styles.title}> Ulogujte se:</Text>

                    <AppTextInput placeholder="Email" icon="email"
                    onChangeText={text => {setEmail(text); handleValidUser(text)}}
                    keyboardType="email-address" autoCorrect={false} 
                    />
                    {formData.isValidUser ? null :
                    <Text style={styles.errorMsg}>Email ne sme biti kraci od 4 cifre.</Text> 
                    }
    
                    <AppTextInput placeholder="Password" icon="lock"
                    onChangeText={text => {setPassword(text); handleValidPassword(text)}}
                    secureTextEntry autoCorrect={false}
                    />
                    {formData.isValidPassword ? null :
                    <Text style={styles.errorMsg}>Password mora sadrzati najmanje 8 karaktera!</Text>
                    }     

                    <AppButton title="Login" onPress={() =>  {
                                callApi(email, password) ? navigation.navigate("Default") : null
                            }}
                    />
                </ImageBackground>
            </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        width: '100%',
        alignItems: 'center',
    },
    backgroundImg: {
        flex: 1,
        width:'100%',
        height:'100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    logo: {
        width:120,
        height: 120,
        alignSelf: 'center',
        marginTop:50,
        marginBottom:30,
        resizeMode: 'contain'
    },
    title: {
        fontSize:24,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#045346'
    },
    errorMsg: {
        color: 'red',
        // backgroundColor: '#f78a8a',
        paddingHorizontal: 15
    }
})
export default LoginScreen;