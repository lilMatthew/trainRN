import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { checkCameraPermission, checkLibraryPermission, requestCameraPermission, requestLibraryPermission } from './requestPermission'
import { RESULTS } from 'react-native-permissions'
import { CameraOptions, ImageLibraryOptions, launchCamera, launchImageLibrary } from 'react-native-image-picker'
import Toast from 'react-native-toast-message'
import { CustomDialog, showToast } from '../dialog-notification/notification'
import { useStore } from 'zustand'
import { Icon, Image } from 'react-native-elements'

interface ImageProduct{
    arrData: any
    deleteImage: (index: any, item: any) => void
    uploadImage: (imageArray: any[],
        checkUploadSlider: boolean,
        indexItem ?: number,
    ) => void
}

export default function ImageProduct(props: ImageProduct) {
    const {arrData, deleteImage, uploadImage} = props



    const handleCameraUse = async () =>{
        const permissionStatus = await checkCameraPermission();
        console.log(permissionStatus)

        if(permissionStatus === RESULTS.GRANTED){
            console.log('camera permission granted')

            const options : CameraOptions = {
                cameraType: 'back',
                mediaType: 'photo',
                quality: 1,
                maxHeight : 500,
                maxWidth: 500,
            }
            launchCamera(options, (response) => {
                console.log('Response = ', response)
                if(response.didCancel){
                   console.log('User cancelled image picker')
                } else if(response.errorCode){
                    console.log('ImagePicker Error: ', response.errorMessage)
                } else if(response.errorCode){
                    console.log("User cancelled photo picker1");
                } else if(response?.assets){
                    console.log(response?.assets[0].uri)
                    const imageAssets = [response?.assets[0]]
                    uploadImage(imageAssets, true, -1)
                }
            });
        } else if (permissionStatus === RESULTS.DENIED){
            const newStatus = await requestCameraPermission()
            if(newStatus === RESULTS.GRANTED){
                console.log('camera permission granted')
            } else {
                console.log('camera permission denied')
                showToast('error', 'Quyền truy cập camera bị từ chối')
                CustomDialog({
                    visible: true,
                    title: 'Thông báo',
                    description: 'Quyền truy cập camera bị từ chối',
                    onCancel: () => {},
                    onConfirm: () => {}
                })
            }
        } else if(permissionStatus === RESULTS.BLOCKED){
            showToast('error', 'Quyền truy cập camera bị từ chối')
            console.log('camera permission blocked')
        }
    }

    const handleLibraryUse = async () =>{
        const permissionStatus = await checkLibraryPermission();
        console.log(permissionStatus)

        if(permissionStatus === RESULTS.GRANTED){
            const option: ImageLibraryOptions = {
                mediaType: 'photo',
                quality: 1,
                maxHeight: 500,
                maxWidth: 500,
                selectionLimit: 1,
            }
            launchImageLibrary(option, (response) => {
                console.log('Response = ', response)
                if(response.didCancel){
                    console.log('User cancelled image picker')
                } else if(response.errorCode){
                    console.log('ImagePicker Error: ', response.errorMessage)
                } else if(response.errorCode){
                    console.log("User cancelled photo picker1");
                } else if(response?.assets && response.assets.length > 0){
                    const selectedAssets = [response?.assets[0]]
                    uploadImage(selectedAssets, true, -1)
                }
            });
        } else if (permissionStatus === RESULTS.DENIED) {
            const newStatus = await requestLibraryPermission()
            if(newStatus === RESULTS.GRANTED){
                console.log('library permission granted')
            } else {
                console.log('library permission denied')
                showToast('error', 'Quyền truy cập thư viện bị từ chối')
                CustomDialog({
                    visible: true,
                    title: 'Thông báo',
                    description: 'Quyền truy cập thư viện bị từ chối',
                    onCancel: () => {},
                    onConfirm: () => {}

                })
            }
        } else if(permissionStatus === RESULTS.BLOCKED){
            showToast('error', 'Quyền truy cập thư viện bị từ chối')
            console.log('library permission blocked')
        } else if(permissionStatus === RESULTS.UNAVAILABLE){
            const options: ImageLibraryOptions = {
                mediaType: 'photo',
                quality: 1,
                maxHeight: 500,
                maxWidth: 500,
                selectionLimit: 1
            };
            launchImageLibrary(options, (response) => {
                console.log("==========> response4564546", response);
                if (response.didCancel) {
                    console.log("User cancelled photo picker1");
                } else if (response.errorCode) {
                    console.log("ImagePicker Error2: ", response.errorCode);
                } else if (response.errorCode) {
                    console.log("User cancelled photo picker1");
                } else if (response?.assets && response.assets.length > 0) {
                    const selectedAssets = response.assets.map((asset) => asset);
                    if (selectedAssets.length + arrData.length > 6) {
                        showToast("error", "Số lượng ảnh vượt quá giới hạn");
                    } else {
                        uploadImage(selectedAssets, true, -1);
                    }
                }
            });
        }
    }
    return(
        <View style={styles.container}>
        <FlatList
            data={arrData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
                <View style={styles.imageWrapper}>
                    <Image source={{ uri: item }} style={styles.image} />
                    <TouchableOpacity
                        style={styles.deleteButton}
                        onPress={() => deleteImage(index, item)}
                    >
                        <Icon
                            name="close"
                            size={16}
                            style={styles.deleteIcon}
                        />
                    </TouchableOpacity>
                </View>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    imageWrapper: {
        position: 'relative',
        marginRight: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    deleteButton: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 15,
        padding: 5,
    },
    deleteIcon: {
        width: 15,
        height: 15,
        tintColor: 'white',
    },
})