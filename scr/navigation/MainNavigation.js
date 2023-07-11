import * as React from 'react';
import {  Text,View ,Image ,TouchableOpacity} from 'react-native';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

// Screens
import DashboardScreen from '../screen/Dashboard';
import CashScreen from '../screen/Cash';
import HistoryScreen from '../screen/History';
import ProfileScreen from '../screen/Profile';
import EventPickerScreen from '../screen/EventPicker';
//import PurchaseTicketScreen from '../screen/PurchaseTicket';
import PurchaseTicketScreen from '../screen/copyofpurchase';

//Screen names

const homeName = "Home";
const cashName = "Cash";
const historyName = "History";
const profileName = "Profile";
const purchaseTicketName = "PurchaseTicket";
const eventpickername = "EventPicker";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const EventStack =()=>{
  return (
 
    
          <Stack.Navigator>
                <Stack.Screen name={eventpickername} component={EventPickerScreen}  options={{ headerShown: false }}    />
                <Stack.Screen name={purchaseTicketName} component={PurchaseTicketScreen} 
                options={({route}) =>({
                  title:route.params?.title
              })}/>
                
            
            
          </Stack.Navigator>
      
  );
}


function MainNavigation() {

const CustomTabBarbutton =({children,onPress}) =>(
  <TouchableOpacity style={{
    top:-5,
    justifyContent:'center',
    alignItems:'center',
  }} onPress={onPress}>
  <View style={{width:60,height:60, borderRadius:35 ,backgroundColor:'#e32f45'}}>
    {children}
   
  </View>

</TouchableOpacity>
)






  return (


      <Tab.Navigator
        initialRouteName={homeName}

        // tabBarOptions={{
        //   activeTintColor: 'tomato',
        //   inactiveTintColor: 'grey',
        //   labelStyle: { paddingBottom: 10, fontSize: 10 },
        //   showLabel:false,
        //   tabBarStyle: { padding: 10, height: 90}
        // }}
        screenOptions={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey',
          tabBarShowLabel: false,
          tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
          tabBarStyle: { padding: 10, height: 90 },
        }}
        >

    <Tab.Screen  name={cashName} component={CashScreen} 
        options={({route})=>({ 
        
          headerShown: false ,
          tabBarStyle:{display :getTabBarVisibility(route)},
          tabBarIcon:({focused}) =>(
            <View style={{alignItems:'center',justifyContent:'center'}}>
              <Image source={require('../assets/history.png')}
              resizeMode='contain' 
              style={{width:25,height:25, tintColor:focused ?'#e32f45':'#748c94'}}
              />
              <Text style={{color:focused ?'#e32f45':'#748c94',fontSize:12}}>
               Profile
              </Text>
            </View>
          )
        
        })}/>

     
          <Tab.Screen  name={historyName} component={HistoryScreen} 
        options={({route})=>({ 
          tabBarBadge:3,
          headerShown: false ,
          tabBarStyle:{display :getTabBarVisibility(route)},
          tabBarIcon:({focused}) =>(
            <View style={{alignItems:'center',justifyContent:'center'}}>
              <Image source={require('../assets/history.png')}
              resizeMode='contain' 
              style={{width:25,height:25, tintColor:focused ?'#e32f45':'#748c94'}}
              />
              <Text style={{color:focused ?'#e32f45':'#748c94',fontSize:12}}>
               Profile
              </Text>
            </View>
          )
        
        })}/>


<Tab.Screen name={homeName} component={DashboardScreen}  
        options={({route})=>({ 
          headerShown: false ,
          tabBarStyle:{display :getTabBarVisibility(route)},
          tabBarIcon:({focused}) =>(
                <Image source={require('../assets/play.png')}
                resizeMode='contain' 
                style={{width:25,height:25, tintColor:'#fff'}}
                />
               
               
            ),
           tabBarButton:(props) =>(
              <CustomTabBarbutton {...props} />
           
            )
        
        })}/>
        
  
        <Tab.Screen   name='Eventlist' component={EventStack}  
        options={({route})=>({ 
          headerShown: false ,
          tabBarStyle:{display :getTabBarVisibility(route)},
          tabBarIcon:({focused}) =>(
            <View style={{alignItems:'center',justifyContent:'center'}}>
              <Image source={require('../assets/history.png')}
              resizeMode='contain' 
              style={{width:25,height:25, tintColor:focused ?'#e32f45':'#748c94'}}
              />
              <Text style={{color:focused ?'#e32f45':'#748c94',fontSize:12}}>
                Buy ticket
              </Text>
            </View>
          )
        
        })}/>

      <Tab.Screen   name={profileName} component={ProfileScreen} 
        options={({route})=>({ 
          headerShown: false ,
          tabBarStyle:{display :getTabBarVisibility(route)},
          tabBarIcon:({focused}) =>(
            <View style={{alignItems:'center',justifyContent:'center'}}>
              <Image source={require('../assets/history.png')}
              resizeMode='contain' 
              style={{width:25,height:25, tintColor:focused ?'#e32f45':'#748c94'}}
              />
              <Text style={{color:focused ?'#e32f45':'#748c94',fontSize:12}}>
               Profile
              </Text>
            </View>
          )
        
        })}/>

      </Tab.Navigator>
      
   
  );
}
const getTabBarVisibility =(route) =>{
  const routeName= getFocusedRouteNameFromRoute(route) ??'feed';

    if(routeName=='PurchaseTicket'){
      return 'none';
    }else{
      return 'flex';
    }
}

export default MainNavigation;