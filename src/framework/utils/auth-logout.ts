import {setAuthFlowRoot} from '@common/root-navigations';
import {STOEAGE_KEY} from '@constants/app';
import EncryptedStorage from 'react-native-encrypted-storage';
import {setToken} from './get-token';

export const authLogout = async () => {
  try {
    await EncryptedStorage.setItem(STOEAGE_KEY.DEFALUT_ZONE, '');
    await setToken('');
    await setAuthFlowRoot();
  } catch (error) {
    console.log('ERROR', error);
    return null;
  }
};
