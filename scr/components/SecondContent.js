import React, {useContext, useEffect} from "react";
import { 
    StyleSheet, 
    View,
    Text,
    ScrollView
} from 'react-native';
import { AuthContext } from "../context/AuthContext";

export default function SecondContent(){
    const { eventHistory,viewEventHistory} =useContext(AuthContext);

    useEffect(() => {
        viewEventHistory();
      }, []);

   
//ready for most picked by socket
    let mostpick = [];
    for( let i=10; i <=20 ; i++){
        
        mostpick.push(

              <View style={styles.circle}  key = {i}>
              <Text style={{fontSize:25}}>{i}</Text>
              </View>

		)
    }

    return(

        
            <View style={styles.container}>
                        
                            <View style={styles.ballDisplay} >

                                <Text style={{fontSize:15}} > MOST DRAW</Text>
                                <ScrollView horizontal={true}>
                                        {mostpick}
                                </ScrollView>

                            </View>
                            <View style={styles.playground}>
                                <ScrollView  >
                                        {eventHistory && eventHistory['data']&& eventHistory['data']!='null' && ( 
                                                    eventHistory['data'].map((event) => {
                                        return(
                                                <View style={styles.item} key={event.id}>
                                                    
                                                    <View style={{width:'20%'}}>
                                                    <Text style={{width:150}} >LOGO</Text>
                                                    </View>
                                                    <View style={{width:'20%'}}>
                                                    <Text style={{width:150}} >{event.added_prize}</Text>
                                                    </View>

                                                    <View style={{width:'60%',flexDirection:'row',  flexWrap: 'wrap'}}>
                                                    {JSON.parse(event.draw_results).map(element => {
                                                        return  ( 
                                                        <View style={[styles.circledraw,  { backgroundColor: '#fff' }]} key={element}  >
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
    circle:{
        marginLeft:5,
        width:40,
        height:40, 
        borderRadius:35,
        backgroundColor:'#62e625',
        justifyContent: 'center',
        alignItems:'center',
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
      circledraw:{
       
        width:32,
        height:32, 
        borderRadius:35,
        backgroundColor:'#fff',
        justifyContent: 'center',
        alignItems:'center',
        borderColor:'green',
        borderWidth:1
    },




})