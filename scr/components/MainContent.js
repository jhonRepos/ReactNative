import React, {useContext, useEffect} from "react";
import { 
    StyleSheet, 
    View,
    Text,
    RefreshControl,
    ScrollView
} from 'react-native';

import { AuthContext } from "../context/AuthContext";

export default function MainContent(){

    const {userInfo ,viewHistoryVal,viewHistory} =useContext(AuthContext);

    const [refreshing, setRefreshing] = React.useState(false);
    
    useEffect(() => {
      viewHistory(userInfo.user['users_id']);
    }, []);


    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
          setRefreshing(false);
          viewHistory(userInfo.user['users_id']);
        }, 500);
      }, []);


  
    //ready for drqaw for today by socket
    let ballcount = [];
    for( let i=1; i <=6 ; i++){
        
        ballcount.push(

              <View style={styles.circle}  key = {i}>
              <Text style={{fontSize:25}}>{i}</Text>
              </View>

		)
    }

   const selectedNumbers=['1','29'];

return(
    
         <View style={styles.container}>
                    
                        <View style={styles.ballDisplay} >

                               <Text style={{fontSize:15}} > TODAY'S DRAW</Text>
                                {ballcount}
                                {/* <>
                                <Text style={{fontSize:15}} > MOST PICKED</Text>
                                {mostpick}
                                </> */}
  
                        </View>
                        <View style={styles.playground}>
                        
                        <ScrollView   refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                                
                                  
                                {viewHistoryVal && viewHistoryVal['data']&& viewHistoryVal['data']!='null' && ( 
                                     viewHistoryVal['data'].map((personticket,index) => {
                            
                                    return (
                                    <View style={styles.item} key={index}>



                                        <View style={{width:'20%'}}>
                                        <Text style={{width:150}} >{personticket.banner}</Text>
                                        </View>

                                        <View style={{width:'20%'}}>
                                           <Text style={{width:150}} >{personticket.system}</Text>
                                        </View>

                                        <View style={{width:'60%',flexDirection:'row',  flexWrap: 'wrap'}}>
                                                {JSON.parse(personticket.ticket_value).map(element => {
                                            return  ( 
                                            <View style={[styles.circledraw,  { backgroundColor: selectedNumbers.includes(element) ? '#f2eb16' : '#fff' }]}  key={element} >
                                                <Text style={{fontSize:20}}>{element}</Text>
                                            </View>

                                            );
                                           
                                            })}
                                        </View>

                                    </View>
                                    );
                                }))}
                               
                            </ScrollView>
                                

                        </View>
         </View>
       


)




}
const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingTop:5,  
      },
    headerBorder:{
        flex:1,
       
       backgroundColor:'#8d8f8d',
       justifyContent: 'center',
       alignItems:'center',
    },
 
    ballDisplay:{
        flex:0.3,
        width:'100%',
        borderColor:'#b3b8b0',
        borderWidth:2,
        justifyContent: 'center',
        alignItems:'center',
        flexDirection:'row'
    },
    playground:{
        flex:2,
        width:'100%',
        alignItems:'center',
        justifyContent: 'center',
    },
    item: {
        flex:1,
        width:'100%',
        flexDirection:'row',
        padding: 5,
        borderColor:'white',
        borderWidth:1,
        marginTop: 5,
      
      },
      circle:{
        marginLeft:5,
        width:40,
        height:40, 
        borderRadius:35,
        backgroundColor:'#62e625',
        justifyContent: 'center',
        alignItems:'center',
    },
    circledraw:{
       
        width:32,
        height:32, 
        borderRadius:35,
        backgroundColor:'#fff',
        justifyContent: 'center',
        alignItems:'center',
        borderColor:'black',
        borderWidth:1
    },







})