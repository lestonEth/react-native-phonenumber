import { TextStyle, ViewStyle } from "react-native";

import { StyleProp } from "react-native";

export type Country = {
    isoCode: string;
    name: string;
    dialCode: string;
    flag: string;
};

export type PhoneInputProps = {
    value: string;
    onChange: (value: string, isValid: boolean) => void;
    defaultCountry?: string;
    theme?: 'light' | 'dark';
    placeholder?: string;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    flagStyle?: StyleProp<ViewStyle>;
};

export type CountryPickerProps = {
    visible: boolean;
    onSelect: (country: Country) => void;
    onClose: () => void;
    theme?: 'light' | 'dark';
};