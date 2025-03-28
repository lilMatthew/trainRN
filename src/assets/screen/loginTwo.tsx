import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { bgimg, framelogintwo } from '../component/ImagePath'
import LinearGradient from 'react-native-linear-gradient'
import { commonStyles } from '../component/commonStyles'
import { NavigationProp, useNavigation } from '@react-navigation/native'

const loginTwo = () => {

    const navigation:NavigationProp<RootStackParamsList> = useNavigation()

    return (
        <ImageBackground
            source={bgimg}
            style={styles.backgroundImage}>
            <View style={styles.container}>
                <Image source={framelogintwo} style={styles.loginImg} />
                <View style={styles.textContainer}>
                    <Text style={commonStyles.headerText}>Tìm được một nửa tại YLY Love</Text>
                    <Text style={commonStyles.subText}>Một phương thức mới để kết bạn</Text>
                    <LinearGradient
                        colors={['#FF9FC7', '#F32878']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.linearButton}
                    >
                        <TouchableOpacity 
                        onPress={() => navigation.navigate("Ten-cua-header3")}
                        style={styles.buttonLogin}>
                            <Text style={styles.buttonText}>Bắt đầu</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
                <View>
                        <LinearGradient
                        colors={['#FFBF35', '#FFA900']}
                        start = {{x:0, y: 0}}
                        end = {{x:1, y : 0}}
                        style = {styles.linearButton2}>
                            <TouchableOpacity 
                            onPress={() => navigation.navigate("Ten-cua-header4")}
                            style = {styles.buttonSkip}>
                                <Text style = {styles.buttonText} >Bỏ qua</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
            </View>
        </ImageBackground>

    )
}

export default loginTwo

const styles = StyleSheet.create({
    backgroundImage: {
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
        marginTop: 20,
        marginBottom: 20
    },
    textContainer: {
        width: 315,
        height: 278,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Optional: Add a background color with some transparency
        borderRadius: 15,
    },

    linearButton: {
        borderRadius: 25,
        width: 238,
        height: 50,
        marginTop: 10
    },
    buttonLogin: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontFamily: 'Roboto',
        fontSize: 18,
        color: 'white',
        textAlign: 'center',

    },
    linearButton2:{
        borderRadius: 25,
        width: 109,
        height: 35,
        marginTop: 40
    },
    buttonSkip:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})