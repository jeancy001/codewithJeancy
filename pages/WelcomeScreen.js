import { AuthContext } from '../context/AuthContext';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react';
import Buttons from '../components/Buttons';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const WelcomeScreen = ({navigation}) => {
  const [isloading, seIsloading] =useState(true)
  const {user} =useContext(AuthContext)
  return (
    <View style={styles.container}>
     <View style ={styles.TitleHeaderContainer}>
        <Text style ={styles.head}>Learn Coding</Text>
      
        <Text style ={styles.wave}>Hello 👋</Text>
        <Text style={{fontSize:20,fontWeight:'bold',}}>{user.username}</Text>
     </View>
    <View style ={styles.ImageContainer}>
    <Image style={styles.cover} source={require("../assets/academy.png")} />
    </View>
    <View style ={styles.bottomScreen}>
        <Text style ={styles.bottomtext}>
        Coding is writing instructions for computers. Programming involves designing and building software systems. Practice improves coding skills, debugging, and understanding of programming concepts through hands-on experience. </Text>
     </View>
      <Buttons  onPress={()=>navigation.navigate("Home")} title={"Let's Start"} backgroundColor={Colors.primary} />
     <StatusBar barStyle={'dark-content'} backgroundColor={"#fff"} />
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#fff",
    },
    cover:{
     width:300,
     height:300,
     resizeMode:'contain'
    },
    ImageContainer:{
        alignItems:'center',
        justifyContent:'center',
    },
    TitleHeaderContainer:{
     flex:0.6,
       justifyContent:'center',
       alignItems:'center',
       padding:15,
       margin:10,
    },
    head:{
        fontSize:20,
        fontWeight:'bold',
    },
    bottomScreen:{
      padding:20,
    },
    bottomtext:{
    fontSize:16,
   justifyContent:'center',
   fontWeight:'bold',
   textAlign:'justify'
    },
    wave:{
        fontSize:20,
        textAlign:'center',
    }

})