import React, {useContext, useState,useEffect} from "react";
import { 
    StyleSheet, 
    Text, 
    View ,
    TouchableOpacity,
    SafeAreaView,
    Platform,
    StatusBar,
    ImageBackground,
    ScrollView,
    Image,
    Picker,
} from 'react-native';

import { AuthContext } from "../context/AuthContext";

export default function EventPicker({navigation}) {

    const {eventOpen ,viewEvent} =useContext(AuthContext);
   
    useEffect(() => {
         viewEvent();

    }, []);


    return (
        <ScrollView >
            <View style={styles.container}>
                 
                <Text style={{ fontSize: 20 }} >TODAY's GAMES</Text>

                         {eventOpen && eventOpen['data'] && (
                         
                                    eventOpen['data'].map((event,index) => {
                                        var base64Icon = 'data:image/png;base64,'+event.banner;
                                        return (

                                            <View style={styles.cardTicket} key={index}>
                                            <View style={{ flex:1,alignItems:'center'}}>
                                              
                                              <Image style={{width: '45%', height:'100%' ,top:5,}} source={{uri:base64Icon}}/>
                                            </View>

                                            <View style={{flex:0.5,alignItems:'center'}}>
                                                <Text>{event.draw_date} </Text>
                                                <Text>{event.description} {event.title}</Text>
                                            </View>
                                            
                                            <View style={{flex:0.5,alignItems:'center'}}>
                                            <TouchableOpacity
                                                    activeOpacity={0.8}
                                                    onPress={() => navigation.navigate('PurchaseTicket',{
                                                        title: event.title, 
                                                        drawCount:event.draw_count, 
                                                        numbers:event.numbers, 
                                                        ticketPrice:event.ticket_price, 
                                                    })}
                                                    style={styles.appButtonContainer}
                                                >
                                                    <Text style={styles.appButtonText}>Play here..</Text>
                                                </TouchableOpacity>
                                            </View>
                    
                                        </View>
                    
                    
                    
                                     
                                        );
                                    })
                                    )
                                }


                   

            </View>
        </ScrollView>
    );


  }


  const styles=StyleSheet.create({
    container:{
      
        paddingTop:Platform.OS==='android'?StatusBar.currentHeight:0, 
       alignItems:'center',
    },
    cardTicket:{  
        marginTop:10,  
        backgroundColor:'#fff' ,
        height:190, 
        width:'90%',
        borderRadius:15,
        elevation:1,
       
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
      },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }

  })