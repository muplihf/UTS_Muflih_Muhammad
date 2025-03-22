import { View, Text, StyleSheet, ScrollView } from "react-native";

export const Materi = () => {
    const materiList = [
        "Pengenalan React Native",
        "Instalasi dan Konfigurasi",
        "Komponen Dasar",
        "Styling dan Layout",
        "Navigasi Antar Halaman",
        "Pengelolaan State",
        "Integrasi API",
        "Deployment ke Play Store & App Store"
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Daftar Materi</Text>
            {materiList.map((item, index) => (
                <View key={index} style={styles.materiItem}>
                    <Text style={styles.index}>{index + 1}.</Text>
                    <Text style={styles.materiText}>{item}</Text>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#F5F5F5',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#265e9e',
        marginBottom: 15,
    },
    materiItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginBottom: 5,
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    index: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
        color: '#265e9e',
    },
    materiText: {
        fontSize: 14,
        color: '#444',
    }
});
