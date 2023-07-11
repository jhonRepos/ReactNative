import React, {createContext, useState} from "react";
import axios from "axios";
import { BASE_URL } from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider=({children})=>{
    const [userInfo,setUserInfo]= useState({});
    const [islogin,setIsLoging]= useState(false);
    const [viewHistoryVal,setViewHistoryVal]= useState({});
    const [eventOpen,setEventOpen]= useState([]);
    const [eventHistory,setEventHistory]= useState([]);

    const login = async (number, password) =>{
  
        // setIsLoging(false);
        axios
        .post(`${BASE_URL}/login`,{
            number,password
        })
        .then(res =>{
            setUserInfo(res.data);
         
             res.data['user']!='no'? AsyncStorage.setItem('userInfo',JSON.stringify(userInfo)) :setUserInfo({});

            // setIsLoging(true);
        })
        .catch(e =>{
            console.log(`login error ${e}`);
            // setIsLoging(false);
        })


    }

    const registerapi = (textInputValues) =>{
        
 
       let number=textInputValues.number;
       let password=textInputValues.password;
       let confirmPass=textInputValues.confirmPass;
       let firstName=textInputValues.firstName;
       let middleName=textInputValues.middleName;
       let lastName=textInputValues.lastName;
    //    let bDay=textInputValues.birthDate;
    //    let email=textInputValues.email;
       let agentNum=textInputValues.agentNum;

   
        axios
        .post(`${BASE_URL}/register`,{number,password,confirmPass,firstName,middleName,lastName,agentNum})
        .then(res =>{
            // console.log(res.data);
        })
        .catch(e =>{
            console.log(`login error ${e}`);
        
        })


    }

    const viewHistory = async (id) =>{
        
         axios
         .post(`${BASE_URL}/accounthistory`,{id})
         .then(res =>{
            setViewHistoryVal(res.data);

         })
         .catch(e =>{
             console.log(`login error ${e}`);
         
         })
 
 
     }


    // view event

    const viewEvent = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/opendevent`);
          const data = response.data;
          setEventOpen(data);
        } catch (error) {
          console.log(`login error ${error}`);
        }
      };
//view event history

      const viewEventHistory = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/eventdrawhistoy`);
          const data = response.data;
          setEventHistory(data);
        } catch (error) {
          console.log(`login error ${error}`);
        }
      };

    const logout =()=>{
        
     AsyncStorage.removeItem('userInfo');
     setUserInfo({});
     console.log('logout');
    }


  return( 
        <AuthContext.Provider value={{
            islogin,userInfo,viewHistoryVal,eventOpen,eventHistory,
            registerapi,login,logout,viewHistory,viewEvent,viewEventHistory
        }}>{children}</AuthContext.Provider>
  );
}
