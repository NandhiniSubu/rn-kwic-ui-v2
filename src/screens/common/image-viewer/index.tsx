import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useCallback} from 'react';
import {Navigation} from 'react-native-navigation';
import TopBar from '@components/ui/TopBar/TopBar';
import {ScreenFC} from '@utils/types';
import {SCREEN_COMMON_MODULE} from '../get-screen-root';

const ImageViewScreen: ScreenFC = (props: any) => {
  const {componentId, imageUrl} = props;
  const handleBackPress = useCallback(async () => {
    await Navigation.pop(componentId);
  }, [componentId]);

  return (
    <SafeAreaView style={styles.container}>
      <TopBar leftIconPress={() => handleBackPress()} />

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {/* <Zoom> */}
        <Image style={{width: 500, height: 400}} source={{uri: imageUrl}} />
        {/* </Zoom> */}
      </View>
    </SafeAreaView>
  );
};

ImageViewScreen.screenId = SCREEN_COMMON_MODULE.IMAGE_VIEWER;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
export default ImageViewScreen;
