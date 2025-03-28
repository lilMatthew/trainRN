import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { dimension } from '../dimension/dimension';
import { color } from 'react-native-elements/dist/helpers';

type CustomMutipleChoiceProps = {
  value: string; // Giá trị hiện tại
  onChange: (value: string) => void; // Hàm thay đổi giá trị
};

const CustomMutipleChoice: React.FC<CustomMutipleChoiceProps> = ({ value, onChange }) => {
  const data = [
    { key: 1, value: 'Độc thân' },
    { key: 2, value: 'Có crush' },
    { key: 3, value: 'Đã kết hôn' },
  ];

  return (
    <View style={styles.container}>
      <SelectList
        setSelected={onChange} // Gọi hàm onChange khi chọn giá trị
        data={data}
        save="value" // Lưu giá trị là `value`
        placeholder="Chọn mối quan hệ"
        defaultOption={{ key: value, value: value }}    
        dropdownStyles={{
            backgroundColor: "white",
            position: "absolute",
            top: 40,
            width: "100%",
            zIndex: 999,
          }} // Hiển thị giá trị hiện tại
          dropdownTextStyles = {{
            fontFamily: "Roboto",
            fontSize: 16,
            color: "gray"
          }} 
          inputStyles={{
            fontFamily: "Roboto",
            fontSize: 16,
            color: "gray"
          }}
      />
    </View>
  );
};

export default CustomMutipleChoice;

const styles = StyleSheet.create({
  container: {
    width: 270,
  },
});