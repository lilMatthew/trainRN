import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { bgimg } from '../component/ImagePath'
import { commonStyles } from '../component/commonStyles'
import KeyboardAvoidingView from '../helper/keyboardAvoidingView'
import { Controller, useForm } from 'react-hook-form'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { dimension } from '../component/dimension/dimension'
import LinearGradient from 'react-native-linear-gradient'

const signinTestHook = () => {
  const { control, handleSubmit, formState: { errors }, register, watch } = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  })
  const onSubmit = (data: { username: string, password: string }) => {
    console.log("Form", data)
  }
  const watchUsername = watch('username')
  useEffect(() => {
    console.log("username thay doi: ", watchUsername)
  }, [watchUsername]) //su dung watch de theo doi khi username thay doi
  return (
    <ImageBackground
      source={bgimg}
      style={commonStyles.backgroundImage}>
      <KeyboardAvoidingView>
        <ScrollView contentContainerStyle={commonStyles.scrollViewContent}>
          <SafeAreaProvider>
            <SafeAreaView></SafeAreaView>
          </SafeAreaProvider>
          <View style={commonStyles.container}>
            {/**User name su dung Controller */}
            <Controller
              name="username"
              control={control}
              rules={{
                required: 'usename la bat buoc',
                minLength: 6,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View style={styles.inputWrapper}>
                  <TextInput
                    placeholder="Username"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={styles.txtinput}
                  />
                </View>
              )}
            />
            {errors.username && <Text style={styles.errortxt}>{errors.username.message}</Text>}


            {/**Password su dung register -> ket noi truc tiep den hook form */}
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.txtinput}
                placeholder="Mật khẩu"
                secureTextEntry={true}
                {...register('password', {
                  required: 'Password la bat buoc',
                  minLength: 6,
                })}
              />
              {errors.password && <Text style={styles.errortxt}>{errors.password.message}</Text>}
            </View>
            <LinearGradient
              colors={['#FF9FC7', '#F32878']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={commonStyles.linearButton}>
              <TouchableOpacity
                style={commonStyles.button}
                onPress={handleSubmit(onSubmit)}>
                <Text style={commonStyles.buttonText}>SignIn</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

export default signinTestHook

const styles = StyleSheet.create({
  errortxt: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: dimension.ITEM_WIDTH,
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
})