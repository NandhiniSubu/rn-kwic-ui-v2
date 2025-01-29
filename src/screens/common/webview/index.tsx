import {Text} from '@components/ui/Text/Text';
import TopBar from '@components/ui/TopBar/TopBar';
import {ScreenFC} from '@utils/types';
import React, {useCallback} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Navigation, NavigationProps} from 'react-native-navigation';
import WebView from 'react-native-webview';
import {SCREEN_COMMON_MODULE} from '../get-screen-root';

interface WebViewScreenProps extends NavigationProps {
  link: string;
  top_bar?: boolean;
}

const WebViewScreen: ScreenFC<WebViewScreenProps> = props => {
  const {link, top_bar = true, componentId} = props;

  const handleBackPress = useCallback(async () => {
    await Navigation.pop(componentId);
  }, [componentId]);

  if (link == '') {
    return (
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <TopBar leftIconPress={handleBackPress} />
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>URL Not Found!</Text>
        </View>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      {top_bar ? <TopBar leftIconPress={handleBackPress} /> : null}
      <WebView source={{uri: link}} style={{flex: 1}} />
    </SafeAreaView>
  );
};
WebViewScreen.screenId = SCREEN_COMMON_MODULE.WEBVIEW;
export default WebViewScreen;
