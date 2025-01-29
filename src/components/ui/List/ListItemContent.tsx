import {StyleSheet, View} from 'react-native';
import React from 'react';
import {TextBody} from '../Text/TextBody';

const ListItemContent = React.memo((props: any) => {
  const {title, subtitle, option1} = props;
  return (
    <View style={styles.txt_con}>
      <TextBody
        nativeTextProps={{numberOfLines: 1}}
        size={'lg'}
        fontFamily={'Medium'}
        color={'primary'}>
        {title}
      </TextBody>
      <TextBody size={'md'} fontFamily={'Regular'} color={'secondary'}>
        {subtitle}
      </TextBody>
      {option1 ? (
        <TextBody size={'md'} fontFamily={'Regular'} color={'secondary'}>
          {option1}
        </TextBody>
      ) : null}
    </View>
  );
});

export default ListItemContent;

const styles = StyleSheet.create({
  txt_con: {
    flex: 1,
    justifyContent: 'center',
    rowGap: 5,
  },
});
