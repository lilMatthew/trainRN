import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { bgimg, welcomeInputImg } from '../component/ImagePath'
import { commonStyles } from '../component/commonStyles'
import KeyboardAvoidingView from '../helper/keyboardAvoidingView'
import { ScrollView } from 'react-native'
import { Icon, Image } from 'react-native-elements'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'
import LinearGradient from 'react-native-linear-gradient'

const createPassWord = () => {
    const navigation: NavigationProp<RootStackParamsList> = useNavigation()
    const { control, handleSubmit, formState: { errors }, setValue } = useForm({
        defaultValues: {
            password: '',
        }
    })
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState('')
    const validLength = password.length >= 8
    const upperCaseLetter = /[A-Z!@#$%^&*(),.?":{}|<>]/.test(password)
    const isNum = /\d/.test(password)

    return (
        <ImageBackground
            source={bgimg}
            style={commonStyles.backgroundImage}>
            <KeyboardAvoidingView>
                <ScrollView contentContainerStyle={commonStyles.scrollViewContent}>
                    <View style={commonStyles.container}>
                        <Image source={welcomeInputImg} style={styles.loginImg} resizeMode='contain' />
                        <View style={styles.inputContainer}>
                            <Text style={styles.description}>{`Chọn một mật khẩu an toàn và dễ nhớ đối với bạn.`}</Text>
                            <Controller
                                control={control}
                                rules={{
                                    required: true
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <View style={styles.inputWrapper}>
                                        <TextInput
                                            placeholder='Mat khau moi'
                                            onBlur={onBlur}
                                            onChangeText={(text) => {
                                                onChange(text)
                                                setPassword(text)
                                            }}
                                            value={value}
                                            secureTextEntry={!showPassword}
                                            style={styles.txtinput}
                                        />
                                        <TouchableOpacity
                                            onPress={() => setShowPassword(!showPassword)}
                                        >
                                            <Icon
                                                name={showPassword ? 'visibility' : 'visibility-off'}
                                                size={16}
                                                color="gray"
                                            />
                                        </TouchableOpacity>
                                    </View>
                                )}
                                name='password'
                            />
                            {errors.password && <Text style={styles.errorText}>Ban phai nhap mat khau</Text>}
                            <View style={styles.validationContainer}>
                                <View style={styles.validationWrapper}>
                                    <Icon
                                        name='check'
                                        size={16}
                                        color={validLength ? 'green' : 'gray'}
                                        style={styles.validationIcon}
                                    />
                                    <Text
                                        style={[
                                            styles.validationText,
                                            validLength && styles.validCondition
                                        ]}>
                                        Mật khẩu phải chứa ít nhất 8 ký tự
                                    </Text>
                                </View>
                                <View style={styles.validationWrapper}>
                                    <Icon
                                        name='check'
                                        size={16}
                                        color={upperCaseLetter ? 'green' : 'gray'}
                                        style={styles.validationIcon}
                                    />
                                    <Text
                                        style={[
                                            styles.validationText,
                                            upperCaseLetter && styles.validCondition
                                        ]}>
                                        Có chữ cái viết hoa hoặc ký hiệu
                                    </Text>
                                </View>
                                <View style={styles.validationWrapper}>
                                    <Icon
                                        name='check'
                                        size={16}
                                        color={isNum ? 'green' : 'gray'}
                                        style={styles.validationIcon}
                                    />
                                    <Text 
                                    style={[
                                        styles.validationText,
                                        isNum && styles.validCondition
                                        ]}>
                                        Có số
                                        </Text>
                                </View>
                            </View>
                            <LinearGradient
                            start={{x: 0, y: 0}}
                            end={{x: 1, y: 0}}
                            colors={['#FF9FC7', '#F32878']} style={commonStyles.button}>
                                <TouchableOpacity
                                style={commonStyles.button}
                                onPress = {()=>{}}>
                                <Text style={styles.btntxt}>Đăng kí</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                            
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

        </ImageBackground>

    )
}

export default createPassWord

const styles = StyleSheet.create({
    btntxt:{
        fontFamily: 'Roboto',
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
    errorText: {
        fontFamily: 'Roboto',
        color: 'red',
        fontSize: 12,
        marginTop: 5,
    },
    loginImg: {
        width: 180,
        height: 180,
        marginBottom: 20,
    },
    inputContainer: {

        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        height: 240,
        width: '95%',
        borderRadius: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: 270,
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'gray',
        marginTop: 10,
    },
    txtinput: {
        fontFamily: 'Roboto',
        flex: 1,
        padding: 5,
        width: '90%'
    },
    description: {
        fontFamily: 'Roboto',
        fontSize: 16,
        textAlign: 'center',

    },
    validationContainer: {
        marginTop: 10,
        alignSelf: 'flex-start',
    },
    validationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    validationText: {
        fontFamily: 'Roboto',
        fontSize: 14,
    },
    validationIcon: {
        marginRight: 5,
    },
    validCondition: {
        color: 'green'
    }
})