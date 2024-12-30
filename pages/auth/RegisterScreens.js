import { AuthContext } from '../../context/AuthContext';
import { Image, KeyboardAvoidingView, Platform, ScrollView,  Alert, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import Buttons from '../../components/Buttons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { TouchableOpacity } from 'react-native';

const RegisterScreens = ({navigation}) => {
    const[username, setUsername] =useState("");
    const[email, setEmail] =useState("");
    const[password, setPassword]= useState("");
    const {register} = useContext(AuthContext)


    const handleRegister = () => {

      register(username, email, password)
          .then(() => Alert.alert('Registered successfully!'))
        .catch((err) => Alert.alert('Registration Failed', err.message));
  };
  
  return (
    <KeyboardAvoidingView style ={styles.container} behavior={Platform.OS =="android"?'height':'height'}>
    <View >
    <StatusBar barStyle={'dark-content'} backgroundColor={"#fff"} />
  
  <View style={styles.containerBorder}>
  
    <View style ={styles.borderInput}>
    <Image  style ={styles.image}source={require("../../assets/code.png")} />
    <Text style={styles.head}>Sign Up </Text>
    <TextInput  style ={styles.input}value={username} onChangeText={setUsername}  placeholder='Username'/>
   <TextInput  style ={styles.input}value={email} onChangeText={setEmail}  placeholder='Email'/>
   <TextInput style ={styles.input} value={password}  secureTextEntry={true}onChangeText={setPassword}  placeholder='Your Password'/>
     <Buttons title={"Sign Up"} backgroundColor={Colors.primary} onPress={handleRegister}/>
     <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,}}>
     <Text>Ready have an account ? </Text>
     <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
     <Text style={{color:Colors.primary,fontSize:16,fontWeight:'bold'}}>Login</Text>
     </TouchableOpacity>
     </View>
   </View>
  </View>
  </View>
  </KeyboardAvoidingView>


  )
}

export default RegisterScreens

const styles = StyleSheet.create({
    container:{
        flex:1,
      backgroundColor:'#fff',
        justifyContent:'center',
   
    },
    containerBorder:{
      backgroundColor:"#fff",
   
     padding:10,
     elevation:5,
    
    },
    input:{
        padding:20,
        margin:10,
        borderWidth:1,
        fontSize:20,
        borderColor:'#ddd'

    },
    borderInput:{
        
       justifyContent:'center',
       margin:10,
     borderRadius:10,
       backgroundColor:'#fff',
       borderColor:'#ddd',
       borderWidth:1,
       padding:10,
    },
    image:{
        width:100,
        height:100,
        resizeMode:'center',
        alignSelf:'center'
    },
    head:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        padding:10,
    }
})