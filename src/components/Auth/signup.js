import React, { useState } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import img from '../../../src/assets/images/images.png';
import { color } from '../../assets';



export default function Signup({navigation}){

    const onSignIn = () =>{
      if(!name){
        alert('Name required')
      }else{
      if(!email){
        alert('Email required')
      }else{
        if(!password){
          alert('password required')
        }else{
          if(password !== confirmpassword){
            alert('Password not matched')
          }else{
          alert(JSON.stringify(credential));
          navigation.dispatch(CommonActions.reset({
            index :0,
            routes: [{name : 'Appnav'}]
        }))}
        }
      }
      }
      
        

    }

    const [credential, setcredential] = useState({
      name: '',
      email: '',
      password: '',
      confirmpassword: '',
    });

    const {name, email , password, confirmpassword} = credential;

  




    const handleChange = (name,value) =>{
      setcredential({
        ...credential,
        [name] : value
      });
    };


  return(

   <View style={Style.main}>
   <ScrollView>
   <View style={Style.main}>
   <Image source={img} height={20} width={40} />
   <TextInput style={Style.inptxt}
     onChangeText={text => handleChange('name', text)}
     value={name}
    placeholder={'User Name'}  
    />
    <TextInput style={Style.inptxt}
     onChangeText={text => handleChange('email', text)}
     value={email}
    placeholder={'Email'}  
    />
   <TextInput style={Style.inptxt}
    placeholder={'Password'} 
    onChangeText={text => handleChange('password', text)}
     value={password}
     />
     <TextInput style={Style.inptxt}
    placeholder={'Confirm Password'} 
    onChangeText={text => handleChange('confirmpassword', text)}
     value={confirmpassword}
     />
    <TouchableOpacity onPress={onSignIn} style={Style.btn}>
        <Text style={{color:'white',fontSize:16, fontWeight:'bold'}} >Sign Up</Text>
    </TouchableOpacity>

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
      color:"black",
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
    backgroundColor: color.green,
    borderWidth:1,
    borderRadius:10,
    marginTop:10,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:50,
  }

})