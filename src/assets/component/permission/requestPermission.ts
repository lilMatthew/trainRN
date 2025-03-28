import { PERMISSIONS, RESULTS, check, request } from "react-native-permissions";
import { Alert, PermissionsAndroid, Platform } from "react-native";

{/**
    PERMISSIONS : Đây là một đối tượng chứa danh sách các quyền mà bạn có thể yêu cầu trên Android và iOS
    const cameraPermission = PERMISSIONS.ANDROID.CAMERA; // Android
    const locationPermission = PERMISSIONS.IOS.LOCATION_WHEN_IN_USE; // iOS
    */}

{/**
    RESULTS : là một danh sách các kết quả có thể nhận được khi kiểm tra hoặc yêu cầu quyền.
    RESULTS.GRANTED: Quyền đã được cấp
    RESULTS.DENIED: Quyền đã bị từ chối và CÓ thể yêu cầu lại
    RESULTS.BLOCKED: Quyền đã bị chặn và KHÔNG thể yêu cầu lại
    RESULTS.UNAVAILABLE: Quyền không khả dụng trên thiết bị
    */}

{/**
    check : Hàm này sẽ kiểm tra trạng thái của quyền (Promise) || then(callback) => xử lí result Promise thành công || 
    catch(callback) => xử lí result Promise thất bại || asyn/await

    check(PERMISSIONS.ANDROID.CAMERA)
    .then(result => {
    if (result === RESULTS.GRANTED) {
      console.log('Quyền đã được cấp');
    } else {
      console.log('Quyền chưa được cấp');
    }
    })
    .catch(error => console.log(error));
    */}

{/**
    request: yêu cầu người dùng cấp quyền nếu nó chưa có quyền truy cập (Promise)
    request(PERMISSIONS.ANDROID.CAMERA)
    .then(result => {
    if (result === RESULTS.GRANTED) {
      console.log('Người dùng đã cấp quyền Camera');
    } else {
      console.log('Người dùng từ chối quyền Camera');
    }
    })
    .catch(error => console.log(error));
    */}

    export const requestCameraPermission = async () => {
        try{
            if(Platform.OS === 'ios'){
                const result = await request(PERMISSIONS.IOS.CAMERA);
                return result;
            } else {
                const result = await request(PERMISSIONS.ANDROID.CAMERA);
                return result;
            }
        } catch (error){
            console.warn(error);
            return null;
        }
    }

    export const checkCameraPermission = async () => {
        try {
            if(Platform.OS === 'ios'){
                const result = await check(PERMISSIONS.IOS.CAMERA);
                return result;
            } else {
                const result = await check(PERMISSIONS.ANDROID.CAMERA);
                return result;
            }
        } catch (error) {
            console.warn(error);
            return null;
        }
    }

    export const requestLibraryPermission = async () => {
        try {
            if(Platform.OS === 'ios'){
                const result = await request(PERMISSIONS.IOS.MEDIA_LIBRARY);
                return result;
            } else {
                const result = await request(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
                return result;
            }
        } catch (error) {
            console.warn(error);
            return null;
        }
    }

    export const checkLibraryPermission = async () => {
        try {
            if(Platform.OS === 'ios'){
                const result = await check(PERMISSIONS.IOS.MEDIA_LIBRARY);
                return result;
            } else {
                const result = await check(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
                return result;
            }
        } catch (error) {
            console.warn(error);
            return null;
        }
    }