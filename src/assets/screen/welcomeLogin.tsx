import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { use } from 'react'
import { bgimg, frameloginthree } from '../component/ImagePath'
import LinearGradient from 'react-native-linear-gradient'
import { commonStyles } from '../component/commonStyles'
import { NavigationProp, useNavigation } from '@react-navigation/native'

const welcomeLogin = () => {

    const navigation:NavigationProp<RootStackParamsList> = useNavigation()

    return (
        <ImageBackground
            source={bgimg}
            style={commonStyles.backgroundImage}>
            <Image source={frameloginthree} style={styles.loginImg} resizeMode='contain' />
            <View style={styles.container}>
                <Text style={commonStyles.headerText}>Chào mừng đến YLY Love</Text>
                <Text style={styles.subText}>Yêu là nuôi dưỡng {'\n'}
                    Yêu là say 
                </Text>
                <LinearGradient 
                colors={['#FF9FC7', '#F32878']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.linearButton}>
                <TouchableOpacity 
                onPress={() => navigation.navigate("Ten-cua-header4")}
                style={commonStyles.button}>
                    <Text style={styles.btntxt}>Đăng nhập</Text>
                </TouchableOpacity>
                </LinearGradient>

                <LinearGradient 
                colors={['#6C4DDA99', '#522ED2']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.linearButton}>
                <TouchableOpacity style={commonStyles.button}>
                    <Text style={styles.btntxt}>Đăng kí</Text>
                </TouchableOpacity>
                </LinearGradient>
            </View>
        </ImageBackground>

    )
}

export default welcomeLogin

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    loginImg: {
        width: 200,
        height: 230,
        padding: 50,
        marginHorizontal: 70,
        marginTop: 100,
        marginBottom: 40
    },
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'rgba(255, 255, 255, 0.9)', 
        borderRadius: 20,
        marginBottom: 70,
        padding: 20, 
        width:'90%',
        alignSelf: 'center'
    },

    subText: {
        fontFamily: 'Roboto-Light',
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.3)',
        textAlign: 'center',
        width: 140,
        height: 43,
        alignSelf: 'center',
    },
    btntxt:{
        fontFamily: 'Roboto',
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
    linearButton:{
        borderRadius: 25,
        width: 238,
        height: 50,
        marginTop: 10
    }
})