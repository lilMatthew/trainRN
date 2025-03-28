import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { bgimg } from '../component/ImagePath'
import { commonStyles } from '../component/commonStyles'
import KeyboardAvoidingView from '../helper/keyboardAvoidingView'
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation, NavigationProp } from '@react-navigation/native'

const signupSuccess = () => {
    const navigation:NavigationProp<RootStackParamsList> = useNavigation()

    return (
        <ImageBackground
            source={bgimg}
            style={commonStyles.backgroundImage}>
            <KeyboardAvoidingView>
                <ScrollView contentContainerStyle={commonStyles.scrollViewContent}>
                    <View style={commonStyles.container}>
                        <View style={styles.lottie}>
                            <LottieView
                                source={require('../images/animationsuccesssignup.json')}
                                autoPlay
                                loop
                                style={{ width: 100, height: 100 }}
                            />
                            <Text style={[commonStyles.subText, styles.subText]}>Thành công</Text>
                        </View>
                        <LinearGradient
                            colors={['#FF9FC7', '#F32878']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={[commonStyles.linearButton]}>
                            <TouchableOpacity 
                            style={commonStyles.button}
                            onPress={() => {navigation.navigate('Ten-cua-header4')}}
                            >
                                <Text style={styles.btntxt}>Đi tới màn hình Đăng nhập</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}

export default signupSuccess

const styles = StyleSheet.create({
    lottie: {
        alignSelf: 'center',
        alignItems: 'center',
    },
    subText: {
        color: 'violet',
    },
    btntxt: {
        fontFamily: 'Roboto',
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
})