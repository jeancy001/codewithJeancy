import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/MaterialIcons"
import { TouchableOpacity } from 'react-native'
const Backbuttons = ({onPress}) => {
  return (
    <View style ={styles.container}>
        <TouchableOpacity onPress={onPress}>
      <Icon name='arrow-back' size={30} color={"#fff"} />
      </TouchableOpacity>
    </View>
  )
}

export default Backbuttons

const styles = StyleSheet.create({
    container:{
        justifyContent:'flex-start',
      alignItems:'flex-start',
 
    }
})