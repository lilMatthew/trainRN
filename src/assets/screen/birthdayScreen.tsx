import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { bgimg } from '../component/ImagePath'
import { commonStyles } from '../component/commonStyles'
import KeyboardAvoidingView from '../helper/keyboardAvoidingView'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { customText } from '../component/textStyle'
import CustomDatePicker from '../component/datepicker/CustomDatePicker'
import { Button } from 'react-native-elements'
import DatePicker from 'react-native-date-picker'
import { dimension } from '../component/dimension/dimension'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import { useCustomDatePicker } from '../component/datepicker/logicCustom'

const birthdayScreen = () => {

  const navigation: NavigationProp<RootStackParamsList> = useNavigation()
  const [isDatePickerVisible, setDatePickerVisibility] = useState(true)
      const {isVisiable,
          selectedDate,
          openDatePicker,
          closeDatePicker,
          handleDateChange} = useCustomDatePicker()
  return (
    <ImageBackground
      source={bgimg}
      style={commonStyles.backgroundImage}>
      <KeyboardAvoidingView>
        <SafeAreaProvider>
          <View style={[commonStyles.container, { justifyContent: 'flex-start' }]}>
            <View style={styles.textContainer}>
              <Text style={[customText.boldText]}> Bạn sinh ngày nào?</Text>
            </View>
            <View style={styles.dateFormat}>
              
                <CustomDatePicker
                  visible={isDatePickerVisible}
                  onCancel={closeDatePicker}
                  onSave={() => {}}
                  showCancelButton={false}
                  showSaveButton={false}
                />
             
            </View>
            <LinearGradient
              colors={['#FF9FC7', '#F32878']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={[commonStyles.linearButton, { marginTop: 30, width: dimension.ITEM_WIDTH*0.8 }]}>
              <TouchableOpacity
                style={commonStyles.button}
                onPress={() => { navigation.navigate('Information-Screen') }}
              >
                <Text style={commonStyles.buttonText}>Tiếp tục</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </SafeAreaProvider>
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

export default birthdayScreen

const styles = StyleSheet.create({
  textContainer: {
    marginTop: 50,
    marginBottom: 30,
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  dateFormat: {
    width: dimension.ITEM_WIDTH,
    height: dimension.ITEM_HEIGHT * 1.7,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
  }
})