import React, {createContext, useState, useEffect} from "react";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { myUrl } from '../helpers/urlHelper';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    // const login = () => {
    //     setIsLoading(false);
    //     setUserToken("ovo je neki random user token");
    //     AsyncStorage.setItem('userToken', 'ovo je neki random user token');
    //     setIsLoading(false);
    // }

    const login = (email, pass) =>{
        setIsLoading(true)
        if(email.length && pass.length > 6) {
            const data = {
                email: email,
                userPassword: pass
            };

            axios.post(myUrl + '/authenticate', data)
                .then(function (response) {
                    if (response.status == 200) {
                        alert("Uspesno ste se ulogovali!");
                        setUserInfo(response.data);
                        setUserToken(response.data.jwtToken);

                        // AsyncStorage.setItem('userToken', "dbfjsbdfdh");
                        AsyncStorage.setItem('userToken', userToken);
                        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));

                        console.log(response.data.jwtToken);
                        return true;
                    }
                })
                .catch(function (error) {
                    const errorResponse = error.response;
                    alert("Greska pri pokusaju logovanja. Proverite podatke ponovo.");
                    return false;
                });
                setIsLoading(false);

        }
        else {
            alert("Niste ispravno uneli email i lozinku.");
            setIsLoading(false);

            return false;
        }
    }




    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userToken');
        AsyncStorage.removeItem('userInfo');
        setIsLoading(false);
    }

    const isLoggedIn = async() => {
        try {
            setIsLoading(true);
            let userToken = await AsyncStorage.getItem('userToken');
            let userInfo = await AsyncStorage.getItem('userInfo');
            userInfo = JSON.parse(userInfo);

            if(userInfo) {
                setUserToken(userToken);
                setUserInfo(userInfo);

            }
            setIsLoading(false);
        } catch (error) {
            console.log(`isLoggedIn error ${error}`);
        }
    }

    // useEffect(() => {
    //     isLoggedIn();
    // }, []); 

    return (
        <AuthContext.Provider value={{login, logout, isLoading, userToken, userInfo}}>
        {children}
        </AuthContext.Provider>

    )
}