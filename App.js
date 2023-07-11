import React from 'react';
import FrontNavigation from './scr/navigation/FrontNavigation';
import {AuthProvider} from './scr/context/AuthContext';



export default function App() {


  return (
    <AuthProvider>
   
        <FrontNavigation/>
    </AuthProvider>

  );
}

