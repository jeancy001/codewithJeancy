import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Buttons = ({onPress ,title ,backgroundColor}) => {
  return (
    <View>
        <TouchableOpacity style ={[styles.btn,{backgroundColor:backgroundColor}]} onPress={onPress} >
        <Text style ={styles.btntext}>{title}</Text>
        </TouchableOpacity>
      
    </View>
  )
}

export default Buttons

const styles = StyleSheet.create({
    btn:{
     padding:10,
     margin:10,
     borderRadius:15,
     elevation:2,
    },
    btntext:{
        fontSize:20,
        fontWeight:'bold',
        color:Colors.lighter,
        textAlign:'center',
        alignSelf:'center',
    }
})