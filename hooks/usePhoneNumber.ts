import { useEffect, useState } from 'react';
import { Country } from '../types';
import { parsePhoneNumber } from '../util/parser';

export const usePhoneNumber = (
    initialValue: string,
    defaultCountry: Country
) => {
    const [value, setValue] = useState(initialValue);
    const [country, setCountry] = useState(defaultCountry);
    const [formatted, setFormatted] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [isCountryManuallySet, setIsCountryManuallySet] = useState(false);

    // Reset manual flag on value change
    useEffect(() => {
        setIsCountryManuallySet(false);
    }, [value]);

    useEffect(() => {
        const cleanValue = value.replace(/\D/g, '');
        const cleanDialCode = country.dialCode.replace(/\D/g, '');

        // Handle special case: input exactly matches dial code
        if (cleanValue === cleanDialCode) {
            setFormatted(`+${cleanValue}`);
            setIsValid(false);
            return;
        }

        const {
            formatted: newFormatted,
            isValid: newIsValid,
            country: detectedCountry
        } = parsePhoneNumber(value, country);

        setFormatted(newFormatted);
        setIsValid(newIsValid);

        // Auto-update country if not manually set and detection changed
        if (!isCountryManuallySet && detectedCountry.isoCode !== country.isoCode) {
            setCountry(detectedCountry);
        }
    }, [value, country, isCountryManuallySet]);

    // Manual country setter
    const setCountryManually = (newCountry: Country) => {
        setIsCountryManuallySet(true);
        setCountry(newCountry);
    };

    return {
        value,
        setValue,
        country,
        setCountry: setCountryManually, // Expose manual setter
        formatted,
        isValid,
    };
};