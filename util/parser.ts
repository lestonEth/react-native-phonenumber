// src/util/parser.ts
import { CountryCode, parsePhoneNumberFromString } from 'libphonenumber-js';
import { Country } from '../types';
import { countries } from './countryData';

export const parsePhoneNumber = (input: string, currentCountry: Country) => {
    let detectedCountry = currentCountry;
    const cleanInput = input.replace(/\D/g, '');

    if (input.startsWith('+') && cleanInput.length > 1) {
        let bestMatch: Country | null = null;
        let maxMatchLength = 0;

        for (const country of countries) {
            const cleanDialCode = country.dialCode.replace(/\D/g, '');
            if (cleanInput.startsWith(cleanDialCode)) {
                if (cleanDialCode.length > maxMatchLength) {
                    maxMatchLength = cleanDialCode.length;
                    bestMatch = country;
                }
            }
        }

        if (bestMatch) detectedCountry = bestMatch;
    }

    // Parse phone number with detected country
    try {
        if (cleanInput === detectedCountry.dialCode.replace(/\D/g, '')) {
            return {
                formatted: `+${cleanInput}`,
                isValid: false,
                country: detectedCountry
            };
        }
        const phoneNumber = parsePhoneNumberFromString(input, {
            defaultCountry: detectedCountry.isoCode as CountryCode,
        });
        return {
            formatted: phoneNumber?.formatInternational() || input,
            isValid: phoneNumber?.isValid() || false,
            country: detectedCountry,
        };
    } catch {
        return {
            formatted: input,
            isValid: false,
            country: detectedCountry,
        };
    }
};