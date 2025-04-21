import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { Profiler, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { ActivityIndicator } from 'react-native'
import { commonStyles } from '../component/commonStyles'
import { DrinkCoffeeStore } from '../component/store/mstCoffeeStore'
import { getSnapshot } from 'mobx-state-tree'
import { dimension } from '../component/dimension/dimension'
import type { ProfilerOnRenderCallback } from 'react'


const store = DrinkCoffeeStore.create({
    drinks: [],
    isLoading: false,
    error: '',
})

const DrinkList = observer(() => {
    const onRender: ProfilerOnRenderCallback = (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
        console.log(`Profiler ID: ${id}, Phase: ${phase}, Actual Duration: ${actualDuration}, Base Duration: ${baseDuration}, Start Time: ${startTime}, Commit Time: ${commitTime}`);
    };


    {/**
        store.fetchDrinks() là 1 hàm bất đồng bộ trả về Promise vì flow hoạt động giống async/await
        .then() xử lí kết quả của promise -> khi fetch thành công và lưu vào store.drinks rồi thì in ra dữ liệu
        */}
    useEffect(() => {
        store.fetchDrinks().then(() => {
            console.log("Data fetched:", getSnapshot(store.drinks));
        });
    }, []);


    if (store.isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="small" color="black" />
                <Text>Dang tai...</Text>
            </View>
        )
    }
    if (store.error) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={commonStyles.errorText}>Error: {store.error}</Text>
            </View>
        )
    }
    const renderItem = ({ item }: any) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}VND</Text>
            <Text style={styles.subText}>{item.description}</Text>
        </View>
    );
    return (
            <View style={commonStyles.container}>
                <FlatList
                    data={store.drinks}
                    keyExtractor={(item => item.id)}
                    renderItem={renderItem}
                    getItemLayout={(_data, index) => (
                        {length: dimension.ITEM_HEIGHT, offset: dimension.ITEM_HEIGHT * index, index}
                    )} //cung cap chieu dai, vi tri ban dau(offset) va index cua item -> Flatlist không cần đo lường động cho từng item
                       //không cần sử dụng data ở đây vì chiều cao và vị trí tính toán dựa trên index và dimension rồi
                    initialNumToRender={15} //render 15 item đầu tiên trước
                />
            </View>
    )
})


export default DrinkList

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        alignItems: 'center',
    },
    itemContainer: {
        padding: 15,
        marginBottom: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        width: dimension.ITEM_WIDTH
    },
    itemName: {
        fontSize: 16,
        fontFamily: 'Roboto-Bold',
    },
    itemPrice: {
        fontSize: 14,
        fontFamily: 'Roboto',
        color: 'gray',
    },
    subText: {
        fontFamily: 'Roboto-Light',
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.3)',
        width: 160,
        height: 43,
    },
})