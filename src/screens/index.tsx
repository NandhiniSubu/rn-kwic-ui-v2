import {registerScreen} from '@common/register-navigation-screen';
import {registerCommonModule} from './common/get-screen-root';

export const registerCoreModuleScreens = () => {
  const SplashScreen = require('@screens/splash/index.native').default;
  registerScreen(SplashScreen.screenId, SplashScreen);

  // const LoginScreen = require('@screens/auth/login/index').default;
  // registerScreen(LoginScreen.screenId, LoginScreen);
  // const LanguageChooseScreen =
  //   require('@screens/onboard/language/index').default;
  // registerScreen(LanguageChooseScreen.screenId, LanguageChooseScreen);

  //Module
  registerCommonModule();
};
