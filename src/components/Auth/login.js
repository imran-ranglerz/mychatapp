import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import img from '../../../src/assets/images/images.png';



export default function Login({navigation}){

    const onSignIn = () =>{
        navigation.dispatch(CommonActions.reset({
            index :0,
            routes: [{name : 'Appnav'}]
        }))
    }


  return(

   <View style={Style.main}>
   <ScrollView>
   <View style={Style.main}>
   <Image source={img} height={20} width={40} />
   <TextInput style={Style.inptxt} placeholder={'User Name'}  />
   <TextInput style={Style.inptxt} placeholder={'User Name'}  />
    <TouchableOpacity style={Style.btn}>
        <Text style={{color:'white',fontSize:16, fontWeight:'bold'}} >Sign Up</Text>
    </TouchableOpacity>

    <Text style={{color:'white',fontSize:16, marginTop:80}}>Create New Account</Text>
   </View>
   </ScrollView>
   </View>
     
  );
}

const Style = StyleSheet.create({
    main:{
        flex: 1,
        alignItems:'center',
        backgroundColor:"black",
    },
  inptxt:{
      height:50,
      width:300,
      color:"white",
      backgroundColor:'white',
      borderWidth:1,
      borderRadius:10,
      padding:10,
      marginTop:10,
  }, 
  btn:{
    height:50,
    width:300,
    color:"white",
    backgroundColor:'green',
    borderWidth:1,
    borderRadius:10,
    marginTop:10,
    alignItems:'center',
    justifyContent:'center'
  }

})