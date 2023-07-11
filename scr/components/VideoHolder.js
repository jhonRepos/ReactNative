import React, {useContext, useState} from "react";
import { 
    StyleSheet, 
    View,
    Text

} from 'react-native';


export default function VideoHolder(){

return(

         <View style={styles.headerBorder}>
                
                 <Text>VIDEO HEREs....</Text>
         </View>
       


)




}
const styles=StyleSheet.create({
    headerBorder:{
        flex:1,
       
       backgroundColor:'#8d8f8d',
       justifyContent: 'center',
       alignItems:'center',
    },
  







})