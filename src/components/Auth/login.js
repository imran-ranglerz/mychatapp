import React from 'react';
import {View, Text} from 'react-native';
import { CommonActions } from '@react-navigation/native';




export default function Login({navigation}){

    const onSignIn = () =>{
        navigation.dispatch(CommonActions.reset({
            index :0,
            routes: [{name : 'Appnav'}]
        }))
    }


  return(
   <View><Text onPress={onSignIn}>Login</Text></View>
     
  );
}