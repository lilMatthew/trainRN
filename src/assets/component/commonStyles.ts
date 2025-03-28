import { StyleSheet } from 'react-native';
import { dimension } from './dimension/dimension';

export const commonStyles = StyleSheet.create({
    button: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'Roboto',
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText:{
        fontFamily: 'Roboto',
        color: 'red',
        fontSize: 12,
        marginTop: 5,
    },
    linearButton: {
        borderRadius: 25,
        width: dimension.ITEM_WIDTH,
        height: 50,
        marginTop: 10
    },
    inputWrapper:{
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
        fontSize: 18,
        color: 'rgba(0, 0, 0, 0.3)',
        textAlign: 'center',
        width: 160,
        height: 43,
        alignSelf: 'center',
    },
    scrollViewContent:{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 30,
    },
    keyboardAvoidingView:{
        flex: 1,
    }
});