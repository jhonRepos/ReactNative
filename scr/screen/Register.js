import React, {useContext, useState} from "react";
import { 
    StyleSheet, 
    Text, 
    View ,
    FlatList,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
    StatusBar,
    Platform,
    ImageBackground,
} from 'react-native';
import { AuthContext } from "../context/AuthContext";



export default function Register({navigation}) {

    const [textInputValues, setTextInputValues] = useState({});
    const {registerapi} =useContext(AuthContext);

    const data = [
        { key: '1', placeholder: 'Number' ,name:"number" },
        { key: '2', placeholder: 'Password' ,name:"password" },
        { key: '3', placeholder: 'Confirm Password' ,name:"confirmPass" },
        { key: '4', placeholder: 'First Name' ,name:"firstName" },
        { key: '5', placeholder: 'Middle Name' ,name:"middleName" },
        { key: '6', placeholder: 'Last Name' ,name:"lastName" },
        { key: '7', placeholder: 'Birth Date' ,name:"birthDate" },
        { key: '8', placeholder: 'Email' ,name:"email"},
        { key: '9', placeholder: 'Agent Number' ,name:"agentNum"},
      ];
      

const renderItem=({ item }) => (
    <View>

        <Text style={styles.textLabel}>{item.placeholder}</Text>
        <TextInput
        style={styles.textInput}
        placeholder={item.placeholder}
        onChangeText={(text) => onChangeText(item.name, text)}
        value={textInputValues[item.key]}
        />
     </View>
    )
   
    
      
    const onChangeText = (key, value) => {
        setTextInputValues({ ...textInputValues, [key]: value });
    };
    const confirm=()=>{
        registerapi(textInputValues)
        
    }

    return (
        <SafeAreaView style={styles.container}>
              <ImageBackground source={require('../assets/walldark.png')} resizeMode="cover" style={styles.image}>

             
            <View  >
               
                <Text style={styles.registerText} >Sign in</Text> 
            </View>
            <View style={styles.inputForm} >
     
                <FlatList style={styles.flatList}
                    data={data}
                    renderItem={renderItem}
                   
                />

              </View>
              <View style={styles.btndis} >
                        <TouchableOpacity style={styles.loginbtn} onPress={confirm}>
                                <Text>REGISTER</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.btnback} onPress={()=> navigation.navigate('Login')}>
                                <Text>BACK</Text>
                      </TouchableOpacity>
              </View>
           
              </ImageBackground>
        </SafeAreaView>
    );
  }

  const styles=StyleSheet.create({
    container:{
        flex:1,      
        paddingTop:Platform.OS==='android'?StatusBar.currentHeight:0,
       
    },
    image: {
        flex: 1,
        width:'100%',
        justifyContent: 'center',
        alignItems:'center',
    },
    registerText:{
        fontSize:20,
        marginBottom:5,
        color:'green',
    },
    textLabel:{
      color:'white',
      fontSize:15,
    },
    textInput: {
        backgroundColor:'white',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius:30,
        borderColor:'green',
        borderWidth:2,
        marginTop:10,
        paddingHorizontal: 15,
      },

    inputForm:{
        flex:3.5,
        width:'90%',
        backgroundColor:'#393a3b',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
        elevation:5,
    },
    btndis:{
        flex:1,
        
    },
    flatList:{
        flex:1,
        width:'90%',
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
        marginTop:5,
    }


  })

  

  