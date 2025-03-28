import { useState } from 'react';

type ItemProp = {
  id: string;
  name: string;
  age: number;
  occupation: string;
};

const useCustomFlatList = (initialData: ItemProp[]) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<ItemProp[]>(initialData);
  

  // Hàm refresh
  const handleRefresh = async (resetData: ItemProp[]) => {
    setRefreshing(true);
    setTimeout(() => {
      setData(resetData); // Đặt lại dữ liệu ban đầu
      setSelectedId(null); // Xóa trạng thái selected
      setRefreshing(false);
      console.log('Refresh roi nhe!');
    }, 1000);
  };

  const isSelected = (id: string) => selectedId === id;

   // Hàm xóa mục
   const deleteData = (id: string) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
    console.log(`Data ${id} vua bi xoa`);
  };

  const editData = (id :string, updatedInfo: Partial<ItemProp>) => {
    const newData = data.map((item) => 
      item.id === id ? {...item, ...updatedInfo} : item
    ) 
    setData(newData)
    console.log(`Data ${id} vua bi sua`);
  }

  return {
    data,
    setData,
    refreshing,
    deleteData,
    handleRefresh,
    selectedId,
    setSelectedId,
    isSelected,
    editData
  };
};

export default useCustomFlatList;