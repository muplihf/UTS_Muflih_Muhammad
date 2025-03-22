import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonTabsProps {
    title: string;
    isActive: boolean;
    onPress: () => void;
    customeStyle?: object;  // Agar bisa menerima style kustom dari luar
}

export const ButtonTabs: React.FC<ButtonTabsProps> = ({ title, isActive, onPress, customeStyle }) => {
    return (
        <TouchableOpacity 
            style={[styles.button, customeStyle]} 
            onPress={onPress} 
            activeOpacity={0.8}
        >
            <Text style={[styles.text, { color: isActive ? '#1976D2' : '#888' }]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 10,
    },
    text: {
        fontSize: 14,
        fontWeight: '600',
    }
});
