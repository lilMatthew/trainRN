import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Item = React.memo(({ label, onClick }: { label: string; onClick: () => void }) => {
    console.log(`Rendering Item: ${label}`); // Log để kiểm tra khi nào Item được render
    return (
        <TouchableOpacity onPress={onClick} style={styles.item}>
            <Text>{label}</Text>
        </TouchableOpacity>
    );
});

export default Item;

const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#f0f0f0',
    },
});