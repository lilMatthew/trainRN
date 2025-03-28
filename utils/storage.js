import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage from 'react-native-storage';

const storage = new Storage({
    size: 1000, // số lưuọng tối đa
    storageBackend: AsyncStorage, // dùng AsyncStorage làm BE
    defaultExpires: null, //không tự động hết hạn
    enableCache: true, //bật cache
})

export default storage;