import { FlatList, Text, View, StyleSheet, Image, TouchableOpacity, ToastAndroid } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { router } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setKursus } from "@/store/kursusSlice";
import { CourseCard } from "@/components/CourseCard";

const Home = () => {
    const dispatch = useDispatch();
    const kursusList = useSelector(state => state.kursus.data);

    const onGoToDetail = (itemId:String) => router.push(`/detail?id=${itemId}`);
    const onStartCourse = () => router.push('/Materi');

    const onGetData = async () => {
        try {
            const response = await axios.get('https://elearning-api-gold.vercel.app/api/kursus');
            dispatch(setKursus(response.data.data));
        } catch (error) {
                dispatch(setKursus([]));
                const message = error?.message || 'Gagal mengambil data';

                ToastAndroid.showWithGravity(
                    message,
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER,
                );
            }
        }

    useEffect(() => {
        onGetData();
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.cardContainer}>
            <Image
                source={{ uri: item.isComingSoon ? item.image : item.image || 'https://reactjs.org/logo-og.png' }}
                style={[styles.image, item.isComingSoon && styles.grayscaleImage]}
            />
            <View style={styles.cardInfo}>
                <View style={styles.infoHeader}>
                    <Text style={styles.chip}>{item.category || 'No Category'}</Text>
                    <Text style={styles.date}>May 2025</Text>
                </View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <View style={styles.buttonContainer}>
                    {!item.isComingSoon ? (
                        <>
                            <TouchableOpacity onPress={onGoToDetail} style={styles.buttonWrapper}>
                                <LinearGradient
                                    colors={['#6a1b9a', '#8e24aa']}
                                    style={styles.buttonGradient}
                                >
                                    <Text style={styles.buttonText}>Preview</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onStartCourse} style={styles.buttonWrapper}>
                                <LinearGradient
                                    colors={['#1a23ab', '#265e9e']}
                                    style={styles.buttonGradient}
                                >
                                    <Text style={styles.buttonText}>Start</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </>
                    ) : (
                        <View style={styles.buttonWrapper}>
                            <LinearGradient
                                colors={['#999999', '#bbbbbb']}
                                style={styles.buttonGradient}
                            >
                                <Text style={styles.buttonText}>Coming Soon</Text>
                            </LinearGradient>
                        </View>
                    )}
                </View>
            </View>
        </View>
    );

    return (
        <SafeAreaProvider>
            <FlatList
                contentContainerStyle={{ padding: 20 }}
                data={kursusList}
                onRefresh={onGetData}
                refreshing={refreshing}
                keyExtractor={item => item._id}
                renderItem={({ item }) => (
                    <CourseCard
                        onGoToDetail={() => onGoToDetail(item._id)}
                        onStartCourse={onStartCourse}
                        catergory={item.kategori || item.category}
                        title={item.title}
                        deskription={item.deskripsi || item.description}
                        image={item.img_url || item.image}
                        tanggal={item.tgl || "May 2025"}
                    />
                )}
            />
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f0f0f0',
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
    grayscaleImage: {
        opacity: 0.5,
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
