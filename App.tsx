import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './src/assets/screen/login';
import loginTwo from './src/assets/screen/loginTwo';
import welcomeLogin from './src/assets/screen/welcomeLogin';
import welcomeInput from './src/assets/screen/welcomeInput';
import phoneNumberInput from './src/assets/screen/phoneNumberInput';
import Header from './src/assets/component/headerText';
import signupScreen from './src/assets/screen/signupScreen';
import signupSuccess from './src/assets/screen/signupSuccess';
import splashScreen from './src/assets/screen/splashScreen';
import createPassWord from './src/assets/screen/createPass';

const App = () => {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Ten-cua-header0" component={splashScreen}  options={{headerShown:false}}/>
      <Stack.Screen name="Ten-cua-header1" component={login} options={{headerShown:false}}/>
      <Stack.Screen name="Ten-cua-header2" component={loginTwo} options={{headerShown:false}}/>
      <Stack.Screen name="Ten-cua-header3" component={welcomeLogin} options={{headerShown:false}}/>
      <Stack.Screen name="Ten-cua-header4" component={welcomeInput} options={{header: ()=> <Header headerText='Đăng nhập'/>,headerTransparent: true,}}/>
      <Stack.Screen name="Ten-cua-header5" component={phoneNumberInput}  options={{header: ()=> <Header headerText='Quên mật khẩu'/>,headerTransparent: true,}}/>
      <Stack.Screen name="Ten-cua-header6" component={signupScreen}  options={{header: ()=> <Header headerText='Đăng kí'/>,headerTransparent: true,}}/>
      <Stack.Screen name="Ten-cua-header7" component={signupSuccess}  options={{headerShown:false}}/>
      <Stack.Screen name="Ten-cua-header8" component={createPassWord}  options={{header: ()=> <Header headerText='Tạo mật khẩu'/>,headerTransparent: true,}}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})