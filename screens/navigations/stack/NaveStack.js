import {  AuthProvider, AuthContext } from '../../../context/AuthContext';
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from '../../../pages/WelcomeScreen';
import HomeScreens from '../../../pages/HomeScreens';
import CoursDetails from '../../../pages/cours/introduction/CoursDetails';
import Lessons from '../../../pages/cours/advanced/Lessons';
import LoginScreens from '../../../pages/auth/LoginScreens';
import RegisterScreens from '../../../pages/auth/RegisterScreens';
import { ActivityIndicator, View } from 'react-native';


const Stack = createNativeStackNavigator();
const NavAuth = ()=>{
  const {user, loading} = useContext(AuthContext)
  if(loading){
    return(<View>
      <ActivityIndicator  style ={"blue"}size={'large'} />
    </View>)
  }

  return(
    <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown:false}}>
    { user ? (
      <>

      <Stack.Screen name='Welcome' component={WelcomeScreen} />
      <Stack.Screen name='Home' component={HomeScreens} />
      <Stack.Screen name ="details" component={CoursDetails} />
      <Stack.Screen name='Lessons' component={Lessons} />
  
      
      </>


    ):(
      <>
      <Stack.Screen name='Login' component={LoginScreens} />
      <Stack.Screen name='Register'component={RegisterScreens} />
      
      </>
    )}
      
  </Stack.Navigator>

)
}
const NaveStack = () => {

  return (
    <AuthProvider>
   <NavigationContainer>
      <NavAuth  />
   </NavigationContainer>
   </AuthProvider>
  )
}

export default NaveStack