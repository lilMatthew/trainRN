import { Button, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { bgimg, framelogin } from '../component/ImagePath'
import LinearGradient from 'react-native-linear-gradient';
import { commonStyles } from '../component/commonStyles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  createStaticNavigation,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';


const login= () => {
  const navigation:NavigationProp<RootStackParamsList> = useNavigation(); //hook + định nghĩa type cho navigation

  return (
    <ImageBackground
      source={bgimg}
      style ={styles.backgroundImage}>
        <View style={styles.container}>
      <Image source={framelogin} style={styles.loginImg} />
      <View style={styles.textContainer}>
        <Text style={commonStyles.headerText}>Chào mừng đến YLY Love</Text>
        <Text style={styles.subText}>
          Yêu là nuôi dưỡng
          {'\n'}
          Yêu là say
        </Text>
        <LinearGradient
          colors={['#FF9FC7', '#F32878']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.linearButton}
        >
          <TouchableOpacity 
          onPress={() => navigation.navigate("Ten-cua-header2")}
          style={styles.button}>
            <Text style={styles.buttonText}>Bắt đầu</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <LinearGradient
        colors={['#FFBF35', '#FFA900']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.linearButton2}
      >
        <TouchableOpacity 
        onPress={() => navigation.navigate("Ten-cua-header4")}
        style={styles.buttonSkip}>
          <Text style={styles.buttonText}>Bỏ qua</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
    </ImageBackground>
    
  )
}

export default login

const styles = StyleSheet.create({
    backgroundImage:{
        flex: 1,
        resizeMode: 'cover'
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginImg: {
    width: 200,
    height: 140,
    marginBottom: 20,
    marginTop: 20
  },
  textContainer: {
    width: '90%',
    height: 278,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Optional: Add a background color with some transparency
    borderRadius: 15,
  },

  subText: {
    width: 147,
    height: 43,
    marginTop: 10,
    alignSelf: 'center',
    fontFamily: 'Roboto-Light',
    fontSize: 18,
    fontWeight: '100',
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.3)'
  },
  linearButton: {
    borderRadius: 25,
    width: 238,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  button: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center'
  },
  linearButton2: {
    borderRadius: 25,
    width: 109,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  buttonSkip: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})