import {Pressable, StyleSheet, View} from 'react-native';
import React, {ReactNode} from 'react';
import {TextBody} from '@components/ui/Text';

interface HeaderRightContentProps {
  titleRhs: string;
  icon?: ReactNode;
  onPress?: () => void;
}
const HeaderRightContent = (props: HeaderRightContentProps) => {
  const {titleRhs, onPress, icon} = props;
  return (
    <Pressable onPress={onPress} style={styles.rightContainer}>
      <View style={styles.monthContainer}>
        <TextBody fontFamily={'Semibold'} size={'xs'} color={'red'}>
          {titleRhs}
        </TextBody>
      </View>
      <View style={styles.iconContainer}>{icon}</View>
    </Pressable>
  );
};

export default HeaderRightContent;

const styles = StyleSheet.create({
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: 'flex-end',
  },
  monthContainer: {
    marginRight: 10,
    justifyContent: 'center',
  },
  iconContainer: {},
});
