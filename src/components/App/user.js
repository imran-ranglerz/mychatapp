import React, { useLayoutEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';


export default function User({navigation}){
  return(
   <View style={Style.main}><Text><SimpleLineIcon name="logout" size={24} color={'black'} />
   </Text></View>
     
  );
} 

const Style =StyleSheet.create({
  main:{
    flex:1,
    justifyContent:'center',
    alignItems:"center",  
  }
})