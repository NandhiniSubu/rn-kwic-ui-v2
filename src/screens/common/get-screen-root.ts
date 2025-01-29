import {registerScreen} from '@common/register-navigation-screen';

export const SCREEN_COMMON_MODULE = {
  IMAGE_VIEWER: 'com.app.common.imageviewer',
  WEBVIEW: 'com.app.common.webview',
};

export const registerCommonModule = () => {
  const ImageViewScreen = require('@screens/common/image-viewer/index').default;
  registerScreen(ImageViewScreen.screenId, ImageViewScreen);
  const WebviewScreen = require('@screens/common/webview/index').default;
  registerScreen(WebviewScreen.screenId, WebviewScreen);
};
