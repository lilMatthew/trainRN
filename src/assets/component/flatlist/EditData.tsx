import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { dimension } from '../dimension/dimension';

type EditDataProps = {
  initialData: {
    name: string;
    age: string;
    occupation: string;
  };
  onSave: (updatedData: { name: string; age: string; occupation: string }) => void;
  onCancel: () => void;
};

const EditData: React.FC<EditDataProps> = ({ initialData, onSave, onCancel }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: initialData,
  });

  const onSubmit = (data: { name: string; age: string; occupation: string }) => {
    onSave(data); // Gọi hàm onSave khi nhấn "Save"
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChange}
            placeholder="Name"
          />
        )}
      />
      <Controller
        control={control}
        name="age"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChange}
            placeholder="Age"
            keyboardType="numeric"
          />
        )}
      />
      <Controller
        control={control}
        name="occupation"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChange}
            placeholder="Occupation"
          />
        )}
      />
      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={handleSubmit(onSubmit)} />
        <Button title="Cancel" onPress={onCancel} color="red" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: dimension.SCREEN_HEIGHT,
    padding: 10,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
  },
  input:{
    width: dimension.SCREEN_WIDTH * 0.9,
    height: dimension.ITEM_HEIGHT * 0.5,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 20,
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default EditData;