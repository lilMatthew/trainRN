import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Modal from 'react-native-modal';
import { dimension } from '../dimension/dimension';

type CustomModalGlobalProps = {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const CustomModalGlobal: React.FC<CustomModalGlobalProps> = ({
  isVisible,
  onClose,
  children,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      style={styles.modal}
    >

      <View style={styles.modalContent}>
        {children} {/* Nội dung bên trong Modal */}
      </View>
    </Modal>
  );
};

export default CustomModalGlobal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: dimension.ITEM_WIDTH,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
});