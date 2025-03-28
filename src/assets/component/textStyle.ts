// Date: 19/03/2025
import React from 'react'
import { StyleSheet } from 'react-native';

export const customText = StyleSheet.create({
    boldText:{
        fontFamily: 'Roboto-Bold',
        fontSize: 16,
        textAlign: 'center',
        color: 'black',
    },
    buttonText: {
        fontFamily: 'Roboto',
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
    highlightText:{
        fontFamily: 'Roboto',
        fontSize: 14,
        color: 'violet',
        textAlign: 'center',
    },
    headerText:{
        fontFamily: 'Roboto-Bold',
        fontSize: 30,
        color: '#FF4E98',
        textAlign: 'center',
        height: 73,
        width: 215,

    },
    subText: {
        fontFamily: 'Roboto-Light',
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.8)',
        textAlign: 'left',
        width: 160,
        paddingVertical: 5
    },
    normalText:{
        fontFamily: 'Roboto',
        fontSize: 16,
        textAlign: 'left',
        width: 160,
        paddingVertical: 5
    }
})