import React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../components/Auth/login';
import Signup from '../components/Auth/signup';
import User from '../components/App/user';
import Chat from '../components/App/chat';
import Authnav from '../components/Auth/Authnav';
import Appnav from '../components/App/Appnav';

const Stack = createStackNavigator();
export default function Navigation(){
  return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Authnav" component={Authnav} />
      <Stack.Screen name="Appnav" component={Appnav} />
     </Stack.Navigator> 
  </NavigationContainer>
     
  );
}