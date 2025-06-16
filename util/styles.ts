import { StyleSheet } from 'react-native';

export const createStyles = (theme: 'light' | 'dark') =>
    StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: theme === 'dark' ? '#222' : '#FFF',
            borderRadius: 8,
            paddingHorizontal: 12,
            height: 50,
        },
        input: {
            flex: 1,
            color: theme === 'dark' ? '#FFF' : '#000',
            marginLeft: 8,
        },
        countryButton: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        countryName: {
            color: theme === 'dark' ? '#FFF' : '#000',
            marginHorizontal: 4,
        },
        modalContainer: {
            flex: 1,
            backgroundColor: theme === 'dark' ? '#121212' : '#F5F5F5',
            padding: 20,
        },
        searchInput: {
            height: 40,
            borderColor: theme === 'dark' ? '#444' : '#CCC',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            marginBottom: 10,
            color: theme === 'dark' ? '#FFF' : '#000',
        },
        countryItem: {
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: theme === 'dark' ? '#333' : '#EEE',
        },
    });