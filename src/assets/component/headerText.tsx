import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface HeaderProps {
  headerText: string;
}

// Create a Component
const Header:React.FC<HeaderProps> = ({headerText}) => {
  const { headerStyle, bgHeader } = styles;

  return (
    <View style={bgHeader}>
      <Text style={headerStyle}>{headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bgHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  headerStyle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 22,
    textAlign: 'center',
    color: 'black',
  },
});

export default Header;