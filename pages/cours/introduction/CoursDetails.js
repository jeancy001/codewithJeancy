import { Alert, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Image } from 'react-native'
import Backbuttons from '../../../components/Backbuttons'
import { Platform } from 'react-native'
import Buttons from '../../../components/Buttons'


const CoursDetails = ({navigation, route}) => {
    const {item} = route.params
  return (
    <View style ={styles.container}>
        <StatusBar   barStyle={"light-content"} backgroundColor={item.background}/>
        <View style ={[styles.containerHead ,{backgroundColor:item.background}]}>
        <View style ={{flexDirection:"row", justifyContent:'space-between',alignItems:'center',padding:10}}>
        <Backbuttons onPress={()=>navigation.goBack()}/>
        <Text style ={styles.head}> Learn {item.name}</Text>
        </View>
      
        <View style ={styles.imageborder}>
        
        <Image style ={styles.image} source={item.image} />
        </View>
        </View>
        <ScrollView style={styles.coursDescription} scrollIndicatorInsets={false}>
            <Text style={{fontSize:20,fontWeight:'bold',borderBottomWidth:1}}>Description</Text>
            <Text style ={styles.textDescription}>{item.description}</Text>
        </ScrollView>
       <Buttons onPress={()=>navigation.navigate("Lessons",{item:item})} title={"Start"} backgroundColor={item.background} />
    </View>
  )
}

export default CoursDetails

const styles = StyleSheet.create({
    container:{
 flex:1,
    },
    containerHead:{
    
        padding:10,
        flex:Platform.OS ==="android"?0.6 :0.8
     
        
        
    },
    image:{
        width:200,
        height:200,
        resizeMode:'cover',

    },
    imageborder:{
        margin:10,
        justifyContent:'center',
        alignItems:'center',
        
    },
    head:{
        fontSize:20,
        color:Colors.lighter,

    },
    coursDescription:{
        flex:1,
        margin:10
    },
    textDescription:{
        fontSize:18,
        fontStyle:"normal",
        textAlign:'justify'
    }
})