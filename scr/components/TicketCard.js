import React, { useState,useEffect} from "react";
import { View, Text,StyleSheet,Image ,TouchableOpacity,Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';


export default function TicketCard(props) {
    const numbers = [...Array(props.data['digit'])].map((_, i) => i + 1);
    const [selectedNumbers, setSelectedNumbers] = useState([]);
    const [checked, setChecked] = useState('1-6');
    const [price, setPrice] = useState(20);



    const handleNumberPress = (number) => {
        setSelectedNumbers((prevSelectedNumbers) => {
          if (prevSelectedNumbers.includes(number)) {
             
           
            return prevSelectedNumbers.filter((selectedNumber) => selectedNumber !== number);

          }
          return [...prevSelectedNumbers, number].slice(0,checked.split('-')[1]);
        });

       
      };



      const handleGenerateRandomNumbers = () => {
        const quickSelect = [];

        while (quickSelect.length < checked.split('-')[1]) {
          const randomNumber = Math.floor(Math.random() * 55) + 1;
          if (!quickSelect.includes(randomNumber)) {
            quickSelect.push(randomNumber);
          }
        }
        setSelectedNumbers(quickSelect);
      };

      const resetarrayval =()=>{
        setSelectedNumbers([]);
      }

      let systemchoose = [];
      for( let i=7; i <=12 ; i++){
          
        systemchoose.push(
  
            <View style={{flexDirection:'row', justifyContent:"space-evenly",width:40}}>
            <RadioButton.Item  value={i} /><Text style={{left:-20}}>{i}</Text>
            </View>
  
      )
      }

      const allData={
        id: props.data['ticketCount'] +1,
        ticketValue: selectedNumbers,
        checked: checked,
        price:price,
      }
    return (
        <View style={styles.container}>
           { props.onReceiveData(allData)}
          <View style={styles.ticketHeader}>
            <Text>SYS</Text>
              <RadioButton.Group   onValueChange={newValue => {setChecked(newValue);setPrice(newValue.split('-')[0] * props.data['price'] )}} value={checked}>

                <View style={styles.radioButtonDis}>
                <View style={{flexDirection:'row', justifyContent:"space-evenly",width:40}}>
                    <RadioButton.Item  value="1-6"  /><Text style={{left:-20}}>R</Text>
                  </View>
                  <View style={{flexDirection:'row', justifyContent:"space-evenly",width:40}}>
                    <RadioButton.Item  value="53-5"  /><Text style={{left:-20}}>5</Text>
                  </View>
                  <View style={{flexDirection:'row', justifyContent:"space-evenly",width:40}}>
                  <RadioButton.Item  value="7-7" /><Text style={{left:-20}}>7</Text>
                  </View>
                  <View style={{flexDirection:'row', justifyContent:"space-evenly",width:40}}>
                  <RadioButton.Item  value="28-8" /><Text style={{left:-20}}>8</Text>
                  </View>
                  <View style={{flexDirection:'row', justifyContent:"space-evenly",width:40}}>
                  <RadioButton.Item  value="84-9" /><Text style={{left:-20}}>9</Text>
                  </View>
                  <View style={{flexDirection:'row', justifyContent:"space-evenly",width:40}}>
                  <RadioButton.Item  value="210-10" /><Text style={{left:-20}}>10</Text>
                  </View>
                  <View style={{flexDirection:'row', justifyContent:"space-evenly",width:40}}>
                  <RadioButton.Item  value="462-11" /><Text style={{left:-20}}>11</Text>
                  </View>
                  <View style={{flexDirection:'row', justifyContent:"space-evenly",width:40}}>
                  <RadioButton.Item  value="924-12" /><Text style={{left:-20}}>12</Text>
                  </View>
                </View>

              </RadioButton.Group>
          </View>
          <View style={styles.cardTicket}>
            <View style={styles.firstSide}>
                    <TouchableOpacity onPress={handleGenerateRandomNumbers}>
                        <Image source={require('../assets/shuffle.png')}
                        resizeMode='contain' 
                            style={{width:25,height:25}}/>
                    </TouchableOpacity>
                   
                    <Text  style={{ fontSize: 30 }}>{props.data['ticketCount'] +1}</Text>
                    <TouchableOpacity onPress={resetarrayval}>
                        <Image source={require('../assets/trash.png')}
                       resizeMode='contain' 
                        style={{width:25,height:25}}/>
                    </TouchableOpacity>
 
              </View>
              
              <View style={styles.secondSide}>
                
                    {/* {ballcount} */}
                    {numbers.map((number) => (                    
                            <TouchableOpacity 
                            key={number} 
                            style={[
                                styles.circle,
                                { backgroundColor: selectedNumbers.includes(number) ? '#8df0a8' : '#fff' }
                            ]}
                            onPress={() => handleNumberPress(number)}
                            >
                                 <Text style={styles.number}>{number}</Text>
                            
                            </TouchableOpacity>
                          
                        ))}


             </View> 

          </View>
         
          
                             
        </View> 

      

    );
}
const styles=StyleSheet.create({
  container:{
      paddingTop:5,  
      alignItems:'center',
     
    },
    ticketHeader:{
      backgroundColor:'#fff' ,
      width:390,
      height:40, 
      flexDirection:'row',
      borderColor:'#8a948c',
      borderWidth:1,
    },

    radioButtonDis:{ 
     
      flexDirection: 'row',
      justifyContent:"space-evenly",
    },
    cardTicket:{    
        backgroundColor:'#fff' ,
        flexDirection:'row',
        marginBottom:10,
        height:200, 
        width:390,
        borderRadius:30,
        elevation:1,
   
    },
    firstSide:{
        backgroundColor:'#ebedeb' ,
        alignItems:'center',
        flex:0.3,
        justifyContent:"space-evenly",
        borderBottomLeftRadius:30,
        borderTopLeftRadius:30,
        borderColor:'#8a948c',
        borderWidth:1,
    },
    secondSide:{
        flex:3,
        alignItems:'center',
        justifyContent:"center",
        flexWrap: 'wrap',
    },
    circle:{
        height:30, 
        width:30,
        margin: 1,
        borderRadius:35,
        borderColor:'#8a948c',
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'skyblue',
    },


    number: {
        fontSize: 20,
        fontWeight: 'bold',
      },


})