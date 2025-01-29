import {ContainerWrapper} from '@components/Container/Container';
import {Button} from '@components/ui/Button';
import {Text, TextBody} from '@components/ui/Text';
import {CORE_SCREENS} from '@constants/app';
import {observer} from 'mobx-react-lite';
import {useTranslation} from 'react-i18next';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {useNavigationComponentDidAppear} from 'react-native-navigation-hooks/dist';
const LoginScreen = (props: any) => {
  const {componentId} = props;
  const {t} = useTranslation();
  useNavigationComponentDidAppear(async e => {
    console.log(`${e.componentName} appeared`);
  }, componentId);

  return (
    <SafeAreaView style={styles.container}>
      <ContainerWrapper>
        <View style={styles.header_con}>
          <View>
            {/* <TextBody  fontFamily={'Regular'} size={'xl'} color={'#1A2C3E'}> */}
            <Text h2 h2Style={{color: '#1A2C3E', fontWeight: '700'}}>
              {t('common:welcome')}
            </Text>
            {/* </TextBody> */}
          </View>
          <View style={styles.txt_con}>
            <TextBody
              style={{textAlign: 'center', lineHeight: 25}}
              fontFamily={'Regular'}
              size={'md'}
              color={'secondary'}>
              {t('authentication:description')}{' '}
            </TextBody>
          </View>
        </View>
        <View style={styles.body_con}>
          <View style={styles.logo_con}></View>
          <View style={styles.footer_con}>
            <Button title={t('authentication:login_to_app')} />
          </View>
        </View>
      </ContainerWrapper>
    </SafeAreaView>
  );
};

LoginScreen.screenId = CORE_SCREENS.LOGIN_SCREEN;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    flex: 1,
    // backgroundColor: 'pink',
  },
  logo_container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  last_txt_container: {
    flex: 0.5,
    height: 18,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10,
  },
  main_con: {
    flex: 1,
  },

  header_con: {
    flex: 0.4,

    alignItems: 'center',
    paddingTop: 60,
    gap: 10,
  },
  body_con: {
    flex: 1,
    justifyContent: 'space-between',
  },
  logo_con: {
    alignItems: 'center',
  },
  footer_con: {
    flex: 1,
    marginBottom: 20,
    justifyContent: 'flex-end',
  },
  txt_con: {
    maxWidth: 190,
    textAlign: 'center',
  },
});

export default observer(LoginScreen);
