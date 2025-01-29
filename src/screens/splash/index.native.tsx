import React from 'react';
import {useTheme} from '@config/ThemeProvider';
import {CORE_SCREENS} from '@constants/app';
import {observer} from 'mobx-react-lite';
import {useTranslation} from 'react-i18next';
import {StyleSheet, SafeAreaView, ActivityIndicator, View} from 'react-native';
import {useNavigationComponentDidAppear} from 'react-native-navigation-hooks/dist';
import {Text} from '@components/ui/Text';

const SplashScreen = (props: any) => {
  const {componentId} = props;
  const {theme} = useTheme();
  const {t} = useTranslation(['common']);
  useNavigationComponentDidAppear(async e => {
    console.log(`${e.componentName} appeared`);
  }, componentId);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome To React Native</Text>
    </SafeAreaView>
  );
};

SplashScreen.screenId = CORE_SCREENS.SPLASHSCREEN;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default observer(SplashScreen);
