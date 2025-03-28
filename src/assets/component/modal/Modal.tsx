import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import { dimension } from '../dimension/dimension';
import { Icon } from 'react-native-elements';

type CustomModalProps = {
    headerText: string;
    contentText: string;
    buttonText?: string;

};

const CustomModal: React.FC<CustomModalProps> = ({
    headerText,
    contentText,
    buttonText,

}) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }; 
    const togleCloseModal = () => {
        console.log('Close Modal');
        setModalVisible(false);
    }


    return (
        <>
            {/* Nút mở Modal */}
            <TouchableOpacity onPress={toggleModal}>
                <Text style={styles.txtInputContainer}>
                    Bằng cách sử dụng ứng dụng của chúng tôi,
                    bạn đồng ý với {''}
                    <Text style={styles.txtInputHighligth}>Chính sách bảo mật</Text> {''}và {''}
                    <Text style={styles.txtInputHighligth}>Điều khoản sử dụng</Text> của chúng tôi
                </Text>
            </TouchableOpacity>

            {/* Modal */}
            <Modal
                isVisible={isModalVisible}
                animationIn="slideInUp"
                animationOut="slideOutDown"
                onBackButtonPress={toggleModal}
                animationInTiming={1000}
                animationOutTiming={1000}
                backdropColor='green'
            >
                <View style={styles.modalContainer}>
                    <View style = {styles.headerAndIcon}>
                        <Text style={styles.headerText}>{headerText}</Text>
                        <Icon name="delete-outline" size={18} onPress={toggleModal}/>
                    </View>

                    <Text style={styles.contentText}>{contentText}</Text>
                    <LinearGradient
                        colors={['#FFBF35', '#FFA900']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.linearButton2}
                    >
                        <TouchableOpacity onPress={()=> {
                            togleCloseModal()
                        }} style={styles.buttonSkip}>
                            <Text style={styles.buttonText}>{buttonText}</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </Modal>

        </>
    );
};

export default CustomModal;

const styles = StyleSheet.create({
    modalContainer: {
        position: 'absolute',
        height: dimension.SCREEN_HEIGHT * 0.4,
        width: "100%",
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    contentText: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        marginHorizontal: 10,
    },
    linearButton2: {
        borderRadius: 25,
        width: 109,
        height: 35,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    buttonSkip: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
    },
    txtInputContainer: {
        fontFamily: 'Roboto-Light',
        fontSize: 15,
        textAlign: 'center',
        color: 'black',
        marginHorizontal: 25,
        marginTop: 10,
    },
    txtInputHighligth: {
        color: 'violet'
    },
    headerAndIcon:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    }

});