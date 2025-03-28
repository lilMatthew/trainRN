import { FlatList, Image, ImageBackground, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { bgimg, welcomeInputImg } from '../component/ImagePath'
import { commonStyles } from '../component/commonStyles'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import { CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../component/headerText'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import KeyboardAvoidingView from '../helper/keyboardAvoidingView'

const welcomeInput = () => {
    const [isChecked, setChecked] = useState(false)
    const navigation: NavigationProp<RootStackParamsList> = useNavigation()
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const toggleShowPassword = () => { setShowPassword(!showPassword) }

    return (
        <ImageBackground
            source={bgimg}
            style={commonStyles.backgroundImage}>
            <KeyboardAvoidingView>
                <ScrollView contentContainerStyle={commonStyles.scrollViewContent}>
                    <View style={commonStyles.container}>

                        <Image source={welcomeInputImg} style={styles.loginImg} resizeMode='contain' />
                        <View style={styles.inputContainer}>
                            <SafeAreaProvider>
                                <SafeAreaView>
                                    <View style={styles.inputWrapper}>
                                        <Icon name="person" size={16} color="gray" style={styles.inputIcon} />
                                        <TextInput
                                            style={styles.input}
                                            onChangeText={() => { }}
                                            placeholder="Username"
                                            placeholderTextColor="gray"
                                        />
                                    </View>
                                    <View style={styles.inputWrapper}>
                                        <Icon name="lock" size={16} color="gray" style={styles.inputIcon} />
                                        <TextInput
                                            style={styles.input}
                                            onChangeText={setPassword}
                                            placeholder="Password"
                                            placeholderTextColor="gray"
                                            secureTextEntry={!showPassword}
                                            value={password}
                                        />
                                        <Icon
                                            name= {showPassword ? "visibility" : "visibility-off"}
                                            onPress={toggleShowPassword}
                                            size={16}
                                            color="gray"
                                            style={styles.inputIcon}
                                        />
                                    </View>
                                    <View style={styles.checkboxContainer}>
                                        <CheckBox
                                            checked={isChecked}
                                            onPress={() => setChecked(!isChecked)}
                                            containerStyle={styles.checkbox}
                                            checkedIcon={<Icon name="check-box" size={16} color="black" />}
                                            uncheckedIcon={<Icon name="check-box-outline-blank" size={16} color="black" />}
                                        />
                                        <Text style={styles.label}>Ghi nhớ</Text>
                                        <TouchableOpacity
                                            onPress={() => { navigation.navigate("Ten-cua-header5") }}
                                        >
                                            <Text style={styles.label2}>Quên mật khẩu?</Text>
                                        </TouchableOpacity>
                                    </View>
                                </SafeAreaView>
                            </SafeAreaProvider>
                            <LinearGradient
                                colors={['#FF9FC7', '#F32878']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={[commonStyles.linearButton, styles.linearButton]}>
                                <TouchableOpacity 
                                onPress={() => {navigation.navigate("Ten-cua-header9")}}
                                style={commonStyles.button}>
                                    <Text style={styles.btntxt}>Đăng nhập</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                        <TouchableOpacity 
                        style={styles.txtdangkicontainer}
                        onPress={() => {navigation.navigate("Ten-cua-header6")}}
                        >
                            <Text style={styles.txtdangki}>Bạn chưa có tài khoản? <Text style={styles.txthighlight}>Đăng kí!</Text></Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}

export default welcomeInput

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    loginImg: {
        width: 180,
        height: 180,
        marginBottom: 20,
    },
    inputContainer: {
        paddingTop: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        height: 260,
        borderRadius: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        margin: 12,
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: 285,
    },
    inputIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 35,
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginLeft: 12,
        alignItems: 'center',
    },
    checkbox: {
        margin: 0,
        padding: 0,
    },
    label: {
        marginLeft: 3,
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.7)',
        flex: 1
    },
    label2: {
        fontFamily: 'Roboto',
        fontSize: 16,
        marginRight: 23,
        color: 'rgba(0, 0, 0, 0.7)',
    },
    btntxt: {
        fontFamily: 'Roboto',
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
    linearButton: {
        marginBottom: 20
    },
    txtheader: {
        fontFamily: 'Roboto-Medium',
        fontSize: 22,
        marginBottom: 20,
    },
    txtdangkicontainer: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center'
    },
    txtdangki: {
        fontFamily: 'Roboto',
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.7)',
    },
    txthighlight: {
        color: '#FF4E98',
    },

})