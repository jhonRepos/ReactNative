import React, {useContext, useState,useEffect} from "react";
import { 
    StyleSheet, 
    Text, 
    View ,
    TouchableOpacity,
    SafeAreaView,
    Platform,
    StatusBar,
    RefreshControl,
    ScrollView,
    Image,
    Picker,
} from 'react-native';
import { AuthContext } from "../context/AuthContext";

import Header from '../components/Header'
import VideoHolder from '../components/VideoHolder'
import MainContent from '../components/MainContent'
import SecondContent from '../components/SecondContent'

export default function Dashboard({GlobalState,navigation}) {

    const [screenContent,setScreenContent] =useState(<MainContent />);
    const [buttonFocus, setButtonFocus] = useState('MainContent');

    return (
        
        <SafeAreaView style={styles.container} >
            

                <View  style={styles.body}> 
                    <View  style={styles.header}>
                        <Header />
                    </View>
                    <View style={styles.videoDisplay}>
                        <VideoHolder />
                    </View>
                    <View style={styles.contentDisplay}>

                        <View style={styles.prizeHolder}>
                            <Text style={{fontSize:20}} >JACKTPOT PRICE 1,000,000.00 </Text>
                        </View>
                       
                        <View style={{flexDirection:'row',justifyContent:"space-evenly",height:30}}>
                            <TouchableOpacity 
                                style={{backgroundColor:buttonFocus=='MainContent'?'#81b88b':'#fff',flex:1,borderRadius:10,alignItems:'center',justifyContent:'center',elevation:3}} 
                                onPress={()=>{setScreenContent(<MainContent />); setButtonFocus('MainContent')}}>
                                    <Text>MainContent</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={{backgroundColor:buttonFocus=='SecondContent'?'#81b88b':'#fff',flex:1,borderRadius:10,alignItems:'center',justifyContent:'center',elevation:3}}
                                onPress={()=>{setScreenContent(<SecondContent />); setButtonFocus('SecondContent')}}>
                                    <Text>TREND/HISTORY DRAW</Text>
                            </TouchableOpacity>
                           
                        </View>
                       
                        {screenContent}
                    </View>
                    
                </View>
              
        
        </SafeAreaView>
    );
  }


  const styles=StyleSheet.create({
  
    
    container:{
        flex:1,
        paddingTop:Platform.OS==='android'?StatusBar.currentHeight:0, 
        backgroundColor:'#cccfca' , 
        
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
      },
    header:{
        
        width:'100%',
        height:'6%'
       
    },
    body:{
        flex:1,
        width:'100%',
    },
    videoDisplay:{
        flex:1,
        width:'100%',
     
    },
    contentDisplay:{
        flex:2.3,
        width:'100%',
        
    },
    prizeHolder:{
        flex:0.1,
        width:'100%',
        alignItems:'center',
        justifyContent: 'center',
    },

    logo:{
      width:50,
      height:30, 
      resizeMode: 'contain',                 
  },

  })

  

  