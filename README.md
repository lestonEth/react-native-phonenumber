# React Native Phone Input

A customizable phone number input component with country code selection and validation.

## Features

- Country code picker with search functionality
- Automatic phone number formatting
- Phone number validation
- Light/dark theme support
- Customizable styles
- TypeScript support

## Installation

1. Install the package:

```bash
npm install react-native-phone-input
# or
yarn add react-native-phone-input

npm install libphonenumber-js
# or
yarn add libphonenumber-js
Usage
jsx
import React from 'react';
import { PhoneInput } from 'react-native-phone-input';

const App = () => {
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [isValid, setIsValid] = React.useState(false);

  return (
    <PhoneInput
      value={phoneNumber}
      onChange={(value, valid) => {
        setPhoneNumber(value);
        setIsValid(valid);
      }}
      defaultCountry="US"
      theme="light" // or 'dark'
      placeholder="Enter phone number"
    />
  );

};
export default App;
```

### Styling
You can customize the appearance by passing style props or by modifying the theme:

```bash
<PhoneInput
  style={{ backgroundColor: '#f5f5f5' }}
  textStyle={{ color: '#333' }}
  flagStyle={{ marginRight: 8 }}
/>
```
### Validation
The component automatically validates phone numbers according to the selected country's format. The onChange callback provides a boolean indicating whether the current input is valid.

Country Data
The component includes a comprehensive list of countries with:

* ISO country codes

* Country names

* Dial codes

* Emoji flags

You can search countries by:

* Name (e.g., "United States")

* Dial code (e.g., "+1")

### TypeScript Support
The package includes TypeScript type definitions for all props and components.

### Licence 