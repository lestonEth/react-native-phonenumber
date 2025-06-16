import { PhoneInput } from '@/components';
import { useState } from 'react';
import { Dimensions, Text, View } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default function Home() {
    const [phoneNumber, setPhoneNumber] = useState<string | undefined>(undefined);
    const [isValid, setIsValid] = useState<boolean | undefined>(undefined);

    const handleChange = (value: string, isValid: boolean) => {
        setPhoneNumber(value);
        setIsValid(isValid);
    };

    return (
        <View
            style={{ flex: 1, paddingVertical: 40, paddingHorizontal: 10 }}
        >
            <Text style={{ marginBottom: 10 }}>Phone Number</Text>
            <PhoneInput
                value={phoneNumber || ''}
                onChange={handleChange}
                defaultCountry="US"
                theme="light"
            />
            <Text style={{ marginTop: 10 }}>{isValid ? 'Valid' : 'Invalid'} phone number</Text>
        </View>
    )
}

