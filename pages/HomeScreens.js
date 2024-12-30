import { AuthContext } from '../context/AuthContext';
import { Alert, FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, View,Switch} from 'react-native'
import React, { useContext, useState ,useRef} from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { TouchableOpacity } from 'react-native';
import  Cours from "../constants/cours/Cours"
import Backbuttons from '../components/Backbuttons';
import Profile from '../components/Profile';
import { useNavigation } from '@react-navigation/native';
import {BottomSheetModal, BottomSheetModalProvider} from "@gorhom/bottom-sheet"
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const HomeScreens = () => {
const {user ,logout} =useContext(AuthContext);
const [darkMode, setDarkMode] = useState(false)

const navigation = useNavigation()

//use Ref
const BottomSheetRef= useRef(null)
const openBottomSheetModal = ()=>{
    BottomSheetRef.current?.present();
}
const snapPoint =["48%"]


  




    const renderItem =({item}) =>{

        return(
            <View style ={styles.coursContainer}>
                <View style ={styles.imageborderFlat}>
                
                <Text style ={styles.coursHead}>{item.name}</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("details",{item:item})}>
                <View style ={styles.imageContainerFlat}>
                 <Image style={{width:150,height:150}} source={item.image} />
                 </View>
                 </TouchableOpacity>
                </View>

          </View>
        )
    }

    const  component  = () =>{
        return(
            <View style={{flex:0.5, backgroundColor:'#404040',padding:10,}}>
                 <Text style={{color:Colors.primary,fontWeight:'bold',fontSize:10}}>jeancympoy24@gmail.com</Text>
             
                <Text style={{color:'#fff',fontSize:10, fontWeight:'bold',textAlign:'right'}}>© Jeancy Mpoyi 2024.</Text>
               
            </View>
        )
    }
  return (
    <GestureHandlerRootView>
    <BottomSheetModalProvider>
    <View style ={styles.container}>
    
    <View style={{flex:1}}>
    <StatusBar barStyle={'dark-content'} backgroundColor={Colors.primary} />
        <View style ={styles.imageContainer}>
        <View style ={{flexDirection:'row',alignItems:'center',justifyContent:"space-between"}}>
        <Backbuttons onPress={()=>navigation.goBack()}/>
        <Text style={styles.head}>Coding for life </Text>
        <Profile  onPress={openBottomSheetModal} name={user? user.username :"Unkown" }/>
        </View>
        <View style ={{flexDirection:'row',justifyContent:"space-between",padding:10,}}>
            <Text>View</Text>
            <TouchableOpacity onPress={logout}>
            <Text>Logout</Text>
            </TouchableOpacity>
        </View>
       <Image style ={styles.image} source={require("../assets/overView.png")} />
        </View>
        <Text style ={styles.courseSelectText}>Select  your Cours</Text>
        <FlatList  ListFooterComponent={component} numColumns={2} data={Cours} renderItem={renderItem} keyExtractor={(item) =>item.id} />
  
    </View>
    <BottomSheetModal 
    ref={BottomSheetRef}index={0} snapPoints={snapPoint}>
    <View  style={styles.BottomSheets}>
       <View style={{alignItems:'center'}}>
        <Text style={{fontSize:18,fontWeight:"bold",padding:10}}>Change Picture</Text>
        <Text style={{fontSize:18,fontWeight:"bold",padding:10,}}>See Pictures</Text>
        <Text style={{fontSize:18,fontWeight:"bold",padding:10,}}>Edit</Text>
        <Text style={{fontSize:18,fontWeight:"bold",padding:10,}}>Settings</Text>
        <Switch value ={darkMode} onChange={()=>setDarkMode(!darkMode)}/>
       </View>
    </View>
    </BottomSheetModal>
    </View>

    </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}

export default HomeScreens

const styles = StyleSheet.create({
    container:{
      flex:1
    },
    imageContainer:{
     backgroundColor:Colors.primary,
     padding:15,
     borderBottomLeftRadius:10,
     borderBottomRightRadius:10,
    },
    image:{
        width:200,
        height:200,
        resizeMode:'cover',
        alignSelf:'center'
    },
    head:{
        fontSize:18,
        fontWeight:'bold',
        color:"#fff",
        padding:10,
        textAlign:'center'
    },
    coursContainer:{
        flex:1,
       flexDirection:'column',
       padding:10,
       alignItems:'center',
       
    },
    imageborderFlat:{
     borderWidth:1,
     borderColor:'#fff',
     borderRadius:10,
     padding:10,
     marginLeft:10,
     marginRight:5,
  
    },
imageContainerFlat:{
  borderWidth:1,
  borderColor:'#ddd',
  borderBottomWidth:3,
  borderRadius:10,
 
  
},
coursHead:{
    fontSize:20,
    fontWeight:"bold",
    padding:5,
    color:'blue',
    borderBottomWidth:1,
    borderColor:'#ddd'
},
courseSelectText:{
    fontSize:20,
    fontWeight:'bold',
    color:Colors.warinig,
    textAlign:'center'
},
BottomSheets:{
    flex:1,
    backgroundColor:'#fff',
    elevation:4,
    borderTopRightRadius:10,
    borderTopLeftRadius:20,
}
})