import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { mobxStore } from '../component/store/mobxStore';
import { observer } from 'mobx-react-lite';
import { dimension } from '../component/dimension/dimension';
import { commonStyles } from '../component/commonStyles';

const MobxScreenTest = observer(() => {
    return (
        <View style={commonStyles.container}>
            <View style={styles.infoContainer}>
                <Text style={commonStyles.subText}>Tổng số lượng: {mobxStore.totalItems}</Text>
                <Text style={commonStyles.subText}>Tổng tiền: {mobxStore.totalPrice}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button title='Thêm sản phẩm' onPress={() => {
                    mobxStore.addItem({ id: '1', name: 'Coca', price: 100, quantity: 1 })
                    mobxStore.addItem({ id: '2', name: 'Pepsi', price: 200, quantity: 1 })
                    // mobxStore.addItem({ id: '3', name: 'Monster', price: 300, quantity: 1 })
                }} />
                <Button title='Xóa giỏ hàng' onPress={() => {
                    mobxStore.clearCart()
                }} />
                <Button title='Xóa sản phẩm' onPress={() => {
                    mobxStore.removeItem('1')
                }} />
            </View>

        </View>
    )
});

export default MobxScreenTest;

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'column',
        gap: 10, 
    },
    infoContainer: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: 'violet',
        borderRadius: 10,
    },
});