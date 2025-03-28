import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { bgimg } from '../component/ImagePath'
import { commonStyles } from '../component/commonStyles'
import KeyboardAvoidingView from '../helper/keyboardAvoidingView'
import LinearGradient from 'react-native-linear-gradient'
import CustomDatePicker from '../component/datepicker/CustomDatePicker'
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import { useCustomDatePicker } from '../component/datepicker/logicCustom'
import CustomModalGlobal from '../component/modal/CustomModal'
import CustomMutipleSelectList from '../component/multiple-choice/CustomMutipleChoice'
import { Button } from 'react-native-elements'



const informationScreen = () => {
    const navigation: NavigationProp<RootStackParamsList> = useNavigation()
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            nickname: '',
            startdate: '',
            relationship: '',
            annione: '',
            annitwo: '',
            annithree: '',
        }
    })

    const { isVisiable,
        selectedDate,
        openDatePicker,
        closeDatePicker,
        handleDateChange } = useCustomDatePicker()
    return (
        <ImageBackground
            source={bgimg}
            style={commonStyles.backgroundImage}>
            <KeyboardAvoidingView>
                <ScrollView contentContainerStyle={commonStyles.scrollViewContent}>
                    <View style={commonStyles.container}>
                        <Controller
                            control={control}
                            rules={{
                                required: true
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <View style={commonStyles.inputWrapper}>
                                    <TextInput
                                        placeholder='Nick name'
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        style={styles.txtinput}
                                    />
                                </View>
                            )}
                            name="nickname"
                        />
                        <Controller
                            control={control}
                            rules={{
                                required: true
                            }}
                            render={({ field: { onChange, value } }) => (
                                <View style={styles.dateInputWrapper}>
                                    <TouchableOpacity
                                        style={commonStyles.inputWrapper}
                                        onPress={openDatePicker}>
                                        <Text style={styles.txtinput}>
                                            {value ? value : 'Ngày bắt đầu'}
                                        </Text>
                                    </TouchableOpacity>
                                    <CustomModalGlobal
                                        isVisible={isVisiable}
                                        onClose={closeDatePicker}
                                    >
                                        <CustomDatePicker
                                            visible={isVisiable}
                                            onCancel={closeDatePicker}
                                            onSave={(date) => {
                                                handleDateChange(date)
                                                onChange(date.toISOString().split('T')[0])
                                                closeDatePicker()
                                            }}
                                        />
                                    </CustomModalGlobal>
                                </View>
                            )}
                            name="startdate"
                        />
                        {/* {errors.startdate &&
                            <Text style={commonStyles.errorText}>
                                {errors.startdate.message}
                            </Text>
                        } */}
                        <Controller
                            control={control}
                            rules={{
                                required: true
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <View style={styles.dateInputWrapper}>
                                    {/* <TouchableOpacity
                                    style={[commonStyles.inputWrapper]}
                                    onPress={() => { }}>
                                    <TextInput
                                        placeholder='Mối quan hệ'
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        style={styles.txtinput}
                                    />
                                    <SimpleIcon name="arrow-down" size={18} color='gray' />
                                    </TouchableOpacity> */}
                                    <CustomMutipleSelectList
                                    value={value}
                                    onChange={onChange}
                                    />
                                </View>
                            )}
                            name="relationship"
                        />
                        <Controller
                            control={control}
                            rules={{
                                required: true
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <View style={commonStyles.inputWrapper}>
                                    <TextInput
                                        placeholder='Ngày kỉ niệm 1'
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        style={styles.txtinput}
                                    />
                                </View>
                            )}
                            name="annione"
                        />
                        <Controller
                            control={control}
                            rules={{
                                required: true
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <View style={commonStyles.inputWrapper}>
                                    <TextInput
                                        placeholder='Ngày kỉ niệm 2'
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        style={styles.txtinput}
                                    />
                                </View>
                            )}
                            name="annitwo"
                        />
                        <Controller
                            control={control}
                            rules={{
                                required: true
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <View style={commonStyles.inputWrapper}>
                                    <TextInput
                                        placeholder='Ngày kỉ niệm 3'
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        style={styles.txtinput}
                                    />
                                </View>
                            )}
                            name="annithree"
                        />
                        <LinearGradient
                            colors={['#FF9FC7', '#F32878']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={commonStyles.linearButton}
                        >
                            <TouchableOpacity
                                style={commonStyles.button}
                                onPress={() => { }}
                            >
                                <Text style={commonStyles.buttonText}>Đăng kí</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}

export default informationScreen

const styles = StyleSheet.create({
    dateInputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10,
    },
    txtinput: {
        fontFamily: 'Roboto',
        fontSize: 16,
        flex: 1,
        padding: 5,
        color: 'gray',
    },
})