// Import Libraries for making a component
import React from 'react';
import { View, Text } from 'react-native';

// Make a component
const Header = () => {
    const { textStyle } = styles;

    return <Text style={textStyle}>Albums!</Text>;
};

// Define the Styles specific to the component
const styles = {
    textStyle: {
        fontSize: 20,
    }
};

// Make component available to other parts of the app
export default Header;

