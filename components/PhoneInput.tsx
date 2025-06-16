// src/components/PhoneInput.tsx
import React, { useRef, useState } from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { usePhoneNumber } from '../hooks/usePhoneNumber';
import { Country, PhoneInputProps } from '../types';
import { getCountryByCode } from '../util/countryData';
import { createStyles } from '../util/styles';
import { CountryPicker } from './CountryPicker';
import { Flag } from './Flag';

export const PhoneInput = ({
    value,
    onChange,
    defaultCountry = 'US',
    theme = 'light',
    placeholder = 'Phone number',
    style,
    textStyle,
    flagStyle,
}: PhoneInputProps) => {
    const [showPicker, setShowPicker] = useState(false);
    const inputRef = useRef<TextInput>(null);

    const {
        value: phoneValue,
        setValue,
        country,
        setCountry,
        formatted,
        isValid,
    } = usePhoneNumber(value, getCountryByCode(defaultCountry));

    const styles = createStyles(theme);

    const handleChange = (text: string) => {
        setValue(text);
        onChange(formatted, isValid);
    };

    const handleCountrySelect = (selectedCountry: Country) => {
        setCountry(selectedCountry);
        // Focus input after country selection
        setTimeout(() => inputRef.current?.focus(), 100);
    };

    return (
        <>
            <View style={[styles.container, style]}>
                <TouchableOpacity
                    style={styles.countryButton}
                    onPress={() => setShowPicker(true)}>
                    <Flag country={country} style={flagStyle} />
                    <Text style={[styles.countryName, textStyle]}>{country.dialCode}</Text>
                </TouchableOpacity>
                <TextInput
                    ref={inputRef}
                    style={[styles.input, textStyle]}
                    value={formatted}
                    onChangeText={handleChange}
                    placeholder={placeholder}
                    placeholderTextColor={theme === 'dark' ? '#888' : '#999'}
                    keyboardType="phone-pad"
                />
            </View>
            <CountryPicker
                visible={showPicker}
                onSelect={handleCountrySelect}
                onClose={() => setShowPicker(false)}
                theme={theme}
            />
        </>
    );
};