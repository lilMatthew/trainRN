import React, { useState } from 'react';
import { FlatList, RefreshControl, Text, TouchableOpacity, View, StyleSheet, Animated, PanResponder, TextInput } from 'react-native';
import { customText } from '../textStyle';
import { dimension } from '../dimension/dimension';
import { Button } from 'react-native-elements';
import { useForm } from 'react-hook-form';
import EditData from './EditData';

type ItemProp = {
  id: string;
  name: string;
  age: number;
  occupation: string;
};

type CustomFlatListProps = {
  data: ItemProp[];
  refreshing: boolean;
  deleteData: (id: string) => void;
  handleRefresh: () => void;
  editData: (id: string, updatedInfo: Partial<ItemProp>) => void;
};

const CustomFlatList: React.FC<CustomFlatListProps> = ({
  data,
  refreshing,
  deleteData,
  handleRefresh,
  editData
}) => {
  const [editingItem, setEditingItem] = useState<ItemProp | null>(null); // Lưu thông tin mục đang chỉnh sửa


  const handleEdit = (item: ItemProp) => {
    setEditingItem(item)
  }

  const handleSave = (updateData: { name: string, age: string, occupation: string }) => {
    if (editingItem) {
      editData(editingItem.id, {
        name: updateData.name,
        age: parseInt(updateData.age, 10),
        occupation: updateData.occupation
      })
      setEditingItem(null)
    }
  }

  const handleCancel = () => {
    setEditingItem(null)
  }
  const renderItem = ({ item }: { item: ItemProp }) => {
    const pan = new Animated.Value(0); //giá trị ban đầu của pan(có thể thay đổi) -> điều khiển vị trí của giao diện

    const panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => Math.abs(gestureState.dx) > 20, //kich hoat panResponder khi vuot qua 20
      onPanResponderMove: (_, gesture) => {
        if (gesture.dx > 0) { //neu vuốt sang phải
          Animated.timing(pan, {
            toValue: gesture.dx, //đặt gtri của pan = khoảng cách trên dx
            duration: 0, // không trễ
            useNativeDriver: false,
          }).start();
        }
      },
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dx > 100) {//nếu vuốt sang phải quá 100
          Animated.timing(pan, {
            toValue: 100, //set pan = giá trị 100
            useNativeDriver: false,
          }).start();
        } else { //vuốt k đủ xa thì trở lại vị trí đầu tiên
          Animated.spring(pan, {
            toValue: 0,
            useNativeDriver: false,
          }).start();
        }
      },
    });

    return (
      <View style={styles.rowContainer}>
        <View style={styles.hiddenContainer}>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => deleteData(item.id)}
          >
            <Text style={styles.deleteButtonText}>Xóa</Text>
          </TouchableOpacity>
        </View>
        <Animated.View
          {...panResponder.panHandlers} // panHandler chứa các sự kiện của PanResponder -> truyền đc hết các sự kiện của panResponder vào Animated.View
          style={[
            styles.itemContainer,
            { transform: [{ translateX: pan }] },

          ]}
        >
          <TouchableOpacity
            // style={styles.itemContainer}
            onPress={() => handleEdit(item)}>
            <Text style={customText.normalText}>{item.name}</Text>
            <Text style={customText.subText}>{`Age: ${item.age}`}</Text>
            <Text style={customText.subText}>{`Occupation: ${item.occupation}`}</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  };



  return (
    <View style={styles.container}>
      {editingItem && (
        <EditData
          initialData={{
            name: editingItem.name,
            age: editingItem.age.toString(),
            occupation: editingItem.occupation
          }}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: dimension.SCREEN_WIDTH,
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 10,
    padding: 5,
    overflow: 'hidden',
  },
  hiddenContainer: {
    position: 'absolute',
    width: 80,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 20,
    marginLeft: 10,
  },
  deleteButton: {
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 10,

  },
  deleteButtonText: {
    color: 'white',


  },
  itemContainer: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  },

});

export default CustomFlatList;