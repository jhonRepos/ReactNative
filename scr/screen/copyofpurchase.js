import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Button,
  StatusBar,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import TicketCard from "../screen/copyofticketcard";

export default function PurchaseTicket({ navigation, route }) {
  const [count, setCount] = useState(0);
  const [tickets, setTickets] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
    tickets.forEach((ticket) => console.log(ticket["allData"] ));
  };

  const addNewTicket = () => {

    setCount(0);
  };


  const decrease  = ()=>{
    count > 0 && setCount(count - 1) 
    setTickets(tickets.slice(0, -1));
   
  }
  const increase =() =>{
    const increase =() =>{
      if( count <3 ){
        setCount(count + 1)
        const newTicket = {
          id: count+ 1,
          data: {
            ticketCount: count,
            digit: parseInt(route.params.numbers),
            price: parseInt(route.params.ticketPrice),
          },
          allData: {},
        };
        setTickets((prevTickets) => [...prevTickets, newTicket]);
      }
    
    }
  
  }


  const updateTicket = (ticketId, newAllData) => {
    setTickets((prevTickets) =>
      prevTickets.map((ticket) =>
        ticket.id === ticketId ? { ...ticket, allData: newAllData } : ticket
      )
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.playground}>
        <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-evenly" }}>
          <Text style={{ fontSize: 20 }}>Number: {route.params?.numbers}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Button title="-" onPress={() => decrease()} />
            <Text style={{ fontSize: 30, marginHorizontal: 10 }}>{count}</Text>
            <Button title="+" onPress={() => increase()} />
          </View>
          <Text style={{ fontSize: 20 }}>Ticket Price: {route.params?.ticketPrice}</Text>
        </View>
        <ScrollView>
          {tickets.map((ticket,index) => (
            <TicketCard
              key={index}
              data={ticket.data}
              allData={ticket.allData}
              onReceiveData={(newAllData) => updateTicket(ticket.id, newAllData)}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.paymentDisplay}>
       
        <TouchableOpacity  onPress={toggleModal}  >
          <Image source={require("../assets/buy.png")} resizeMode="contain" style={{ width: 50, height: 50, tintColor: "green" }} />
        </TouchableOpacity>

          

      </View>
      <Modal visible={modalVisible} animationType="slide">
                <View>
                <Button title="Close" onPress={toggleModal} />
                  <View>
                    <Text style={{ fontSize: 15 }}>Ticket Amount: 20</Text>
                    <Text style={{ fontSize: 15 }}>Total: 20</Text>
                  </View> 
                  <View style={styles.table}>
                                   
                         <View style={styles.row}  >
                           <Text style={styles.cellheader}>NUMBER</Text>
                           <Text style={styles.cellheader}>VALUE</Text>  
                            <Text style={styles.cellheader}>PRICE</Text>
                         </View>
                          
                     
                     
                      
                  </View>
                  <View style={styles.table}>
                       {tickets.map((tickets,index) => (                    
                         <View style={styles.row}  key={index} >
                           <Text style={styles.cell}>{tickets.id}</Text>
                          
                           <ScrollView>
                              <View style={styles.cell}>{
                                  tickets && tickets.allData['ticketValue']&& tickets.allData['ticketValue']!='null' && ( 
                                    tickets.allData['ticketValue'].map((val,index) =>   ( 
                                      <View style={styles.circledraw}  key={index} >
                                      <Text style={{fontSize:20}}>{val}</Text>
                                      </View>
        
                                      ))
                                      
                                  )
                                }
                                </View>
                               
                           </ScrollView>   
                            <Text style={styles.cell}>{tickets.allData['price']}</Text>
                         </View>
                          
                        ))}
                     
                      
                    </View>
                    <View>
                    <Text style={{ fontSize: 15 }}>BUY </Text>
                    
                  </View> 

                </View>
          </Modal>
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
  borderTopWidth: 1,
  borderTopColor: 'black',
  width:'100%',
  alignItems:'center',
  justifyContent:"center",
  backgroundColor:'#d5dbd6',

},
table: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 5,
  overflow: 'hidden',
  marginVertical: 10,
},
row: {
  flexDirection: 'row',
},

cell: {
  flexDirection:'row',   
  
  padding: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#ccc',
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
cellheader:{
  flexDirection:'row',   
  padding: 10,
  
}

})