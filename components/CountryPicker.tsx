import { useCountries } from '@/hooks/useCountries';
import React, { useState } from 'react';
import {
    FlatList,
    Modal,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { CountryPickerProps } from '../types';
import { createStyles } from '../util/styles';

export const CountryPicker = ({
    visible,
    onSelect,
    onClose,
    theme = 'light',
}: CountryPickerProps) => {
    const [searchTerm, setSearchTerm] = useState('');
    const countries = useCountries(searchTerm);
    const styles = createStyles(theme);

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.modalContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search countries..."
                    placeholderTextColor={theme === 'dark' ? '#888' : '#999'}
                    value={searchTerm}
                    onChangeText={setSearchTerm}
                />
                <FlatList
                    data={countries}
                    keyExtractor={item => item.isoCode}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.countryItem}
                            onPress={() => {
                                onSelect(item);
                                onClose();
                            }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 20, marginRight: 10 }}>{item.flag}</Text>
                                <Text style={{ color: theme === 'dark' ? '#FFF' : '#000' }}>
                                    {item.name} ({item.dialCode})
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </Modal>
    );
};