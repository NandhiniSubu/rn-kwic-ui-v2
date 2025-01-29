import {STOEAGE_KEY} from '@constants/app';
import EncryptedStorage from 'react-native-encrypted-storage';

export const getToken = async () => {
  //return 'eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..xDZJapJg2laVGjkf.B4JlncrwNunGGGKn8xcAYklvPT2wsZ_4W6Hxu-Yaw3F4aBdSchKFpIrTL4bXybzuEmaW6EkpGeivA0oNZgZ6JpgEo4QticxXzwEUDRItbCIZvz5IY7M32AaRw6PU1crlK-Xkk3lgWemtscNtk4j7IEEY3mmtZfDhDyuCic6XC88lG3Wki032bGDxFwOWwkzM2tSSUm5JfgyEO0VP2xWP3YrtPO4Xkivl9Z4a3lTw3EYdBhMLRZ7AjrJC8aK2MKQM6Rv5XXpRKb2WmObEAeiYVtXTlz3mqP81f8M.8d_NcNj8z3Khm1hLxNsx4w';
  try {
    const session = await EncryptedStorage.getItem(STOEAGE_KEY.USER_SESSION);
    if (typeof session === undefined) {
      return null;
    }

    return session;
  } catch (error) {
    return null;
  }
};

export const setToken = async (token = '') => {
  try {
    await EncryptedStorage.setItem('user_session', token);
    return true;
  } catch (error) {
    return null;
  }
};
