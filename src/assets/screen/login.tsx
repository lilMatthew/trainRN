import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { frameLogin } from '../component/ImagePath'

const login = () => {
    return (
        <View style={styles.container}>
            <Image source={frameLogin} style={styles.loginImg} />
            <View style={styles.textContainer}>
                <Text style={styles.headerText}>Chào mừng đến YLY Love </Text>
                <Text style={styles.subText}>
                    Yêu là nuôi dưỡng {`\n`}
                    Yêu là say
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Bắt đầu</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button2}>
                    <Text style={styles.buttonText}>Bỏ qua</Text>
                </TouchableOpacity>
        </View>
    )
}

export default login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginImg: {
        width: 344,
        height: 241,
        marginBottom: 20
    },
    textContainer: {
        width: 315,
        height: 278,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontFamily: 'Roboto',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FF4E98',
        textAlign: 'center',
        height: 73,
        width: 215,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    subText: {
        width: 147,
        height: 43,
        marginTop: 10,
        alignSelf: 'center',
        fontFamily: 'Roboto-Light',
        fontSize: 18,
        fontWeight: 100,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#FF4E98',
        borderRadius: 25,
        width: 238,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        textAlign: 'center',

    },
    button2:{
        backgroundColor: '#FFBF3599',
        borderRadius: 25,
        width: 109,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
})