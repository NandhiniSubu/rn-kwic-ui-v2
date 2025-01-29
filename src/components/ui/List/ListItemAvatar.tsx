import {StyleSheet, View} from 'react-native';
import React from 'react';

const ListItemAvatar = React.memo((props: any) => {
  const {image, Snapshot, containerStyle} = props;
  return (
    <View style={[styles.img_container, containerStyle]}>
      {image ? (
        <View style={styles.img_con}>{image}</View>
      ) : (
        <View style={styles.img_con}>{Snapshot}</View>
      )}
    </View>
  );
});

export default ListItemAvatar;

const styles = StyleSheet.create({
  img_container: {
    // width: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img_con: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
