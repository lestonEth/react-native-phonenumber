import { Country } from '@/types';
import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';

type FlagProps = {
    country: Country;
    style?: StyleProp<ViewStyle>;
};

export const Flag = ({ country, style }: FlagProps) => (
    <View style={style}>
        <Text style={{ fontSize: 20 }}>{country.flag}</Text>
    </View>
);