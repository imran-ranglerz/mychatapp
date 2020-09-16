import React from 'react';
import {View, Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import User from './user';
import Chat from './chat';
import Adduser from './Adduser';

const AppStack = createStackNavigator();


export default function Appnav(){
  return(
      <AppStack.Navigator>
          <AppStack.Screen name="User" component={User} />
          <AppStack.Screen name="Chat" component={Chat} />
          <AppStack.Screen name="Adduser" component={Adduser} />
      </AppStack.Navigator>
  );
}