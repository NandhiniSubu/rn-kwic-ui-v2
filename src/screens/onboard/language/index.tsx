import React from 'react';
import {setFlashRoot} from '@common/root-navigations';
import {Button} from '@components/ui/Button';
import {Heading, TextBody} from '@components/ui/Text';
import {useTheme} from '@config/ThemeProvider';
import {CORE_SCREENS} from '@constants/app';
import {setSelectedLanguage} from '@services/localstorage/language';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  View,
  useWindowDimensions,
} from 'react-native';
import {ScreenFC} from '@utils/types';

const DATA = [
  {
    id: 'en',
    title: 'E',
    color: '#EFF6FF',
    description: 'English',
  },
  {
    id: 'ta',
    color: '#D1FAE5',
    title: 'த',
    description: 'தமிழ்',
  },
];

const LanguageItem = (props: any) => {
  const {title, description, color, isSelected} = props;
  const theme = useTheme();
  const dimentsion = useWindowDimensions();
  return (
    <View
      style={{
        flexDirection: 'row',
        columnGap: 16,
        backgroundColor: isSelected
          ? theme.theme.colors.primary
          : theme.theme.colors.white,
        padding: 16,
        alignItems: 'center',
        width: dimentsion.width / 2 - 28,
        borderRadius: 8,
      }}>
      <View>
        <View
          style={{
            width: 45,
            height: 45,
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isSelected ? theme.theme.colors.white : color,
          }}>
          <Heading h4>{title}</Heading>
        </View>
      </View>
      <View>
        <TextBody
          fontFamily={'Regular'}
          color={isSelected ? 'white' : 'primary'}>
          {description}
        </TextBody>
      </View>
    </View>
  );
};

const LanguageChooseScreen: ScreenFC = () => {
  const [lang, setLang] = useState('en');
  const {i18n} = useTranslation();
  const handleOnNext = async () => {
    console.log('Cureent Language', lang);
    await i18n.changeLanguage(lang);
    await setSelectedLanguage(lang);
    await setFlashRoot();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#E6E8EA',
          gap: 8,
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            flex: 1,
            paddingVertical: 16,
          }}>
          <View
            style={{
              paddingVertical: 16,
            }}>
            <Heading h5 color={'primary'}>
              Select Language
            </Heading>
          </View>

          <TextBody color={'secondary'}>
            Please select the language that you can read and understand easily
          </TextBody>
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <FlatList
            data={DATA}
            renderItem={({item}) => (
              <Pressable onPress={() => setLang(item.id)}>
                <LanguageItem isSelected={lang == item.id} {...item} />
              </Pressable>
            )}
            keyExtractor={item => item.id}
            contentContainerStyle={{}}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            numColumns={2}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            paddingVertical: 16,
          }}>
          <Button onPress={handleOnNext} title={'Continue'} />
        </View>
      </View>
    </SafeAreaView>
  );
};
LanguageChooseScreen.screenId = CORE_SCREENS.ONBOARD_LANGUAGE;

export default LanguageChooseScreen;
