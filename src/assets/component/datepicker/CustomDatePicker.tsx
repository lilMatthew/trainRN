import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { commonStyles } from '../commonStyles';
import { dimension } from '../dimension/dimension';
import Modal from 'react-native-modal';

type CustomDatePickerProps = {
  visible: boolean;
  onSave?: (date: Date) => void;
  onCancel?: (date:Date) => void;
  showSaveButton?: boolean;
  showCancelButton?: boolean;
};

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  visible,
  onSave,
  onCancel,
  showSaveButton = true, // Mặc định hiển thị nút Lưu
  showCancelButton = true, // Mặc định hiển thị nút Hủy
}) => {
  const [date, setDate] = useState(new Date());
  // if (!visible) return null;

  return (
      <View style={styles.datePickerContainer}>
        <DatePicker
          date={date}
          mode="date"
          onDateChange={setDate} // Cập nhật ngày khi người dùng chọn
        />
        <View style={styles.buttonContainer}>
          {showCancelButton && (
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => {
                if (onCancel) onCancel(date);
              }}
            >
              <Text style={styles.buttonText}>Hủy</Text>
            </TouchableOpacity>
          )}

          {showSaveButton && (
            <TouchableOpacity
              style={styles.saveButton}
              onPress={() => {
                if (onSave) onSave(date);
              }}
            >
              <Text style={styles.buttonText}>Lưu</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
  );
};

export default CustomDatePicker;

const styles = StyleSheet.create({
  datePickerContainer: {
    width: dimension.ITEM_WIDTH,
    height: dimension.ITEM_HEIGHT * 3,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 50,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    alignItems: 'center',
  },
  saveButton: {
    flex: 1,
    backgroundColor: 'violet',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});