import React, {useContext, useState} from "react";
import { View, Text ,TouchableOpacity} from 'react-native';
import { AuthContext } from "../context/AuthContext";

export default function Profile({ navigation }) {
    const {userInfo ,logout} =useContext(AuthContext);



    return (
        
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Profile Screen</Text>

            <Text >{userInfo.user['name']}</Text> 
            <   TouchableOpacity  onPress={()=>{logout()}}>
                            <Text >LOGOUT</Text>
                        </TouchableOpacity>
       
        </View>
    );
}