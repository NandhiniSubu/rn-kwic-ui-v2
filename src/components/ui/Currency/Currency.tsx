import React, {ReactNode} from 'react';
import {View} from 'react-native';
import _get from 'lodash/get';
import {TextBody} from '../Text';

type CurrencyProps = {
  children?: ReactNode;
  type?: 'INR';
  value: String;
};

const CURRENCY = {
  INR: {
    symbol: '₹',
  },
};

const Currency = (props: CurrencyProps) => {
  const {type = 'INR', value} = props;

  const _symbol = _get(CURRENCY, type, CURRENCY['INR']);

  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 2,
      }}>
      <TextBody size={'xl'} fontFamily={'Semibold'} color={'primary'}>
        {_symbol.symbol}
      </TextBody>
      <TextBody size={'xl'} fontFamily={'Semibold'} color={'primary'}>
        {value}
      </TextBody>
    </View>
  );
};

export default Currency;
