import React, {useContext, useState  } from "react";
import { View, 
  Text,
  ScrollView, 
  StyleSheet ,
  Button ,
  StatusBar,
  Image ,
  TouchableOpacity ,
} from 'react-native';

import TicketCard from '../components/TicketCard'



export default function PurchaseTicket({ navigation,route }) {

    const [count,setCount] =useState(0);
    const [ticket,setTicker]=useState([]);
    // const [ticketSelected, setTicketSelected] = useState([]);
    // const [systemTicket, setSystemTicket] = useState([]);
    // const [totalPrice, setTotalPrice] = useState([]);

    const [allData, setAllData] = useState([]);
 

  const receiveDataticket = (allDatachild) => {
    // setTicketSelected([...ticketSelected, selectedNumber]);
    // setSystemTicket([...systemTicket, systemPick]);
    // setTotalPrice([...totalPrice, price]);
    // setAllData([...allData, allDatachild]);
    const allDataCopy = [...allData];
    allDataCopy[allDatachild.id ] = allDatachild;
    setAllData(allDataCopy);
  };

 
   

    const ticketData={
      ticketCount:count,
      digit:parseInt(route.params.numbers),
      price:parseInt(route.params.ticketPrice) 
    };


//increment and decrement count of ticket
   
      const decrease  = ()=>{
        count > 0 && setCount(count - 1) 
        setTicker(ticket.slice(0, -1));
        // setTicketSelected(ticketSelected.slice(0, -1));
        // setSystemTicket(systemTicket.slice(0, -1));
        // setTotalPrice(totalPrice.slice(0, -1));
        setAllData(allData.slice(0, -1));
      }
      const increase =() =>{
        setCount(count + 1)
        setTicker([...ticket, <TicketCard 
          data={ticketData} 
          allData={allData} 
          onReceiveData={receiveDataticket}  
          key={count} />]);
      }



    return (
        <View style={styles.container}>
    
                    <View style={styles.playground}>
{/*               
                    <Text >{route.params?.title}</Text>  
                    <Text >{route.params?.drawCount}</Text>  */}
              

                                <View style={{ flexDirection: 'row' ,width:'100%',justifyContent:'space-evenly'}}>   
                                    <>
                                      <Text style={{ fontSize: 20 }}> Number: {route.params?.numbers}</Text>
                                    </>
                                    < >
                                      <Button title="-"    onPress={decrease}/>
                                      <Text style={{ fontSize: 30 }}>{count}</Text>
                                      <Button title="+" onPress={increase } />
                                    </>
                                    <>
                                      <Text style={{ fontSize: 20 }}>Ticket Price:{route.params?.ticketPrice}</Text>
                                    </>              
                                </View>
                                <ScrollView >
                                  {ticket}

                                </ScrollView>
                        </View>
                        <View style={[styles.paymentDisplay]}>
       
                          <View style={{paddingLeft:15}}>
                            <Text style={{fontSize:15}}>Ticket Amount: 20</Text>
                            <Text style={{fontSize:15}}>Ticket Amount: 20</Text>
                            {/* <Text style={{fontSize:15}}>Total Amount: {totalPrice.reduce((accumulator, currentValue) => accumulator + currentValue, 0)}</Text> */}
                          </View>

                            <TouchableOpacity style={{paddingRight:50}}
                            onPress={() => console.log(allData)}
                            >
                            <Image source={require('../assets/buy.png')}
                              resizeMode='contain' 
                              style={{width:50,height:50, tintColor:'green'}}/>
                            </TouchableOpacity>
                          

                    </View>

                       
        </View>
    );
}

const styles=StyleSheet.create({
container:{
    paddingTop:10,  
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' 
},
playground:{
    flex:1,
    width:'100%',
    alignItems:'center',
    justifyContent: 'center',
},
paymentDisplay:{
 // position: 'absolute',
 borderTopWidth: 1,
 borderTopColor: 'black',
    width:'100%',
    // bottom: 10,
    // left: 0,
  alignItems:'center',
  justifyContent:"space-between",
  flexDirection:'row',
  backgroundColor:'#d5dbd6',

}

})