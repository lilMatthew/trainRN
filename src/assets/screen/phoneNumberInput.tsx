import { ImageBackground, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { bgimg, welcomeInputImg } from '../component/ImagePath'
import { commonStyles } from '../component/commonStyles'
import { Button, Image } from 'react-native-elements'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import PhoneInputComponent from '../helper/phoneinput'
import { Controller, useForm } from 'react-hook-form'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import CustomModal from '../component/modal/Modal'


const phoneNumberInput = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            phonenumber: '',
        }
    });
    const navigation: NavigationProp<RootStackParamsList> = useNavigation()
    const onSubmit = (data: { phonenumber: string }) => {
        navigation.navigate('Ten-cua-header8')
    }




    return (
        <ImageBackground
            source={bgimg}
            style={commonStyles.backgroundImage}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={commonStyles.keyboardAvoidingView}>
                <ScrollView contentContainerStyle={commonStyles.scrollViewContent}>
                    <View style={commonStyles.container}>

                        <Image source={welcomeInputImg} style={styles.loginImg} resizeMode='contain' />
                        <View style={styles.inputContainer}>
                            <SafeAreaProvider>
                                <SafeAreaView>
                                    <Text style={styles.txtInputContainer}>
                                        Chỉ cần nhập số điện thoại của bạn để đăng nhập hoặc tạo tài khoản.
                                    </Text>
                                    <Controller
                                        control={control}
                                        rules={{
                                            required: true,
                                            pattern: /^[0-9]{9}$/, // Validation rule 
                                        }}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <PhoneInputComponent
                                                onBlur={onBlur}
                                                onChange={onChange}
                                                value={value}
                                            />
                                        )}
                                        name="phonenumber"
                                    />
                                    {errors.phonenumber && (
                                        <Text style={styles.errorText}>
                                            {errors.phonenumber.type === 'required' ? 'Số điện thoại bắt buộc' : 'SDT cần 9 số(+84 là 0)'}
                                        </Text>
                                    )}
                                    <CustomModal
                                        headerText="Chính sách bảo mật"
                                        contentText="Đây là nội dung chính sách bảo mật của bạn. Vui lòng đọc kỹ trước khi tiếp tục."
                                        buttonText="Đã hiểu"
                                    />
                                </SafeAreaView>
                            </SafeAreaProvider>
                        </View>
                        <LinearGradient
                            colors={['#FF9FC7', '#F32878']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={[commonStyles.linearButton]}>
                            <TouchableOpacity
                                onPress={handleSubmit(onSubmit)}
                                style={commonStyles.button}>
                                <Text style={styles.btntxt}>Tiếp tục</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}

export default phoneNumberInput

const styles = StyleSheet.create({
    btntxt: {
        fontFamily: 'Roboto',
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
    loginImg: {
        width: 180,
        height: 180,
        marginBottom: 20,
    },
    errorText: {
        fontFamily: 'Roboto',
        color: 'red',
        fontSize: 12,
        marginTop: 3,
        alignSelf: 'center',
    },
    inputContainer: {
        paddingTop: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        height: 240,
        width: '95%',
        borderRadius: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },

    txtInputContainer: {
        fontFamily: 'Roboto-Light',
        fontSize: 15,
        textAlign: 'center',
        color: 'black',
        marginHorizontal: 25,
        marginTop: 10,
    },
})