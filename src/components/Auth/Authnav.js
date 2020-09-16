import React from 'react';
import {View, Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './login';
import Signup from './signup';

const AuthStack = createStackNavigator();


export default function Authnav(){
  return(
   <AuthStack.Navigator>
       <AuthStack.Screen name="login" component={Login} />
       <AuthStack.Screen name="Signup" component={Signup} />
   </AuthStack.Navigator>
  );
}