import React from 'react';
import {
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  Platform,
  StyleSheet,
  ViewStyle,
} from 'react-native';

interface KeyboardAvoidingViewProps {
    children: React.ReactNode;
    style?: ViewStyle;
}


const KeyboardAvoidingView:React.FC<KeyboardAvoidingViewProps> = ({children,style}) => {
  return (
    <RNKeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.container, style]}
    >
      {children}
    </RNKeyboardAvoidingView>
  )
}

export default KeyboardAvoidingView

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})