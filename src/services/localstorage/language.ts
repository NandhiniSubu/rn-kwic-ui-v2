import {STOEAGE_KEY} from '@constants/app';
import EncryptedStorage from 'react-native-encrypted-storage';

export const getSelectedLanguage = async () => {
  try {
    const session = await EncryptedStorage.getItem(
      STOEAGE_KEY.SELECTED_LANGUAGE,
    );
    if (typeof session === undefined) {
      return null;
    }

    return session;
  } catch (error) {
    return null;
  }
};

export const setSelectedLanguage = async (language = '') => {
  try {
    await EncryptedStorage.setItem(STOEAGE_KEY.SELECTED_LANGUAGE, language);
    return true;
  } catch (error) {
    return null;
  }
};
