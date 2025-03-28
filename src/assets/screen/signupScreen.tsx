import { Alert, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { commonStyles } from '../component/commonStyles'
import { bgimg } from '../component/ImagePath'
import KeyboardAvoidingView from '../helper/keyboardAvoidingView'
import { useForm, Controller } from 'react-hook-form'
import LinearGradient from 'react-native-linear-gradient'
import { CheckBox, Icon, Image } from 'react-native-elements'
import ImageProduct from '../component/permission/imageProduct'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'


const signupScreen = () => {
    const navigation: NavigationProp<RootStackParamsList> = useNavigation()
    const [isChecked, setChecked] = useState(false)
    const [checkBox, setCheckBox] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const { control, handleSubmit, getValues, formState: { errors }, } = useForm({
        defaultValues: {
            username: '',
            phonenumber: '',
            email: '',
            password: '',
            repassword: '',
        }
    })
    const [images, setImages] = useState('');
    const pickImage = () => {
        const option = {
            mediaType: 'photo',
            maxWidth: 800,
            maxHeight: 600,
            quality: 0.8,
             
        }
        launchImageLibrary({mediaType: 'photo'}, (response) => {
            if (!response.didCancel && !response.errorCode) {
              const { uri, fileSize, type, fileName, width, height } = response.assets?.[0] || {} //check xem assets[0] có null không, nếu null thì trả về rỗng
              console.log('URI:', uri);
              console.log('Kích thước tệp:', fileSize);
              console.log('Loại tệp:', type);
              console.log('Tên tệp:', fileName);
              console.log('Kích thước ảnh:', width, height);
            }

            if(response.assets && response.assets.length > 0){
                setImages(response.assets[0].uri || '')} // check nếu uri có thì trả về uri, không có thì trả về rỗng
          });
    };

        console.log(images)
    return (
        <ImageBackground
            source={bgimg}
            style={commonStyles.backgroundImage}>
            <KeyboardAvoidingView>
                <ScrollView contentContainerStyle={commonStyles.scrollViewContent}>
                    <View style={commonStyles.container}>
                        <TouchableOpacity style={styles.imgacess} onPress={pickImage}>
                         <Image source={{ uri: images }} style={styles.imgPreview} />
                        </TouchableOpacity>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <View style={styles.inputWrapper}>
                                    <TextInput
                                        placeholder="Tên đầy đủ"
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        style={styles.txtinput}
                                    />
                                </View>
                            )}
                            name="username"
                        />
                        {errors.username && <Text style={styles.errorText}>This is required.</Text>}
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                                pattern: /^[0-9]{10}$/,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <View style={styles.inputWrapper}>
                                    <TextInput
                                        placeholder="Số điện thoại"
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        keyboardType='numeric'
                                        style={styles.txtinput}
                                    />
                                </View>
                            )}
                            name="phonenumber"
                        />
                        {errors.phonenumber && (
                            <Text style={styles.errorText}>
                                {errors.phonenumber.type === 'required' ? 'Số điện thoại bắt buộc' : 'SDT cần 10 số'}
                            </Text>
                        )}
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <View style={styles.inputWrapper}>
                                    <TextInput
                                        placeholder="Email"
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        keyboardType='email-address'
                                        style={styles.txtinput}
                                    />
                                </View>

                            )}
                            name="email"
                        />
                        {errors.email && (
                            <Text style={styles.errorText}>
                                {errors.email.type === 'required'
                                    ? 'Email là bắt buộc.'
                                    : 'Email không đúng định dạng.'}
                            </Text>
                        )}
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <View style={styles.inputWrapper}>
                                    <TextInput
                                        placeholder="Mật khẩu"
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        secureTextEntry={!showPassword}
                                        style={styles.txtinput}
                                    />
                                    <TouchableOpacity
                                        onPress={() => setShowPassword(!showPassword)} // Toggle state
                                        style={styles.iconWrapper}>
                                        <Icon
                                            name={showPassword ? "visibility" : "visibility-off"}
                                            size={16}
                                            color="gray" />
                                    </TouchableOpacity>
                                </View>

                            )}
                            name="password"
                        />
                        {errors.password && <Text style={styles.errorText}>This is required.</Text>}
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                                validate: (value) =>
                                    value === getValues('password') || 'Mật khẩu không khớp.', // Custom validation rule
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <View style={styles.inputWrapper}>
                                    <TextInput
                                        placeholder="Nhập lại mật khẩu"
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        secureTextEntry={!showPassword}
                                        style={styles.txtinput}
                                    />
                                    <TouchableOpacity
                                        onPress={() => setShowPassword(!showPassword)} // Toggle state
                                        style={styles.iconWrapper}>
                                        <Icon
                                            name={showPassword ? 'visibility' : 'visibility-off'}
                                            size={16}
                                            color="gray"
                                        />
                                    </TouchableOpacity>
                                </View>
                            )}
                            name="repassword"
                        />
                        {errors.repassword && (
                            <Text style={styles.errorText}>{errors.repassword.message}</Text>
                        )}
                        <View style={styles.checkboxContainer}>
                            <CheckBox
                                checked={isChecked}
                                onPress={() => {
                                    setChecked(!isChecked)
                                    setCheckBox(false)
                                }}
                                containerStyle={styles.checkbox}
                                checkedIcon={<Icon name="check-box" size={16} color="black" />}
                                uncheckedIcon={<Icon name="check-box-outline-blank" size={16} color="black" />}
                            />
                            <Text style={styles.txtdesc}>
                                Bằng cách tạo tài khoản, bạn đồng ý{'\n'}
                                với Điều khoản dịch vụ và Chính sách bảo{'\n'}
                                mật của chúng tôi
                            </Text>
                        </View>
                        {checkBox && (
                            <Text style={styles.errorText}>{`Điều này là bắt buộc`}</Text>
                        )}
                        <LinearGradient
                            colors={['#FF9FC7', '#F32878']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={[commonStyles.linearButton, styles.linearButton]}>
                            <TouchableOpacity
                                style={commonStyles.button}
                                onPress={handleSubmit((data) => {
                                    if (!isChecked) {
                                        setCheckBox(true)
                                        return
                                    }
                                    setCheckBox(false)
                                    navigation.navigate("Ten-cua-header7")
                                })}>
                                <Text style={styles.btntxt}>Đăng kí</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Ten-cua-header4")}
                            style={styles.txtbottom}>
                            <Text>Bạn đã có tài khoản?<Text style={styles.txtInputHighligth}>Đăng nhập</Text></Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </ImageBackground>

    )
}

export default signupScreen

const styles = StyleSheet.create({
    btntxt: {
        fontFamily: 'Roboto',
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 10,
    },
    checkbox: {
        margin: 0,
        padding: 0,

    },
    imgacess: {
        width: 99,
        height: 99,
        borderRadius: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 10,
        overflow: 'hidden',
    },
    imgPreview: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        // backgroundColor: 'white',
    },
    inputContainer: {
        marginTop: 20,
        // backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backgroundColor: "black",
        height: "80%",
        width: "90%",
        borderRadius: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',

    },
    iconWrapper: {

    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: 270,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'gray',
        marginTop: 10,
    },
    errorText: {
        fontFamily: 'Roboto',
        color: 'red',
        fontSize: 12,
        marginTop: 5,
    },
    linearButton: {

    },
    txtinput: {
        fontFamily: 'Roboto',
        flex: 1,
        padding: 5,
        width: '90%'
    },
    txtdesc: {
        fontFamily: 'Roboto',
        fontSize: 15,
        textAlign: 'left',
        lineHeight: 20,
    },
    txtbottom: {
        marginTop: 20,
    },
    txtInputHighligth: {
        fontFamily: 'Roboto',
        fontSize: 16,
        color: 'violet',
        textAlign: 'center',
    }
})