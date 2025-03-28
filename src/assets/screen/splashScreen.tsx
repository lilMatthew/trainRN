import { ImageBackground, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { bgimg, frameloginthree, splashImg } from '../component/ImagePath'
import { commonStyles } from '../component/commonStyles'
import KeyboardAvoidingView from '../helper/keyboardAvoidingView'
import { Image } from 'react-native-elements'
import LottieView from 'lottie-react-native'
import { useNavigation, NavigationProp } from '@react-navigation/native'


const splashScreen = () => {
    const navigation:NavigationProp<RootStackParamsList> = useNavigation()

    // useEffect(()=>{
    //     const timer = setTimeout(()=>{
    //         navigation.navigate("Ten-cua-header1")
    //     },2000)
    //     return () => clearTimeout(timer)
    // },[navigation])

    
    return (
        <ImageBackground
            source={bgimg}
            style={commonStyles.backgroundImage}>

            <View style={commonStyles.container}>
                <View style={styles.imgContainer}>
                    <Image source={frameloginthree} style={styles.loginImg} resizeMode='contain' />
                    <Image source={splashImg} style={styles.splashImg} resizeMode='contain' />
                </View>
                
                    <LottieView
                        source={require('../images/animationloading.json')}
                        autoPlay
                        loop = {false}
                        duration={2500}
                        speed={0.5}
                        style={{ width: '80%', height: 10,marginTop: 20, marginBottom: 10 }}
                        onAnimationFinish={()=>navigation.navigate("Ten-cua-header1")}
                    />
                    <Text style={styles.loadlingTxt}>Đang tải....</Text>
                    
                    
                </View>
        </ImageBackground>
    )
}

export default splashScreen

const styles = StyleSheet.create({
    loginImg: {
        width: 200,
        height: 234,
    },
    lottie:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadlingTxt: {
        fontFamily: 'Roboto-Bold',
        fontSize: 20,
        color: '#9C88FF',
        textAlign: 'center'
    },
    imgContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    splashImg: {
        width: 140,
        height: 65,

    }
})