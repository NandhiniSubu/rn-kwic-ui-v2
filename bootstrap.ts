import {Navigation} from 'react-native-navigation';
import {Platform} from 'react-native';

import {registerCoreModuleScreens} from '@screens/index';
import {setFlashRoot, setLanguageRoot} from '@common/root-navigations';
import i18n from '@services/i18n';
import {getSelectedLanguage} from '@services/localstorage/language';
import {getToken} from '@framework/utils/get-token';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const initI18n = i18n;

async function startApp() {
  console.log('Start APP Calling');

  Navigation.setDefaultOptions({
    // animations: animation,
    statusBar: {
      backgroundColor: 'white',
    },
    topBar: {
      title: {
        color: 'black',
      },
      backButton: {
        color: 'black',
      },
      background: {
        color: 'white',
      },
      //animate: false,
      elevation: 0,
      visible: false,
    },
    layout: {
      backgroundColor: 'white',
      orientation: ['portrait'],
    },
    ...Platform.select({
      android: {
        animations: {
          push: {
            waitForRender: true,
            content: {
              translationX: {
                from: require('react-native').Dimensions.get('window').width,
                to: 0,
                interpolation: {type: 'decelerate'},
                duration: 300,
              },
            },
          },
          pop: {
            content: {
              translationX: {
                from: 0,
                to: require('react-native').Dimensions.get('window').width,
                duration: 300,
                interpolation: {type: 'decelerate'},
              },
            },
          },
        },
      },
      default: {},
    }),
  });

  registerCoreModuleScreens();
  Navigation.events().registerAppLaunchedListener(async () => {
    // await setFlashRoot();
    const lang = await getSelectedLanguage();
    const access_token = await getToken();
    console.log('initial language : ', lang);
    console.log('Access token : ', access_token);
    if (lang) {
      await i18n.changeLanguage(lang);
      await setFlashRoot();
    } else {
      await setLanguageRoot();
    }
  });
}
export {startApp};
