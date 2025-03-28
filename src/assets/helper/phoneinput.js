import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import CountryPicker from 'react-native-country-picker-modal';

const PhoneInputComponent = ({onChange, onBlur, value}) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [countryPickerVisible, setCountryPickerVisible] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const phoneInput = useRef(null);


    const onSelectCountry = (country) => {
        setSelectedCountry(country);
        setPhoneNumber('');
        setCountryPickerVisible(false);

    };

    return (
        <View style={styles.container}>
        <PhoneInput
            ref={phoneInput}
            defaultValue={phoneNumber}
            defaultCode={selectedCountry?.cca2 || 'US'} 
            onChangeFormattedText={(text) => setPhoneNumber(text)}
            containerStyle={styles.phoneInput}
            onChangeText={onChange} 
            onBlur={onBlur} 
            value={value}
        />

        {countryPickerVisible && (
            <CountryPicker
                withFilter
                withFlag
                withCountryNameButton
                onSelect={onSelectCountry}
                onClose={() => setCountryPickerVisible(false)}
                visible={countryPickerVisible}
            />
        )}
    </View>
    );
};

export default PhoneInputComponent;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 30,

    },
    phoneInput: {
        width: '90%',
        marginBottom: 10,
    },
});