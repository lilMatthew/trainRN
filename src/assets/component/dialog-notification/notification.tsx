import React from 'react';
import { Alert } from 'react-native';
import Toast from 'react-native-toast-message';
import Dialog from 'react-native-dialog';

// ALERT_TYPE
export const showAlert = (title: string, message: string, onConfirm?: () => void) => {
    Alert.alert(
        title,
        message,
        [
            {
                text: 'Cancel',
                style: 'cancel',
            },
            {
                text: 'OK',
                onPress: onConfirm,
            },
        ],
        { cancelable: true }
    );
};

// TOAST
export const showToast = (type: 'success' | 'error' | 'info', text1: string, text2?: string) => {
    Toast.show({
        type,
        text1,
        text2,
        position: 'top',
        visibilityTime: 3000,
        autoHide: true,
        topOffset: 50,
    });
};

// DIALOG
export const CustomDialog = ({
    visible,
    title,
    description,
    onCancel,
    onConfirm,
}: {
    visible: boolean;
    title: string;
    description: string;
    onCancel: () => void;
    onConfirm: () => void;
}) => {
    return (
        <Dialog.Container visible={visible}>
            <Dialog.Title>{title}</Dialog.Title>
            <Dialog.Description>{description}</Dialog.Description>
            <Dialog.Button label="Cancel" onPress={onCancel} />
            <Dialog.Button label="OK" onPress={onConfirm} />
        </Dialog.Container>
    );
};