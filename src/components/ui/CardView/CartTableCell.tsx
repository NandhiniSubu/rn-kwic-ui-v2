import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextBody} from '../Text/TextBody';

export const CardTableCell = (props: any) => {
  const {title, subtitle} = props;
  return (
    <View style={styles.personal_info}>
      <TextBody size={'md'} fontFamily={'Medium'} color={'secondary'}>
        {title}
      </TextBody>
      <TextBody size={'lg'} fontFamily={'Regular'} color={'primary'}>
        {subtitle}
      </TextBody>
    </View>
  );
};

const styles = StyleSheet.create({
  personal_info: {
    flex: 1,
    rowGap: 2,
  },
});
