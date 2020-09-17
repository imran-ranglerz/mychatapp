import {asyncStorage}  from '@react-native-community/async-storage';

export const key = {
    uid = 'uid',
};

const setasyncStorage = async(key , item) =>{
    try{
        await asyncStorage.setItem(key, item)
    }
    catch(error){
     console.log(error)
    }
};

const getasyncStorage =  async(key) =>{
    try {
        const value = await asyncStorage.getItem(key);
        if(value){
            return value;
        }else{
            return null;
        }
    } catch (error) {
        error.log(error);
        return null;
    }
};

const clearasyncStorage =  async() =>{
    try {
        await asyncStorage.clear();
    } catch (error) {
        console.log(error);
        
    }
}

export { setasyncStorage, getasyncStorage, clearasyncStorage };