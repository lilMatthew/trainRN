import React from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from "react-native";
import { useForm, FormProvider, Controller, useFormContext } from "react-hook-form";

const PhoneInputComponent = () => {
  const { control, setValue } = useFormContext(); // Lấy các phương thức từ FormProvider

  return (
    <Controller
      control={control}
      name="phonenumber"
      rules={{
        required: "Số điện thoại là bắt buộc",
        pattern: {
          value: /^[0-9]{9}$/,
          message: "Số điện thoại phải có 9 chữ số",
        },
      }}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Nhập số điện thoại"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
          {error && <Text style={styles.errorText}>{error.message}</Text>}
        </View>
      )}
    />
  );
};

const TestUseForm = () => {
  const methods = useForm({
    defaultValues: {
      phonenumber: "",
    },
  });

  const { handleSubmit, setValue } = methods;

  const onSubmit = (data:any) => {
    console.log("Submitted Data:", data);
  };

  const handleSetPhoneNumber = () => {
    setValue("phonenumber", "012345678"); // Đặt giá trị mặc định cho số điện thoại
  };

  return (
    <FormProvider {...methods}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Form with FormProvider</Text>
        <PhoneInputComponent />
        <Button title="Set Default Phone Number" onPress={handleSetPhoneNumber} />
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </ScrollView>
    </FormProvider>
  );
};

export default TestUseForm;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  errorText: {
    color: "red",
    fontSize: 12,
  },
});