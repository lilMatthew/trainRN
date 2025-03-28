import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomFlatList from '../component/flatlist/CustomFlatlist';
import { commonStyles } from '../component/commonStyles';
import useCustomFlatList from '../component/flatlist/LogicFlatlist';
import humansData from '../component/data/human.json';

const matchingScreen = () => {
  const {
    data,
    refreshing,
    deleteData,
    handleRefresh,
    isSelected,
    setSelectedId,
    editData
  } = useCustomFlatList(humansData);

  return (
    <View style={commonStyles.container}>
      <CustomFlatList
        data={data}
        refreshing={refreshing}
        deleteData={deleteData}
        handleRefresh={() => handleRefresh(humansData)}
        editData={editData}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default matchingScreen;