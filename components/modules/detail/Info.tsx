import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export const Info = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image 
                source={{ uri: 'https://reactjs.org/logo-og.png' }}
                style={styles.image}
            />
            <Text style={styles.title}>React Native Navigation</Text>
            <Text style={styles.description}>
                React Native Navigation memungkinkan pengembang membangun aplikasi seluler dengan antarmuka yang mulus dan intuitif. Dengan menggunakan pustaka ini, kamu dapat membuat navigasi yang mudah diatur, transisi halaman yang menarik, serta pengalaman pengguna yang lebih dinamis.
            </Text>
            <Text style={styles.subtitle}>Fitur Unggulan:</Text>
            <Text style={styles.feature}>- Navigasi Stack</Text>
            <Text style={styles.feature}>- Navigasi Tab</Text>
            <Text style={styles.feature}>- Drawer Navigation</Text>
            <Text style={styles.feature}>- Deep Linking</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#F5F5F5',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 15,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#265e9e',
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    feature: {
        fontSize: 14,
        color: '#444',
        marginBottom: 5,
    }
});
