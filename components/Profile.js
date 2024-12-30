import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon  from "react-native-vector-icons/MaterialIcons"
import { TouchableOpacity } from 'react-native'

const Profile = ({onPress ,name}) => {
  return (
    <View style ={styles.container}>
      <Text style ={{fontSize:15,fontWeight:'bold', color:'#fff'}}>{name}</Text>
        <TouchableOpacity onPress={onPress}>
      <Icon name= 'account-circle' size={50} color={"#fff"} />
      </TouchableOpacity>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex:0.6,
        flexDirection:'row',
        alignSelf:'flex-end',
        justifyContent:'flex-end',
        alignItems:'center'
    }
})