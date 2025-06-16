import { useMemo } from 'react';
import { countries } from '../util/countryData';

export const useCountries = (searchTerm: string = '') => {
    const filteredCountries = useMemo(() => {
        if (!searchTerm) return countries;
        const term = searchTerm.toLowerCase();
        return countries.filter(
            c =>
                c.name.toLowerCase().includes(term) ||
                c.dialCode.includes(term) ||
                c.isoCode.toLowerCase().includes(term)
        );
    }, [searchTerm]);

    return filteredCountries;
};