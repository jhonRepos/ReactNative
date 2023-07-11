import React, {useContext} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';



import Login from '../screen/Login';
import Register from '../screen/Register';
import {AuthContext} from '../context/AuthContext';
import MainNavigation from '../navigation/MainNavigation';


const Stack = createNativeStackNavigator();

export default function Navigation() {

    const {userInfo} = useContext(AuthContext);
    

    return (
 
      <NavigationContainer>
            <Stack.Navigator>
            
              {userInfo.user ? (  <Stack.Screen name="MainNavigation" component={MainNavigation } options={{ headerShown: false }}  />):(
                <>  
                  <Stack.Screen name="Login" component={Login}   options={{ headerShown: false }} />
                  <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}  />
              
                </>
              )}
       
            </Stack.Navigator>
        </NavigationContainer>
    );
  }
  

  