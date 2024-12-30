import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Backbuttons from '../../../components/Backbuttons';
import GoButtons from '../../../components/GoButtons';
import Buttons from '../../../components/Buttons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Lessons = ({navigation, route}) => {
  const {item}=route.params;
  return ( 
    <View style ={styles.container}>
      <View style ={[styles.headContainer,{backgroundColor:item.background}]}>
        <Backbuttons onPress={()=>navigation.goBack()} />
          <Text style ={styles.lessontext}>Lessons:{item.id}</Text>
      </View>
      <Text >Lessons {item.name}</Text>
    <ScrollView style={{flex:1}}>
     {item.cours.map((lesson,index)=>(
      <View key={index} >
        <Text style={{fontSize:18,textAlign:'justify',margin:10}}>{lesson.summarize}</Text>
        <View style={styles.lessonContainer}>
          <Text style={{fontSize:20,fontWeight:'bold'}}>{lesson.title} </Text>
          <View style ={styles.hello}>
          <Text style={{fontSize:18,color:'red'}}>{lesson.lessonOne}</Text>
          <Text style={{fontSize:18,color:'green'}}>{lesson.variable}</Text>
          </View>
        </View>
      
       
      </View>
     ))}
    </ScrollView>
     <View>

     </View>
     <Buttons title={<GoButtons onPress={()=>{}} />}  backgroundColor={item.background}/>
     
    </View>
  )
}

export default Lessons

const styles = StyleSheet.create({
  container:{
flex:1,
  },
  headContainer:{
  flex:0.1,
  flexDirection:'row',
  justifyContent:'space-between',
  padding:2,
  alignItems:'center'
  
  },
  lessontext:{
    color:'#fff',
    fontSize:18,
    fontWeight:'bold',
  },
  hello:{
    backgroundColor:'#ddd',
    flex:0.8,
    padding:10,
    margin:10,

    
  },
  lessonContainer:{
    padding:10,
    flex:1,
    backgroundColor:Colors.primary,
  }
})