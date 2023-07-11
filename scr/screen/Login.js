import React, {useContext, useState} from "react";
import { 
    StyleSheet, 
    Text, 
    View ,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
    RefreshControl,
    ScrollView,
    Platform,
    StatusBar,
    Image,
    ImageBackground,
} from 'react-native';
import { AuthContext } from "../context/AuthContext";





export default function Login({navigation}) {

    const [refreshing, setRefreshing] = React.useState(false);


    const {islogin,login} = useContext(AuthContext);



    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 500);
    }, []);
    
    const [number, setNumber] =useState('');
    const [password, setPassword] =useState('');
    
    

    return (
        <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../assets/walldark.png')} resizeMode="cover" style={styles.image}>

                <ScrollView
                    contentContainerStyle={styles.container}
                    refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }>
                        <View style={styles.hero}>
                    <Text>{islogin}</Text>
                    <Image style={styles.logo} source={require('../assets/logo.png')} />
                        
                    </View>
                    <View style={styles.loginfrom} >
                        
                            <View style={styles.divborder} >
                            <Text style={styles.loginText}>LOGIN</Text>
                                <TextInput 
                                style={styles.inputView}
                                placeholder='Number'
                                keyboardType="numeric"
                                maxLength={11}
                                onChangeText={(number) => setNumber(number)}
                                />
                                
                                <TextInput 
                                style={styles.inputView}
                                placeholder='Password'
                                secureTextEntry={true}
                                onChangeText={(password) => setPassword(password)}
                                />
                            
                        
                            </View>
                            <View style={{flexDirection:"row"}}>
                                        <TouchableOpacity  style={styles.btnback}  onPress={() => navigation.navigate('Register')}>
                                
                                            <Text  >Sign in</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.loginbtn} onPress={() => {login(number,password);}}>
                                                    <Text>Login</Text>
                                        </TouchableOpacity>
                        
                            </View>
                            <View >
                    
                                    
                                    
                                
                            
                            </View>
                    
                    </View>
                    <View style={styles.footer}>
                        <Text>
                            Footer
                        </Text>
                    </View>
            </ScrollView>
             
              
            </ImageBackground>
        </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:Platform.OS==='android'?StatusBar.currentHeight:0,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
      },
    logo:{
       width:'90%',
       height:'60%',
       
    },
    loginText:{
        fontSize:30,
        color:'white',
        top:-10
    },
    hero:{
        flex:1,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
       
      
    },
   
    loginfrom:{
        flex:2,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',

    },
    divborder:{
        height:200,
        width:300,
        backgroundColor:'#393a3b',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
        elevation:5,
       
    },
    inputView:{
        width:'80%',
        height:40,
        backgroundColor:'white',
        marginTop:10,
        borderRadius:30,
        textAlign:'center',
        borderColor:'green',
        borderWidth:2
    },
    registerbtn:{
      fontSize:20,
      marginTop:30,
      color:'orange',
      
    },
    loginbtn:{
        bottom:-50,
        backgroundColor:'#38d647',
        borderColor:'#7af086',
        borderWidth:2,
        height:40,
        width:150,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        elevation:5,

    },
    btnback:{
        bottom:-50,
        backgroundColor:'#edae26',
        borderColor:'#f2ca74',
        borderWidth:2,
        height:40,
        width:150,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        elevation:5,
        
    },

    footer:{
        flex:1,
        width:'100%',
      
        
    },

  })

  