import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { router } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';

const Home = () => {
    const ongotToDetail = () => {
        router.push('/detail')
    }
    return (
        <SafeAreaProvider>
            <ScrollView>
                <View style={styles.container}>
                    {[1, 2].map((_, index) => (
                        <View key={index} style={styles.cardContainer}>
                            <Image 
                                source={{ uri: 'https://reactjs.org/logo-og.png' }}
                                style={styles.image}
                            />
                            <View style={styles.cardInfo}>
                                <View style={styles.infoHeader}>
                                    <Text style={styles.chip}>Category</Text>
                                    <Text style={styles.date}>March 2025</Text>
                                </View>
                                <Text style={styles.title}>React Native Navigation</Text>
                                <Text style={styles.description}>
                                    When the text is rendered, the onLayout function gets called with the layout data.
                                </Text>
                                <View style={styles.buttonContainer}>
                                    <TouchableOpacity onPress={ongotToDetail} style={styles.buttonWrapper}>
                                        <LinearGradient
                                            colors={['#6a1b9a', '#8e24aa']}
                                            style={styles.buttonGradient}
                                        >
                                            <Text style={styles.buttonText}>Preview</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.buttonWrapper}>
                                        <LinearGradient
                                            colors={['#1a23ab', '#265e9e']}
                                            style={styles.buttonGradient}
                                        >
                                            <Text style={styles.buttonText}>Start</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f0f0f0',
        flex: 1,
    },
    cardContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        marginBottom: 15,
    },
    image: {
        width: 100,
        height: 150,
        borderRadius: 10,
    },
    cardInfo: {
        flex: 1,
        marginLeft: 12,
        justifyContent: 'space-between',
    },
    infoHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    chip: {
        backgroundColor: '#e6e4e1',
        paddingVertical: 3,
        paddingHorizontal: 8,
        borderRadius: 5,
        fontSize: 12,
    },
    date: {
        fontSize: 12,
        color: '#888',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 4,
    },
    description: {
        fontSize: 13,
        color: '#666',
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 10,
    },
    buttonWrapper: {
        marginRight: 10,
    },
    buttonGradient: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '600',
    },
});

export default Home;
