import React, {useContext, useState} from "react";
import { 
    StyleSheet, 
    Text, 
    View ,
    Image,
    TextInput,
    SafeAreaView,
    Platform,
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import { AuthContext } from "../context/AuthContext";

export default function Header(){

    const {userInfo} =useContext(AuthContext);

  
    function currencyFormat() {
        return 'P' + parseFloat(userInfo.user['current_amount']).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
     }
 
return(

         <View style={styles.headerBorder}>
                <View >
                    <Text style={styles.balance}>Balance: {currencyFormat()}</Text>
                  
                 </View>
                 <View >
                    <Image  style={styles.logo} source={require('../assets/dashmenu2.png')} />
                 </View>
                 
         </View>
       


)




}
const styles=StyleSheet.create({
    headerBorder:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        backgroundColor:'#535753',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'#474747',
        borderRadius:30,
        justifyContent:'space-between'
    },
    logo:{
        width:100,
        right:20,
        justifyContent:'center',
        resizeMode: 'contain',                 
    },
    balance:{
      fontSize:15,
      left:10,

    }







})